import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: true,
        categories: [],
        jokes: [],
        activeCategory: undefined,
        activeItem: undefined
    },
    mutations: {
        setLoadingStatus(state, status) {
            state.isLoading = status;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        createJokesContainer(state, categories) {
            let obj = {};
            categories.forEach(e => {
                obj[e] = [];
            });
            state.jokes = obj;
        },
        pushJokeToCategory(state, payload) {
            let categoryName = payload.category;
            let activeCategory = state.jokes[categoryName];
            if (activeCategory) {
                let objectExists = activeCategory.find(e => e.id === payload.joke.id);
                if (!objectExists && activeCategory.length < 3) {
                    activeCategory.push(payload.joke);
                }
            }
        },
        setActiveCategory(state, category) {
            state.activeCategory = category;
        },
        addJokeToFavorites(state, payload) {
            let jokes = state.jokes[state.activeCategory];
            let matchingObject = jokes.find(e => e.id === payload.jokeId);
            Vue.set(matchingObject, 'favorite', true)
        },
        removeJokeFromFavorites(state, payload) {
            let jokes = state.jokes[state.activeCategory];
            let matchingObject = jokes.find(e => e.id === payload.jokeId);
            Vue.set(matchingObject, 'favorite', undefined)
        }
    },
    actions: {
        fetchCategories({ commit }) {
            commit('setLoadingStatus', true);
            axios.get('https://api.chucknorris.io/jokes/categories').then(response => {
                commit('setLoadingStatus', false);
                commit('setCategories', response.data);
                commit('createJokesContainer', response.data)
            })
        },
        fetchJokes(context) {
            let category = context.state.activeCategory;
            context.commit('setLoadingStatus', true);
            axios.all([
                request(),
                request(),
                request(),
                request()
            ]).then(() => {
                context.commit('setLoadingStatus', false)
            });

            async function request() {
                let url = "https://api.chucknorris.io/jokes/random?category=" + category;

                await axios.get(url).then(response => {
                    context.commit('pushJokeToCategory', {
                        joke: response.data,
                        category: category
                    });
                });
            }
        },
        selectCategory( { commit, dispatch, state }, payload) {
            let category = payload.category;
            commit('setActiveCategory', category);
            if (state.jokes[category] && state.jokes[category].length === 0) {
                dispatch("fetchJokes");
            }
        }
    },
    getters: {
        getCategories: state => {
            return state.categories;
        },
        getFavoriteCount: (state) => (category) => {
            let count = 0;
            let jokes = state.jokes[category];
            jokes.forEach(e => {
                if (e.favorite) count ++;
            });
            return count;
        }
    }
});
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
            //
            if (activeCategory) {
                activeCategory.push(payload.joke);
            }
        },
        setActiveCategory(state, category) {
            state.activeCategory = category;
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
            // context.commit('setLoadingStatus', true);
            let url = "https://api.chucknorris.io/jokes/random?category=" + category;
            for (let i = 0; i < 3; i++) {
                axios.get(url).then(response => {
                    context.commit('pushJokeToCategory', {
                        joke: response.data,
                        category: category
                    });
                })
            }
        },
        selectCategory( { commit, dispatch, state }, payload) {
            let category = payload.category;
            commit('setActiveCategory', category);
            if (state.jokes[category].length === 0) {
                dispatch("fetchJokes");
            }

        }
    },
    getters: {
        getCategories: state => {
            return state.categories;
        }
    }
});
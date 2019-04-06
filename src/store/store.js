import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: true,
        categories: [],
        jokes: [],
        activeCategory: "explicit",
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
        fetchCategories(context) {
            context.commit('setLoadingStatus', true);
            axios.get('https://api.chucknorris.io/jokes/categories').then(response => {
                context.commit('setLoadingStatus', false);
                context.commit('setCategories', response.data);
                context.commit('createJokesContainer', response.data)
            })
        },
        fetchJoke(context) {
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
        selectCategory(context, payload) {
            let category = payload.category;
            context.commit('setActiveCategory', category);

        }
    },
    getters: {
        getCategories: state => {
            return state.categories;
        }
    }
});
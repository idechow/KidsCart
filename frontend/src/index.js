import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

// import { getMeals, searchMeals, getSingleMeal} from './util/meal_util';
import {fetchSelectMeals} from './actions/select_meals_actions';
// import {fetchSelectMeals} from './util/select_meals_util';
import { createSelectMeals} from './actions/select_meals_actions'
import {
    // getMeals,
    // searchMeals,
    getSingleMeal,
} from './util/meal_util';

import { fetchMeals, fetchSearchMeals, fetchMeal} from './actions/meal_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
  

    if (localStorage.jwtToken) {
        // console.log(localStorage.jwtToken, "localStorage")
        
        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }

    //test start
    // window.getMeals = getMeals
    // window.searchMeals = searchMeals
    window.dispatch = store.dispatch
    window.getState = store.getState
    window.fetchMeals = fetchMeals
    window.fetchSearchMeals = fetchSearchMeals
   //  window.getSingleMeal = getSingleMeal
    window.fetchMeal = fetchMeal
    window.fetchSelectMeals = fetchSelectMeals
   window.createSelectMeals = createSelectMeals
    //test end
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
});
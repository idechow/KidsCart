import * as SelectMealsApiUtil from "../util/select_meals_util";

export const RECEIVE_SELECT_MEALS = "RECEIVE_SELECT_MEALS";
export const REMOVE_SELECT_MEAL = "RECEIVE_SELECT_MEAL";

export const receiveSelectMeals = selectMeals => ({
   type: RECEIVE_SELECT_MEALS,
   selectMeals
})

export const removeSelectMeal = (mealId, childId) => ({
   type: RECEIVE_SELECT_MEALS,
   mealId,
   childId
})

export const fetchSelectMeals = childId => dispatch => (
   SelectMealsApiUtil.fetchSelectMeals(childId)
      .then(selectMeals => dispatch(receiveSelectMeals(selectMeals)))
      .catch(err => console.log(err))
);

export const deleteSelectMeal = (mealId, childId)  => dispatch => (
   SelectMealsApiUtil.deleteSelectMeal(mealId, childId)
      .then(() => dispatch(removeSelectMeal(mealId, childId)))
      .catch(err => console.log(err))
);

export const addSelectMeal = (mealId, childId, data) => dispatch => (
   SelectMealsApiUtil.addSelectMeal(mealId, childId, data)
      .then(meals => dispatch(receiveSelectMeals(meals)))
      .catch(err => console.log(err))
);

export const postSelectMeals = (childId, data) => dispatch => (
   SelectMealsApiUtil.postSelectMeals(childId, data)
      .then(selectMeals => dispatch(receiveSelectMeals(selectMeals)))
      .catch(err => console.log(err))
);
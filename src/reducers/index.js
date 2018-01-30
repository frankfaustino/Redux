import { combineReducers } from 'redux'

/* ——— When an action is dispatched, a Reducer is the function
  that actually changes the state appropriate to that action — or
  returns the existing state if the action is not applicable to that reducer. ——— */

/* ——— Reducers are "pure functions".
  They should not have any side-effects nor mutate the state
  — They must return a modified copy ——— */

const toggleMenu = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return state ? action.isOpen = false : action.isOpen = true
    default:
      return state;
  }
};

const itemsHasErrored = (state = false, action) => {
  switch(action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

const itemsIsLoading = (state = false, action) => {
  switch(action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

const items = (state = [], action) => {
  switch(action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items
    default:
      return state
  }
}

/* ——— Individual reducers are combined into a single
  rootReducer to create the discrete properties of the state. ——— */
export default combineReducers({
  toggleMenu, items, itemsIsLoading, itemsHasErrored
})
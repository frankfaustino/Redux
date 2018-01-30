import axios from 'axios'

/* ——— The only way to modify the state is through emitting an action,
  which is an object that describes what should change.
  Action Creators are the functions that are dispatched to
  emit a change – all they do is return an action. ——— */

export const toggleMenu = (bool) => {
  return {
    type: 'TOGGLE_MENU',
    isOpen: bool
  };
};

export const itemsHasErrored = (bool) => {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  }
}

export const itemsIsLoading = (bool) => {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
}

export const itemsFetchingDataSuccess = (items) => {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

export const itemsFetchData = (url) => {
  return async (dispatch) => {
    dispatch(itemsIsLoading(true))
    try {
      const response = await axios.get(url)
      dispatch(itemsIsLoading(false))
      dispatch(itemsFetchingDataSuccess(response.data))
    } catch (e) {
      dispatch(itemsHasErrored(true))
    }
  }
}
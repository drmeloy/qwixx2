export const ADD_ACTION = 'ADD_ACTION';
export const addAction = action => ({ type: ADD_ACTION, payload: action });

export const REMOVE_ACTION = 'REMOVE_ACTION';
export const removeAction = action => ({ type: REMOVE_ACTION, payload: action });

export const CLEAR_ACTIONS = 'CLEAR_ACTIONS';
export const clearActions = () => ({ type: CLEAR_ACTIONS });

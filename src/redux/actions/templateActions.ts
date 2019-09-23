import { Dispatch } from 'redux';

export const SET_TEXT = 'SET_TEXT';
export const SET_API_TEXT = 'SET_API_TEXT';

export const setText = (text: string) => (
  {
    payload: {
      text,
    },
    type: SET_TEXT,
  }
);

export const setApiText = (apiText: string) => (
  {
    payload: {
      apiText,
    },
    type: SET_API_TEXT,
  }
);

export const runActions = (url: string, newText: string = 'changed') => (dispatch: Dispatch) => {
  dispatch(setText(newText));

  return fetch(url)
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch(setApiText(JSON.stringify(jsonResponse)));
    })
    .catch((error: TypeError) => {
      dispatch(setApiText(error.message));
    });
};
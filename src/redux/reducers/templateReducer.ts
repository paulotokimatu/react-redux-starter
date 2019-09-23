import {
  SET_TEXT, SET_API_TEXT,
} from '../actions/templateActions';

const initialState: {
  apiText: string,
  text: string,
} = {
  apiText: 'initial',
  text: 'initial',
};

const templateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TEXT: {
      const { text } = action.payload;
      return {
        ...state,
        text,
      };
    }
    case SET_API_TEXT: {
      const { apiText } = action.payload;
      return {
        ...state,
        apiText,
      };
    }
    default: {
      return state;
    }
  }
};

export default templateReducer;

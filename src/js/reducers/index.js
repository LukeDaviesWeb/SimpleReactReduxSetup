import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  articles: [
    {
      title: 'title one',
      id: '1'
    },
    {
      title: 'title two',
      id: '2'
    }
  ],
  errors: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      errors: state.errors.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;

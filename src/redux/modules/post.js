import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// Actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// Action Creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// Initial Stae
const initialState = {
  list: [],
};

const initialPost = {
  id: 0,
  user_info: {
    user_name: "mean0",
    user_profile:
      "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
  },
  image_url:
    "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

// Reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),

    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreator = {
  setPost,
  addPost,
};

export { actionCreator };

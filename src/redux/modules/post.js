import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";

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

// Middelewares
const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    // Firestore에서 데이터 가져오기
    const postDB = firestore.collection("post");
    postDB.get().then((docs) => {
      // 리덕스 데이터 저장구조와 파이어 스토어 데이터 저장구조가 다르므로
      // 파이어 스토어에 저장된 데이터 저장구조를 이에 맞추어 변환해준다.
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();

        // ['comment_cnt', 'contents', ..]
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            // 현재 받아온 데이터 값이 문자열 "user_" 을 포함한다면(유전 개인 정보를 저장하는 변수명)
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
            // 파이어 스토어에섯 받아온 데이터에는 id가 없기 때문에 초기값으로 id를 미리 넣어준다.
            // 마찬가지로 파이어스토어에는 개인정보를 담아두는 user_info 객체가 없으므로 초기값으로 넣어준다.
          },
          { id: doc.id, user_info: {} }
        );
        post_list.push(post);
      });
      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

// Reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreator = {
  setPost,
  addPost,
  getPostFB,
};

export { actionCreator };

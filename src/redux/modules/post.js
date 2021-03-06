import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import moment from "moment";

import { actionCreator as imageActions } from "./image";

// Actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";

// Action Creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));

// Initial Stae
const initialState = {
  list: [],
};

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: "mean0",
  //   user_profile:
  //     "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
  // },
  image_url:
    "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
  contents: "고양이네요!",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
  layout: "",
};

// Middelewares
const editPostFB = (post_id = null, post = {}) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      console.log("게시물 정보가 없어요!");
      return;
    }
    const _image = getState().image.preview;

    const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
    const _post = getState().post.list[_post_idx];

    console.log(_post);

    const postDB = firestore.collection("post");

    if (_image === _post.image_url) {
      postDB
        .doc(post_id)
        .update(post)
        .then((doc) => {
          dispatch(editPost(post_id, { ...post }));
          dispatch(imageActions.setPreview(null));
          history.replace("/");
        });
      return;
    } else {
      const user_id = getState().user.user.uid;
      const _upload = storage
        .ref(`images/${user_id}_${new Date().getTime()}`)
        .putString(_image, "data_url");

      _upload
        .then((snapshot) => {
          snapshot.ref
            .getDownloadURL()
            .then((url) => {
              return url;
            })
            .then((url) => {
              // 파이어스토어 업데이트
              postDB
                .doc(post_id)
                .update({ ...post, image_url: url })
                .then((doc) => {
                  dispatch(editPost(post_id, { ...post, image_url: url }));
                  dispatch(imageActions.setPreview(null));
                  history.replace("/");
                });
            })
            .catch((err) => {
              window.alert("앗! 포스트 작성에 문제가 있어요!");
              console.log("post 작성에 실패했어요!", err);
            });
        })
        .catch((err) => {
          window.alert("앗! 이미지 업로드에 문제가 있어요!");
          console.log("앗! 이미지 업로드에 문제가 있어요!", err);
        });
    }
  };
};

const addPostFB = (contents = "", layout) => {
  return function (dispatch, getState, { history }) {
    const _user = getState().user.user; // 리덕스에서 데이터를 가져온다.
    const postDB = firestore.collection("post"); // 파이어스토어에서 저장할 컬렉션 정보를 가져온다.

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
      layout: layout,
    };

    const _image = getState().image.preview;

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          return url;
        })
        .then((url) => {
          // 파이어스토어 추가
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              let post = { user_info, ..._post, id: doc.id, image_url: url };
              dispatch(addPost(post));
              history.replace("/");

              // 다시 게시글 작성 페이지에 갔을 때 preview가 보이지 않도록 설정
              dispatch(imageActions.setPreview(null));
            })
            .catch((err) => {
              window.alert("앗! 포스트 작성에 문제가 있어요!");
              console.log("post 작성에 실패했어요!", err);
            });
        })
        .catch((err) => {
          window.alert("앗! 이미지 업로드에 문제가 있어요!");
          console.log("앗! 이미지 업로드에 문제가 있어요!", err);
        });
    });
  };
};

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    // Firestore에서 데이터 가져오기
    const postDB = firestore.collection("post");
    let query = postDB.orderBy("insert_dt", "desc").limit(2);

    query.get().then((docs) => {
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
    return;
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
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
  },
  initialState
);

const actionCreator = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
  editPostFB,
};

export { actionCreator };

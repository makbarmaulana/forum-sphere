import { api } from '../../utils/api';

export const ActionTypes = {
  GET_THREAD_DETAIL: 'thread/getThreadDetail',
};

export const getThreadDetailActionCreator = (threadDetail) => ({
  type: ActionTypes.GET_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

export const asyncGetThreadDetail = (id) => async (dispatch) => {
  try {
    const threadDetail = await api.getThreadDetail(id);
    dispatch(getThreadDetailActionCreator(threadDetail));
  } catch (error) {
    throw new Error(error.message);
  }
};

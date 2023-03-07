import { api } from '../../utils/api';
import { getAllUsersActionsCreator } from '../users/actions';
import { getAllThreadsActionsCreator } from '../threads/actions';

export const fetchingUsersAndThreads = () => async (dispatch) => {
  try {
    const users = await api.getAllUsers();
    dispatch(getAllUsersActionsCreator(users));

    const threads = await api.getAllThreads();
    dispatch(getAllThreadsActionsCreator(threads));
  } catch (error) {
    throw new Error(error.message);
  }
};

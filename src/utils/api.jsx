import axios from 'axios';

export const api = (() => {
  const instance = axios.create({
    baseURL: 'https://forum-api.dicoding.dev/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const setAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
  };

  const removeAccessToken = () => {
    localStorage.removeItem('accessToken');
  };

  const getAccessToken = () => localStorage.getItem('accessToken');

  const login = async ({ email, password }) => {
    try {
      const response = await instance.post('/login', { email, password });
      const { token } = response.data.data;
      return token;
    } catch (error) {
      throw new Error(error?.response?.data?.message);
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      const response = await instance.post('/register', { name, email, password });
      const { user } = response.data.data;
      return user;
    } catch (error) {
      throw new Error(error?.response?.data?.message);
    }
  };

  const getOwnProfile = async () => {
    const token = getAccessToken();
    if (!token) {
      throw new Error('Unauthorized');
    }

    try {
      const response = await instance.get('/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { user } = response.data.data;
      return user;
    } catch (error) {
      throw new Error(error?.response?.data?.message);
    }
  };

  const getAllUsers = async () => {
    const response = await instance.get('/users');
    const { users } = response.data.data;
    return users;
  };

  const getAllThreads = async () => {
    const response = await instance.get('/threads');
    const { threads } = response.data.data;
    return threads;
  };

  const getThreadDetail = async (id) => {
    const response = await instance.get(`/threads/${id}`);
    const { detailThread } = response.data.data;
    return detailThread;
  };

  return {
    setAccessToken,
    removeAccessToken,
    getAccessToken,
    login,
    register,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
    getThreadDetail,
  };
})();

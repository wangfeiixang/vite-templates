import request from '@/utils/axios';

/**
 * 登录
 */
export const login = (username: string, password: string) => {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password
    }
  });
};

import request from '../utils/reques';
// import store from '../store';

export const login = (data) => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data: data,
  });
};
export const logincode = (data) => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${data}`,
  });
};
export const userinfo = () => {
  return request({
    method: 'GET',
    url: '/v1_0/user',
    // headers: {
    //   Authorization: `Bearer ${store.state.user.token}`,
    // },
  });
};
export const userchannel = () => {
  return request({
    method: 'GET',
    url: '/v1_0/user/channels',
  });
};

const appKey = 'kid_ryhLI4riS';
const appSecret = '8e862dd451f94d9cb36c46b6f5a0f240';
const getAuthtoken = () => localStorage.getItem('authtoken');

export default {
    appKey,
    appSecret,
    basicURL: 'https://baas.kinvey.com',
    authSting: btoa(`${appKey}:${appSecret}`),
    getAuthtoken,
}
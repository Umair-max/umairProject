import client from './client';

const register = (useInfo) => client.post('/users', useInfo);

export default {
    register
};
import apiClient from "./client";

const register = pushToken => apiClient.post('ReacPushNotification', {token: pushToken});

export default register;
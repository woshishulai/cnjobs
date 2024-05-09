import instance from './'

export const registerApi = (data) => instance.post('/register', data)

export const loginApi = (data) => instance.post('/homelogin', data)

export const getUserInfoApi = (data) => instance.post('/userinfo', data)

export const removeUserInfo = (data) => instance.post('/userlogout', data)

export const isUserLogin = (data) => instance.post('/userislogin', data)

export const getNewsListApi = (data) => instance.post('/newslist', data)

export const getHomeListApi = (data) => instance.post('/homelist', data)

export const getAboutDetails = (data) => instance.post('/aboutdetail', data)

export const resetPassword = (data) => instance.post('/uppassword', data)

export const getSchoolList = (data) => instance.post('/schoollist', data)

export const getSchoolDetails = (data) => instance.post('/schooldetail', data)

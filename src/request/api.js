import instance from './'

export const registerApi = (data) => instance.post('/register', data)

export const loginApi = (data) => instance.post('/homelogin', data)

export const getUserInfoApi = (data) => instance.post('/userinfo', data)

export const removeUserInfo = (data) => instance.post('/userlogout', data)

export const isUserLogin = (data) => instance.post('/userislogin', data)

//news
export const getNewsListApi = (data) => instance.post('/newslist', data)

export const getHomeListApi = (data) => instance.post('/homelist', data)

//关于我们
export const getAboutDetails = (data) => instance.post('/aboutdetail', data)

export const resetPassword = (data) => instance.post('/uppassword', data)

export const getSchoolList = (data) => instance.post('/schoollist', data)

export const getSchoolDetails = (data) => instance.post('/schooldetail', data)

//jobs
export const getjobsListApi = (data) => instance.post('/jobslist', data)

//down
export const downloadlistApi = (data) => instance.post('/downloadlist', data)

//user
export const userInfoCenterApi = (data) => instance.post('/resumeget', data)

//userchange
export const userInfoCenterChangeApi = (data) => instance.post('/resumeregisterlogin', data)

//userchange
export const userUpdateApi = (data) => instance.post('/userupdate', data)

//userpassword
export const uppasswordApi = (data) => instance.post('/uppassword', data)

//userpassword
export const myjobslistApi = (data) => instance.post('/myjobslist', data)

//userpassword
export const jobdetailApi = (data) => instance.post('/jobdetail', data)

//userpassword
export const resumeregisterjobApi = (data) => instance.post('/resumeregisterjob', data)

//userpassword
export const newsdetailApi = (data) => instance.post('/newsdetail', data)

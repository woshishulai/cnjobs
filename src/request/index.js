import axios from 'axios'
import { ElNotification } from 'element-plus'
const instance = axios.create({
    // axios 的一些配置，baseURL  timeout
    //开发
    // baseURL: '/api',
    //生产
    baseURL: 'http://cnjob.sc798.com',
    timeout: 100000000000000
})
instance.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    (res) => {
        if (res.data.code == 1) {
            // ElNotification({
            //     title: res.data.msg,
            //     message: res.data.msg,
            //     type: 'error'
            // })
        }
        return res.data
    },
    (resError) => {
        if (resError && resError.response) {
            switch (resError.response.status) {
                case 400:
                    resError.message = '请求错误(400)'
                    break
                case 401:
                    resError.message = '未授权，请重新登录(401)'
                    break
                case 403:
                    resError.message = '拒绝访问(403)'
                    break
                case 404:
                    resError.message = '请求出错(404)'
                    break
                case 408:
                    resError.message = '请求超时(408)'
                    break
                case 500:
                    resError.message = '服务器错误(500)'
                    break
                case 501:
                    resError.message = '服务未实现(501)'
                    break
                case 503:
                    resError.message = '服务不可用(503)'
                    break
                case 505:
                    resError.message = 'HTTP版本不受支持(505)'
                    break
                default:
                    resError.message = `连接出错(${resError.response.status})!`
            }
        }
        return Promise.reject(resError)
    }
)

export default instance

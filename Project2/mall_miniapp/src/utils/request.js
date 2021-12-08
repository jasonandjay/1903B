const Fly = require("flyio/dist/npm/wx");

const fly = new Fly();

//定义公共headers
fly.config.headers = {}
//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = "https://mall.jasonandjay.com"
//设置公共的Get参数
fly.config.params = {};

//添加请求拦截器
fly.interceptors.request.use((request) => {
    let Authorization = wx.getStorageSync('access_token');
     //给所有请求添加自定义header
    if (Authorization){
        request.headers["Authorization"] = Authorization;
    }
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)

export default fly;
import Cookie from 'js-cookie';

const key = 'authorization';
// 设置登陆态
export function setToken(value: string, expires: number) {
    let date = new Date();
    date.setTime(date.getTime() + expires*1000);
    Cookie.set(key, value, {expires: date});
}

// 获取登陆态
export function getToken(){
    return Cookie.get(key);
}

// 清除登陆态
export function removeToken(){
    return Cookie.remove(key);
}
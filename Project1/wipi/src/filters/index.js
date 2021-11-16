export function formatDate(str, format){
    if (str){
        let date = new Date(str);
        let year = date.getFullYear(),
            month = String(date.getMonth()+1).padStart(2, '0'),
            day = String(date.getDay()).padStart(2, '0'),
            hour = String(date.getHours()).padStart(2, '0'),
            minute = String(date.getMinutes()).padStart(2, '0'),
            second = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
}
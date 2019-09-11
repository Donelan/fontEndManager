import request from './request'
import config from '@/config'
export function get(url, data) {
    if (!url.includes('http')) {
        url = config + url
    }
    return request({
        url: url,
        method: 'get',
        params: data
    })
};
export function post(url, data) {
    console.log(JSON.stringify(data, {}, 4))
    return request.post(config + url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export function update(url, data) {
    return request.update(config + url, data)
}
export function deleteItem(url, data) {
    return request.delete(config + url, data)
}

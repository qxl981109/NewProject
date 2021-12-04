const axios = require('axios');

const request = axios.create({
  baseURL: '',
  timeout: 3000,
})
// 发请求写在这
// 例如：
export function GetData(id) {
  return request({
      url: "123",
      method: 'get',
      data: id,
  })
}

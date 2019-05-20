import axios from 'axios'


export default function ajax(url,data={},method='GET') {
 return new Promise(((resolve,reject)=>{
    let promise;
    if(method==='GET'){
      promise = axios.get(url,{params:data})
    }else if(method === 'POST') {
      promise = axios.post(url, data)
    }
    promise
      .then(response=>{
        resolve(response.data)
        console.log('请求成功')
      })
      .catch(error=>{
        resolve('请求出错:'+error.message)
      })
 }))
}

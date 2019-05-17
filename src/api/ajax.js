import axios from 'axios'


export default function ajax(url,data={},method='GET') {
 return new Promise(((resolve,reject)=>{
    let promise;
    if(method==='GET'){
      promise = axios.get(url,data)
    }
    promise
      .then(response=>{
        resolve(response.data)
      })
      .catch(error=>{
        resolve('请求出错:'+error.message)
      })
 }))
}

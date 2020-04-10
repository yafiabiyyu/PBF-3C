import {domainPath} from './Config';

const PostAPI = (path,data) => {
    const promies = new Promise((resolve,reject)=>{
        fetch(`${domainPath}/${path}`,{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            resolve(result);
        },(err)=>{
            reject(err);
        })
    })
    return promies;
}

export default PostAPI;
import {domainPath} from './Config';

const DeleteAPI = (path,data) => {
    const promies = new Promise((resolve,reject) => {
        fetch(`${domainPath}/${path}/${data}`,{method:'DELETE'})
        .then((result)=>{
            resolve(result);
        },(err)=>{
            reject(err);
        })
    })
    return promies;
}

export default DeleteAPI;
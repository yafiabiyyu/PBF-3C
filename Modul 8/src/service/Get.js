import {domainPath} from './Config';

const GetAPI = (path) => {
    const promies = new Promise((resolve,reject) => {
        fetch(`${domainPath}/${path}`)
        .then(response => response.json())
        .then((result) => {
            resolve(result);
        },(err) => {
            reject(err);
        })
    })
    return promies;
}

export default GetAPI;
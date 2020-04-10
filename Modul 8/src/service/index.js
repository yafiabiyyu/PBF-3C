import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API Lama
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts',dataYgDikirim);
const deleteNewsBlog = (dataYangDiHapus) => DeleteAPI('posts',dataYangDiHapus);


// // Daftar API BARU
// const getProfile = () => GetAPI('profile?_sort=id&_order=des');
// const profileBaru = (dataYangDikirim) => PostAPI('profile',dataYangDikirim);
// const deleteProfile = (dataYangDiHapus) => DeleteAPI('profile',dataYangDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog,
}

export default API;
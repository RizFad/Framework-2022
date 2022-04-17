import GetAPI from '../services/Get';
import PostAPI from '../services/Post';
import DeleteAPI from '../services/Delete';

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim)=>PostAPI('posts',dataYgDikirim);
const deleteNewsBlog = (dataYgDihapus)=>DeleteAPI('posts',dataYgDihapus);

const API = {getNewsBlog,postNewsBlog,deleteNewsBlog}

export default API
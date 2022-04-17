import GetAPI from '../services/Get';
import PostAPI from '../services/Post';
import DeleteAPI from '../services/Delete';

const getMahasiswa= () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postMahasiswa = (dataYgDikirim)=>PostAPI('mahasiswa',dataYgDikirim);
const deleteMahasiswa = (dataYgDihapus)=>DeleteAPI('mahasiswa',dataYgDihapus);

const API = {getMahasiswa,postMahasiswa,deleteMahasiswa}

export default API
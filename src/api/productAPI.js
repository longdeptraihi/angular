import { axiosClient } from './axiosClient';
import { isAuthenticated} from '../auth';
const { user , token } = isAuthenticated();

const ProductAPI = {
    getAll(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/products/${id}`
        return axiosClient.get(url);
    },
    add(product){
        const url = `/product/add/${user._id}`
        return axiosClient.post(url, product,{
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        });
    },
    remove(id){
        const url = `/products/${id}/${user._id}`
        return axiosClient.delete(url,{
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        
        ;
    },
    update(id,data){
        const url = `/product/${id}/${user._id}`
        return axiosClient.put(url,data,{
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        });
    }

}
export default ProductAPI;
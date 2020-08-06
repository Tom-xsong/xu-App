import axios from "axios"
import qs from "qs"

axios.interceptors.response.use(res=>{
    console.log(res);
    return res;
})


import apiSauce from "apisauce";
import ApiConfig from "../Configs/ApiConfig"

const create = (baseURL = ApiConfig.baseURL)=>{
    const api = apiSauce.create({
        baseURL,
        headers: ApiConfig.headers,
        timeout: ApiConfig.timeOut,
    });

    function signInApi(userData: any){
        const {email,password} = userData;
        return api.post("/user/login" ,{
            email,
            password,
        });
    }
    return {
        signInApi,
    };
};

export default {
    create,
  };
  
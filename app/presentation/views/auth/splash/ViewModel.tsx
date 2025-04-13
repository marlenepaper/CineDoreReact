import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";

const SplashViewModel = () =>{
    const {user} = useUserLocalStorage()

    return{
        user
    }
}

export default SplashViewModel
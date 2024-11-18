'use client'
import { useAuthContext } from "../components/context/AuthContext"
import LoginPage from "./login/LoginPage";


const adminLayout =({children,login})=>{

    const { user } = useAuthContext();
    // console.log(JSON.stringify(user, null, 2) + 'USER en el LAYOUT ++++++++++++++++++++++++++++')

    if(!user){
        return <div>loading.....</div>
    }
    return <>{user?.logged ? children : <LoginPage/>}</>;
    
}
export default adminLayout



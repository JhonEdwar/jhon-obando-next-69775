'use client'
import { useAuthContext } from "../components/context/AuthContext";

const adminLayout =({children,login})=>{
    const {user}= useAuthContext()

    return(
        <>
            {
                user.logged? children:login
                
            }
        </>
    )
}
export default adminLayout



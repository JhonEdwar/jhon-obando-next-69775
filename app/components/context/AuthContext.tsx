'use client'
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const useAuthContext=()=>useContext(AuthContext)



export const AuthProvider= ({children})=>{
    const[user, setUser]= useState({
        logged:false,
        email:null,
        uid:null
    })   

    const registerUser= async(values)=>{

        try {
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
          
            const usser = userCredential.user;

            console.log('xxxxxxxxxx USSER' + JSON.stringify(usser, null, 2));
            console.log('xxxxxxxxxx ANTES del setUSer' + JSON.stringify(user, null, 2));

            if( user){
              setUser({
                logged: true,
                email: usser.email,
                uid: usser.uid,
              });
              console.log('xxxxxxxxxx DESPUES del setUSer' + JSON.stringify(user, null, 2));
            } 

          } catch (error) {
            console.error("Error al registrar usuario:", error);
          }
          console.log('User logged status:', user.logged);
          console.log('User email:', user.email);
          console.log('User uid:', user.uid);
    }

    const loginUser=async(values)=>{
      const userCredential=await signInWithEmailAndPassword(auth,values.email,values.password)
      const usser=userCredential.user
      setUser({
        logged:true,
        email:user.email,
        uid:user.uid
      })

    }

    return(
        <AuthContext.Provider value={{user,registerUser,loginUser}}>
            {children}
        </AuthContext.Provider>
    )   
}


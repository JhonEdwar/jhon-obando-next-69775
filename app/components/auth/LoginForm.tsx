'use client'
import React from 'react'
import { useState } from 'react'
import Button from '../ui/Button'
import { useAuthContext } from '../context/AuthContext'


const LoginForm = () => {
    const {registerUser,loginUser}=useAuthContext()

    const[values,setValues]=useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
          });

    }
    // const [error, setError] = useState<string | null>(null);

    const handleSubmit= async(e)=>{
        e.preventDefault();
        // try {
        //     const userCredential = await registerUser(values);
      
        //     if (userCredential) {
        //       console.log('User created successfully:', userCredential + 'aaappppppppppppppppaaaffffff');
        //     }
        //   } catch (error) {
        //     console.error('Error during registration:', error + 'jaaaaaaaajdslkfjsdlkfjsdlkjfsdlkjflksdjflksdjflsdkjflsdkjflskdjfklsdjlfksjkf');
        //   }
    }


  return (
    <div className='fixel w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25'>
         <form onSubmit={handleSubmit} className='my-12bg.white py-4 px-6 rounded-xl  max-w-md w-full'>
            <label>Login: </label>
            <input type="email" 
                value={values.email}
                required
                placeholder='tu email'
                className='p-2 rounded w-full border border-blue-100 block my-4 text-black'
                name="email"
                onChange={handleChange}
            />
            <label>Password: </label>
            <input type="password" 
                value={values.password}
                required
                placeholder='tu pasword'
                className='p-2 rounded w-full border border-blue-100 block my-4 text-black	'
                name="password"
                onChange={handleChange}
            />
            <Button onClick={()=>registerUser(values)} className="mr-4">  Registrar usuario </Button>
            <Button onClick={()=>loginUser(values)} className="mr-4">  Iniciar sesión </Button>   

         </form>

    </div>
  )
}

export default LoginForm
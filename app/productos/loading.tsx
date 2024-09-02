import Image from "next/image"

const loading=()=>{
    return(
        <div className='w-full h-full min-h-screen flex justify-center items-center'>
            <Image  
            src={'/verce.svg'}
            alt='vercel logo'
            width={150}
            height={150}
            className='animate-pulse'

            />
        </div>
    )
}

export default loading
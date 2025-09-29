// Using useEfect it takes secs of times to get data once we click on it. while using loader () it will opitimize data as we hover on it. 
import React from 'react'
import { useLoaderData } from 'react-router-dom';

function  Loader()  {
    const data = useLoaderData();

  return (
    <div className='flex align-start justify-center py-10 text-center bg-gray-400 m-4 text-white text-2xl gap-4'>Github Followings: {data.following}
    <img src={data.avatar_url} alt='Git Image' width={180}/>
    </div>
  )
}

export default Loader;

export const githubLoader = async () =>{
    const response = await fetch('https://api.github.com/users/hirensiyodia');
    return response.json();
}
import React, { useState } from 'react'
import { useEffect } from 'react'

const Github = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/hirensiyodia')
        .then(response => response.json())
        .then(data => {
        console.log(data)
        setData(data)
        })
    },[])

  return (
    <div className='flex align-start justify-center py-10 text-center bg-gray-500 m-4 text-white text-2xl gap-4'>Github Followings: {data.following}
    <img src={data.avatar_url} alt='Git Image' width={180}/>
    </div>
  )
}

export default Github
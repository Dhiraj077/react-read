import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    //  useEffect(() => {
    //     fetch('https://api.github.com/users/Dhiraj077')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    //  },[])

  return (
    <div className='text-center m-4 bg-slate-600 text-white p-4 text-3xl  grid place-items-center gap-8'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {

    const response = await fetch('https://api.github.com/users/Dhiraj077')
    return response.json()
}
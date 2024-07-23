/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useRouter } from 'next/navigation'
import { useUsers } from "@/app/context/UsersContext"
import { useState } from "react"
import { MdDriveFolderUpload } from "react-icons/md";

export default function New(){
    const [img,setImg] = useState("")

    const {users,dispatch} = useUsers()
    const router = useRouter()
    const [user,setUser] = useState({
        img:"",
        name:"",
        email:"",
        password:"",
        phone:"",
        address:"",
        country:""
    })

    return(
        <>

        <div className="shadow-lg mb-4">
            <h1 className="text-gray-400 text-2xl font-semibold p-2">Add New User</h1>
        </div>
        <div className="p-4 shadow-lg mt-2">
        <div className="grid grid-cols-3 p-4">
            <div >
                <img className='rounded-full w-[150px] h-[150px]' src={img ? URL.createObjectURL(img) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCTMhnLo43ZCkuSoHwfvO8sj3nLMJLU9_EA&s"} width={150} height={150}/>
            </div>
            <div>
                <label htmlFor='file' className='block pb-11'>
                    <MdDriveFolderUpload className='text-3xl cursor-pointer'/>
                </label>
                <input type='file' id='file' onChange={(e)=>{
                    setImg(e.target.files[0])
                    setUser({...user,img: URL.createObjectURL(e.target.files[0])})
                }} style={{display:"none"}}/>

                <label className="block">Name and surname</label>
                <input className="border-b border-gray-600 mb-7" value={user.name} onChange={(e)=>{
                    setUser({...user,name:e.target.value})
                }}/>
                <label className="block">Phone</label>
                <input className="border-b border-gray-600 mb-7" value={user.phone} onChange={(e)=>{
                    setUser({...user,phone:e.target.value})
                }}/>
                <label className="block">Address</label>
                <input className="border-b border-gray-600 mb-7" value={user.address} onChange={(e)=>{
                    setUser({...user,address:e.target.value})
                }}/>
            </div>
            <div>
                <label className="block">Username</label>
                <input className="border-b border-gray-600 mb-7"/>
                <label className="block">Email</label>
                <input className="border-b border-gray-600 mb-7" value={user.email} onChange={(e)=>{
                    setUser({...user,email:e.target.value})
                }}/>
                <label className="block">Password</label>
                <input className="border-b border-gray-600 mb-7" value={user.password} onChange={(e)=>{
                    setUser({...user,password:e.target.value})
                }}/>
                <label className="block">Country</label>
                <input className="border-b border-gray-600 mb-7" value={user.country} onChange={(e)=>{
                    setUser({...user,country:e.target.value})
                }}/>
            </div>
        </div>
        <div className="flex justify-center">
                <button onClick={()=>{
                    dispatch({type: "add", payload:{
                        newUser: user
                    }})
                    router.push('/')
                }} className="py-1 px-2 border border-deep-purple-300 text-deep-purple-300 rounded-lg">
                    send
                </button>
            </div>
    </div></>

        
    )
}
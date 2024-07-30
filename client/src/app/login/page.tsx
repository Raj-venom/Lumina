"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"



function Login() {

  const { register, handleSubmit } = useForm()

  const [data, setData] = useState({})

  console.log(data);
  return (
    
    <div className="flex flex-col justify-center items-center h-screen ">
      <div>
        <form onClick={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <label >Email</label>
          <Input type="email" {...register("email", { required: true })} />

          <label>password</label>
          <Input type="password" {...register("password", { required: true })} />

        <Button type="submit" className="px-20">Login</Button>
        </form>
      </div>


      <div className=" mt-2">
        <span>Create new Account <Link className=" hover:border-b-2 hover:border-black" href={"/signup"}>Signup</Link> </span>
      </div>

    </div>
  )
}

export default Login
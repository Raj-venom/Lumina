"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit } = useForm();
  const [response, setResponse] = useState<any>(null); // Set response type based on your expected response

  const handleSignup = async (data: any) => {
    try {
      console.log(data);

      const response = await axios.post("http://localhost:4000/users", data);
      console.log(response.data); // Assuming response contains useful data
      setResponse(response.data); // Handle response data as needed
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error state if necessary
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <form onSubmit={handleSubmit(handleSignup)}>
          <label>Name</label>
          <Input type="text" {...register("fullName", { required: true })} />

          <label>Email</label>
          <Input type="email" {...register("email", { required: true })} />

          <label>Password</label>
          <Input type="password" {...register("password", { required: true })} />

          <Button type="submit" className="px-20">
            Signup
          </Button>
        </form>
      </div>

      <div className="mt-2">
        <span>
          Already Have an account?{" "}
          <Link className="hover:border-b-2 hover:border-black" href={"/login"}>
            Login
          </Link>{" "}
        </span>
      </div>

      {response && (
        <div className="mt-4">
          Signed up successfully! {/* Display success message or redirect */}
        </div>
      )}
    </div>
  );
}

export default Signup;

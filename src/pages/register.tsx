import React, { useState } from 'react';
import type { NextPage } from 'next'
import classnames from 'classnames';
import Layout from '@/src/components/layout';
import { LoginResponse } from "../entities/index";
import { request } from "../providers/request";
import { useRouter } from "next/router";

const RegisterPage: NextPage = () => {
  const [displayName, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async () => {
    const registerResponse = await request<any>("/auth/sign-up ", {
      method: 'POST',
      body: {
        username,
        email,
        displayName,
        credential: {
          password
        }
      }
    })

    if (registerResponse) {
      router.push("/login");
      return;
    }
  }

  return (
    <Layout notFooter>
      <div className='login-bg'>
        <div className={classnames('px-[20px] py-[50px] max-w-[800px] mx-auto bg-white min-h-[100px]')}>
          <div className='max-w-[350px] mx-auto'>
            <p className='text-center text-[20px]'>LOGIN</p>
            <img src='/assets/login-avatar.png' className='mx-auto mt-[20px] h-[100px]' />
            <input className='px-[20px] py-[10px] w-full  text-center border-solid border-black border-[1px] text-primary mt-[20px]' type='text' placeholder='Enter your displayName' onChange={e => setName(e.target.value)} value={displayName} />
            <input className='px-[20px] py-[10px] w-full  text-center border-solid border-black border-[1px] text-primary mt-[20px]' type='text' placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email} />
            <input className='px-[20px] py-[10px] w-full  text-center border-solid border-black border-[1px] text-primary mt-[20px]' type='text' placeholder='Enter your username' onChange={e => setUsername(e.target.value)} value={username} />
            <input className='px-[20px] py-[10px] w-full  text-center border-solid border-black border-[1px] text-primary mt-[10px]' type='password' placeholder='Enter your password...' onChange={e => setPassword(e.target.value)} value={password} />
            <button className='mx-auto py-[10px] w-[200px] text-white font-bold text-center bg-primary mt-[20px] block' onClick={() => handleLogin()}>
              Register
            </button>
            <p className='text-center text-primary' onClick={() => router.push('/login')}>Back to login</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RegisterPage;

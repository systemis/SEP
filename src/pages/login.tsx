import React from 'react';
import type { NextPage } from 'next'
import classnames from 'classnames';
import Layout from '@/src/components/layout';
import styles from '../../styles/Home.module.css'

const Login: NextPage = () => {
  return (
    <Layout notFooter>
      <div className='login-bg'>
        <div className={classnames('px-[20px] py-[50px] max-w-[800px] mx-auto bg-white min-h-[100px]')}>
          <div className='max-w-[350px] mx-auto'>
            <p className='text-center text-[20px]'>LOGIN</p>
            <img src='/assets/login-avatar.png' className='mx-auto mt-[20px] h-[100px]' />
            <input className='px-[20px] py-[10px] w-full  text-center border-solid border-black border-[1px] text-primary mt-[20px]' type='text' placeholder='Enter your username' />
            <input className='px-[20px] py-[10px] w-full  text-center border-solid border-black border-[1px] text-primary mt-[10px]' type='password' placeholder='Enter your password...' />
            <button className='mx-auto py-[10px] w-[200px] text-white font-bold text-center bg-primary mt-[20px] block'>
              LOGIN
            </button>
            <p className='text-center text-primary'>Register</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login;

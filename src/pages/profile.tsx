import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import classnames from 'classnames';
import styles from '../../styles/Home.module.css'
import Layout from '@/src/components/layout';
import RelatedPpost from '@/src/components/related-post';
import { request } from "../providers/request";
import { User } from "../entities/";

const Profile: NextPage = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const userResponse = await request<any>("/user/profile");
      setUser(userResponse.user);
    })();
  }, []);

  return (
    <Layout>
      <div className={classnames(styles.container, 'pt-[100px] px-[20px] max-w-[700px] mx-auto')}>
        <div className='flex'>
          <div className='md:float-left md:w-[30%] w-full'>
            <img src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png" className='w-full' />
          </div>
          <div className='md:float-left md:w-[70%] md:pl-[20px] w-full'>
            <p className='text-[35px] font-bold'>{user?.displayName}</p>
            <p className='mt-[10px] text-[16px] font-[100]'>{user?.email}</p>
            <p className='text-[16px]'>Bạn và tôi không giống nhau, con đường tôi đã đi thì tôi mới hiểu được.Nghĩ về tương lai cuộc sống sau lày con đường mà mình đã chọn dù phía trước nhiều chông gaigai</p>
            <p className='text-[16px]'>Dậy đi ông cháu ơi, quả đầu Tommy Xiaomi bóng ma Anh Quốc của ông cháu xong rồi đấy</p>
            <p className='text-[16px]'>https://www.facebook.com/vmn3110</p>
          </div>
        </div>
        <p className='text-center my-[100px] text-[35px] font-bold'>Batman người không chơi là người thắng người chơi không bao giờ thắng</p>
        <div className=''>
          <RelatedPpost />
        </div>
      </div>
    </Layout>
  )
}

export default Profile;

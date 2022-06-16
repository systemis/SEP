import React, { useMemo } from 'react';
import type { NextPage } from 'next'
import classnames from 'classnames';
import styles from '../../styles/Home.module.css'
import Layout from '@/src/components/layout';
import RelatedPpost from '@/src/components/related-post';

const Home: NextPage = () => {
  return (
    <Layout>
      <img src="/assets/blog-bg-1.png" className='w-full max-h-[400px] object-cover' />
      <div className={classnames(styles.container, 'pt-[50px] px-[20px] max-w-[700px] mx-auto')}>
        <div className='header-container flow-root'>
          <div className='float-left'>
            <div className='flex items-center'>
              <div className='float-left'>
                <img src="/assets/nhut-avatar.png" className='w-[100px] h-[100px]' />
              </div>
              <div className='float-right pl-[20px]'>
                <p className='font-bold'>Vo Minh Nhutt</p>
                <p>May 23,2022 - 4 mins read</p>
              </div>
            </div>
          </div>
          <div className='float-right'>
            <i className='bx bxl-facebook-circle text-[25px] cursor-pointer' onClick={() => window.open('https://www.facebook.com/')}></i>
            <i className='bx bxl-twitter text-[25px] ml-[10px] cursor-pointer' onClick={() => window.open('https://twitter.com/home')}></i>
          </div>
        </div>
        <article className='mt-[30px]'>
          <p className='font-bold text-center'>Những điều có thể bạn chưa biết về Barbatos trong Genshin Impact</p>
          <p className='mt-[20px]'>
            Các vị thần trong Ghenshin Impact đều có sức mạnh kiểm soát năng lượng nguyên tố và sống lâu hơn người bình thường. Giống như những vị thần khác, hình dạng thật sự của Barbatos là linh hồn của gió nên không có bóng hình cụ thể. Trong cuộc nổi loạn cách đây 2.600 năm, vị thần này có hình dáng của một yêu tinh nhỏ bé với bộ lông trắng pha xanh, đeo kim cương trên ngực và khuôn mặt đen.
            Hiện tại, Barbatos mang hình dạng của Venti để lang thang khắp thế giới. Tuy nhiên, hiếm ai biết rằng Venti là một vị thần, ngoại trừ Jean, Dainsleif, Diluc.
            Barbatos Genshin Impact đã hơn 2.600 tuổi. Vị thần này vô danh ở Mondstadt cũ. Và thực tế, đây là vị thần nhiều tuổi thứ hai, trẻ hơn Morax – người đã hơn 6.000 năm tuổi
            Sức mạnh của các vị thần bị ảnh hưởng trực tiếp bởi quyền lực và sự tôn thờ của cư dân ở quốc gia tương ứng. Barbatos mang tự do tới cho mọi người nên là vị thần yếu nhất trong số 7 Archon.
          </p>
          <img src='/assets/blog-bg-2.png' className='max-w-[400px] mx-auto mt-[20px]' />
          <p className='mt-[20px]'>Trước khi Barbatos thống trị Mondstadt, thành phố này giống như một lãnh nguyên. Decarabian từng là người cai trị Mondstadt. Ông là một bạo chúa thường bỏ tù mọi người, vì cho rằng như thế là bảo vệ họ. Điều này đã gây ra một cuộc cách mạng lật đổ Decarabian.</p>
          <p className='mt-[10px]'>Barbatos đã thay đổi thành phố Mondstadt thành một thành phố tự do. Những ảnh hưởng của ông đã làm thay đổi khí hậu của thành phố, khắp nơi ngập tràng hoa và các đặc sản địa phương khác </p>
        </article>
        <div className='flow-root'>
          <div className='float-right'>
            <input type="text" className='py-[8px] px-[10px] border-solid border-[1px] border-black h-full h-[40px]' placeholder='comment' />
            <button type="submit" className='py-[8px] px-[25px] bg-black text-white h-[40px]'>Send</button>
          </div>
        </div>
        <div className='mt-[50px]'>
          <RelatedPpost />
        </div>
      </div>
    </Layout>
  )
}

export default Home

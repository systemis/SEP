import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

export interface MenuItem {
  href: string;
  title: string;
};

const Layout: React.FC<{ notFooter?: boolean | false }> = ({ children, notFooter }) => {
  const router = useRouter();

  const menuData = useMemo<MenuItem[]>(() => [
    { href: '/', title: 'BLOG' },
    { href: '/profile', title: 'PROFILE' },
    { href: '/login', title: 'LOGIN' }
  ], []);

  return (
    <div className='app-layout'>
      <div className='header'>
        <div className='flex justify-center max-w-[400px] mx-auto pb-[10px]'>
          <ul>
            {menuData.map((item, index: number) => (
              <li key={`nav-item-${index}`}
                className={classnames(
                  'float-left px-[40px] py-[10px] border-b-solid border-b-black',
                  { 'border-b-[1px]': item.href === router.asPath }
                )}>
                <a href={item.href}> {item.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='app-content'>
        {children}
      </div>
      {!notFooter && (
        <footer className='footer py-[30px] min-h-[100px] bg-black rounded-tl-[10px] rounded-tr-[10px]'>
          <p className='text-center text-white font-bold text-[30px]'> Liên hệ với tôi để được học cách chơi batman </p>
          <p className='text-center text-white max-w-[400px] mx-auto'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.  </p>
        </footer>
      )}
    </div>
  );
}

export default Layout; 
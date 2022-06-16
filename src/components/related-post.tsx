import React, { useMemo } from 'react';

export interface NextPostItem {
  image: string;
  title: string;
  decs: string;
};

const RelatedPost: React.FC = () => {
  const nextPosts = useMemo<NextPostItem[]>(() => [
    {
      image: '/assets/next1.png',
      title: 'CSS-Tricks',
      decs: 'Find the Tips, Tricks, and Techniques on using Cascading Style Sheets. CSS-Tricks is a front-end coding blog mostly on CSS. CSS-Tricks is created, by Chris Coyier and a team of swell people.',
    },
    {
      image: '/assets/next2.png',
      title: 'SitePoint Blog',
      decs: `The web's best resource for web developers and designers to keep up-to-date and learn JavaScript, CSS, UX, WordPress, PHP, and more. SitePoint is one of the largest online communities of web professionals.`,
    },
    {
      image: '/assets/next3.png',
      title: 'Ray wenderlich',
      decs: 'Keep your Swift & iOS skills up-to-date via hands-on tutorials. Ray Wenderlich is a favorite of everyone on the V-Play team. This is one of the best places on the internet for mobile game tutorials so give it a look as soon as you can. Ray has put together a very experienced team with expertise in a number of different areas, making this blog one of the biggest game development authorites online.',
    },
    {
      image: '/assets/next4.png',
      title: 'The crazy Programer',
      decs: 'The Crazy Programmer will guide you through the simplest basics of C, C , Android, PHP, SQL and many more coding languages.',
    },
  ], []);

  return (
    <div className='my-[20px]'>
      <p className='text-center text-[30px] font-bold'>What to read next</p>
      <div className='grid grid-cols-2 mt-[30px]'>
        {nextPosts.map((item, index: number) => (
          <div className='flex' key={`next-post-item-${index}`}>
            <div className='float-left w-[30%]'>
              <img src={item.image} className='w-full' />
            </div>
            <div className='float-left w-[70%] ml-[10px]'>
              <p className='font-bold text-[20px]'>{item.title}</p>
              <p className='font-normal text-[18px]'>{item.decs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPost;
import Image from 'next/image'
import Nav from './components/Nav'
import enterIcon from '@/public/imgs/SendIcon.png'
import polygon1 from '@/public/imgs/polygon1.png'
import polygon2 from '@/public/imgs/polygon2.png'
import polygon4 from '@/public/imgs/polygon4.png'
import dragIndicator from '@/public/imgs/Dragindicator.png'
import heroRight from '@/public/imgs/heroright.png'
import Link from 'next/link'
import MainNav from './components/MainNav'

export default function Home() {
  return (
    <main className="h-screen ">
          <div className='absolute top-0 left-0 right-0 bg-none z-50'>
            <MainNav />
          </div>

      <div className='w-full h-full grid md:grid-cols-2 relative overflow-hidden '>
        
        <div className='bg-secondaryColor'>
          {/* <Nav /> */}

          <div className='flex flex-col items-center text-center gap-8 pt-32 md:pt-56'>
            <h1 className='text-primaryColor text-2xl font-semibold'>Building Trust and Efficiency in <br /> Locally Produced African Products</h1>
            <div className='w-[287px] h-[50px] rounded-xl bg-white flex items-center pl-3 relative'>
              <input type="text" placeholder='Email me when it launches' className='w-[80%] placeholder:text-primaryColor placeholder:text-opacity-40 h-[90%] outline-none px-4 bg-[#EBEBEB] ' />
              <Image src={enterIcon} className='absolute right-4 cursor-pointer' />
            </div>
            <Image src={polygon1} className='absolute -left-10 -bottom-40 md:top-[24rem] z-10 h-[300px]' />
            <Image src={polygon2} className='absolute -left-6 -bottom-48  md:top-[25.5rem] z-20 h-[300px]' />
            
          </div>
          <div className='flex items-start absolute bottom-4 z-10 md:bottom-14 right-4 md:right-[55%]'>
              <Image src={dragIndicator} />
              <p className='text-primaryColor text-left'>Securing funds and ensuring <br /> our merchants deliver as <br /> promised</p>
          </div>
            
        </div>
        <div className='relative bg-secondaryColor md:bg-white'>
          {/* <Link href='/' className='text-[15px] py-8 text-right pr-12 block text-primaryColor font-semibold'>Contact</Link> */}
          <Image src={heroRight} className='-mt-40 sm:-mt-32 md:mt-20 md:pt-10 mx-auto' />
          <Image src={polygon4} className='hidden md:absolute right-10 bottom-0' />

        </div>
      </div>
    </main>
  )
}

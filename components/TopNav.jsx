import BrandLogo from '@/app/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function TopNav() {
  return (
    <div className="sticky top-0 z-10">
      <div className=" flex items-center px-3 md:mx-16 md:px-8  my-6 bg-[#151b23] border-b border-gray-200/10  justify-between ">
        <Link href={'/'} className="p-0 m-0 ">
          <Image src={BrandLogo} className='m-0 w-20 md:w-24' />
        </Link>
        <div className="flex gap-5 ">
          <span>Home</span>
          <span>Blogs</span>
          <span>Tags</span>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export default function Header() {
  return (
    <section className='flex justify-center gap-[20px]'>
      <Link href={'/'}>
        <span className=' text-[30px]'>Home</span>
      </Link>
      <Link href={'/about'}>
        <span className='text-[30px]'>About</span>
      </Link>
      <Link href={'/ssr'}>
        <span className='text-[30px]'>ssr</span>
      </Link>
      <Link href={'/csr'}>
        <span className='text-[30px]'>csr</span>
      </Link>
    </section>
  )
}

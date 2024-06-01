import Link from 'next/link'
import Logo from '@/app/components/dojo-logo.png'
import Image from 'next/image'


export default function News() {
    return (
        <nav>
            <Image 
            src={Logo}
            alt="Dojo logo"
            width={70}
            quality={100}
            placeholder="blur"
            />
        <h1>DOJO Help desk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">tickets</Link>
      </nav>
    )
}
import Link from 'next/link'


export default function News() {
    return (
        <nav>
        <h1>DOJO Help desk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">tickets</Link>
      </nav>
    )
}
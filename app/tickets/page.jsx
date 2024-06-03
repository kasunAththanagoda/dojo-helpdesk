import TicketList from '@/app/tickets/ticketList'
import { Suspense } from 'react'
import Loading from '../loading'
import Link from 'next/link'

export default function Tickets(){

    return(
        <main>
            <nav className='flex justify-between'>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets.</small></p>
                </div>
                <div>
                    <Link href='/tickets/create'>
                    <button className='btn-primary'>Create new ticket</button>
                    </Link>
                </div>
            </nav>
            <Suspense>
            <TicketList fallback={<Loading />} />
            </Suspense>
        </main>
    )
}
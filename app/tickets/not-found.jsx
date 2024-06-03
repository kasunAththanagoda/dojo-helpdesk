import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">We hit a brick wall</h2>
        <p>we could mot find the ticket you were looking for.</p>
        <p>Go back to the <Link href="/tickets"> tickets</Link></p>
    </main>
  )
}

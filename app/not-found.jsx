import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There waas a problem</h2>
        <p>we could mot find the page you were looking for.</p>
        <p>Go back to the <Link href="/"> dashboard</Link></p>
    </main>
  )
}

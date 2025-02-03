import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to Modern Dashboard
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          A powerful, flexible, and secure dashboard solution built with Next.js and Supabase
        </p>
        <Link 
          href="/dashboard" 
          className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-opacity group"
        >
          Access Dashboard
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
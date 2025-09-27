"use client"

import { ReactNode, useEffect, useState } from 'react'
import Loader from './components/common/Loader'

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500) // 1.5s loader
    return () => clearTimeout(timer)
  }, [])

  return <>{loading ? <Loader /> : children}</>
}

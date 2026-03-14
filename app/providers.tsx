'use client'

import { ThemeProvider } from 'next-themes'
import { ToastContext } from '../src/context'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    const [toastOpen, setToastOpen] = useState(false)

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastContext.Provider value={setToastOpen}>
                {children}
            </ToastContext.Provider>
        </ThemeProvider>
    )
}
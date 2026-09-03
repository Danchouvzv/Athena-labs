'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { LogoMark } from '@/components/logo-mark'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#what-we-collect', label: 'What we collect' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#who-its-for', label: "Who it's for" },
  { href: '#products', label: 'Products' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* Scrim so page content dissolves under the floating bar */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none fixed inset-x-0 top-0 z-40 h-32 transition-opacity duration-500',
          scrolled ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.97) 50%, rgba(0,0,0,0.7) 72%, rgba(0,0,0,0) 100%)',
        }}
      />
      <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5">
      <div
        className={cn(
          'mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border p-2 pl-4 transition-all duration-500',
          scrolled
            ? 'border-white/15 bg-black/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.9)] backdrop-blur-2xl'
            : 'border-white/10 bg-white/[0.04] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl'
        )}
      >
        <a href="#" className="group flex items-center gap-2.5 text-neutral-50">
          <LogoMark />
          <span className="text-[13px] font-semibold tracking-[0.18em]">
            ATHENA LABS
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] text-neutral-400 transition-colors duration-200 hover:bg-white/10 hover:text-neutral-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="group hidden items-center gap-1.5 rounded-full bg-neutral-50 px-4 py-2 text-[13px] font-medium text-neutral-900 transition-all duration-200 hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] md:flex"
          >
            Get the data card
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-white/10 hover:text-neutral-50 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl transition-all duration-300 ease-out md:hidden',
          menuOpen
            ? 'max-h-80 opacity-100'
            : 'pointer-events-none max-h-0 border-transparent opacity-0'
        )}
      >
        <nav className="flex flex-col gap-1 p-3 text-sm text-neutral-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-neutral-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="mt-1 flex items-center justify-center gap-1.5 rounded-2xl bg-neutral-50 px-4 py-2.5 font-medium text-neutral-900"
          >
            Get the data card
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>
        </div>
      </header>
    </>
  )
}

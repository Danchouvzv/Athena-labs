import { Mail, Phone, Send } from 'lucide-react'
import { LogoMark } from '@/components/logo-mark'

const CONTACTS = [
  {
    icon: Mail,
    label: 'talgatovdaniyal@gmail.com',
    href: 'mailto:talgatovdaniyal@gmail.com',
  },
  {
    icon: Phone,
    label: '+7 707 803 8776',
    href: 'tel:+77078038776',
  },
  {
    icon: Send,
    label: '@doniponi',
    href: 'https://t.me/doniponi',
    external: true,
  },
]

const NAV = [
  { href: '#what-we-collect', label: 'What we collect' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#who-its-for', label: "Who it's for" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="group flex items-center gap-2.5 text-neutral-50">
              <LogoMark />
              <span className="text-[13px] font-semibold tracking-[0.18em]">
                ATHENA LABS
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              Human demonstration data for training vision-language-action
              models.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-neutral-600">
              SITE
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors duration-200 hover:text-neutral-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-neutral-600">
              CONTACT
            </p>
            <ul className="mt-4 space-y-2.5">
              {CONTACTS.map(({ icon: Icon, label, href, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-center gap-2.5 text-sm text-neutral-400 transition-colors duration-200 hover:text-neutral-50"
                  >
                    <Icon className="h-3.5 w-3.5 text-neutral-600 transition-colors duration-200 group-hover:text-neutral-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Athena Labs. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-wider text-neutral-700">
            BUILT FOR ROBOT FOUNDATION MODELS
          </p>
        </div>
      </div>
    </footer>
  )
}

import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProblemSection } from '@/components/problem-section'
import { TractionSection } from '@/components/traction-section'
import { CoverageSection } from '@/components/coverage-section'
import { AudienceSection } from '@/components/audience-section'
import { ProductsSection } from '@/components/products-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <main className="bg-black">
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <TractionSection />
      <CoverageSection />
      <AudienceSection />
      <ProductsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}

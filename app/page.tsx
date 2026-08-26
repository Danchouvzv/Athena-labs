import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { DataTypesSection } from '@/components/data-types-section'
import { ScalingSection } from '@/components/scaling-section'
import { CoverageSection } from '@/components/coverage-section'
import { AudienceSection } from '@/components/audience-section'
import { CtaSection } from '@/components/cta-section'

export default function Home() {
  return (
    <main className="bg-black">
      <SiteHeader />
      <HeroSection />
      <DataTypesSection />
      <ScalingSection />
      <CoverageSection />
      <AudienceSection />
      <CtaSection />
    </main>
  )
}

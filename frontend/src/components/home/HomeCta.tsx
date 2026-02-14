import { Button } from '../common/Button'

interface HomeCtaProps {
  ctaTitle: string
  ctaSubtitle: string
  ctaButtonText: string
}

const HomeCta = ({ ctaTitle, ctaSubtitle, ctaButtonText }: HomeCtaProps) => {
  return (
    <section className="py-10 px-4" role="region" aria-label="Call to Action">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-6">
          {ctaTitle}
        </h2>
        <p className="text-xl text-primary-foreground mb-10">{ctaSubtitle}</p>
        <Button onClick={() => {}} text={ctaButtonText} />
      </div>
    </section>
  )
}

export default HomeCta

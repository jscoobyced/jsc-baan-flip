interface FooterProps {
  footerCompany: string
  footerTerms: string
  footerPrivacy: string
  footerCareers: string
  footerCopyright: string
}

export const Footer = ({
  footerCompany,
  footerTerms,
  footerPrivacy,
  footerCareers,
  footerCopyright,
}: FooterProps) => {
  return (
    <footer className="mt-10 py-8 px-4 text-center bg-secondary text-secondary-foreground font-family-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">{footerCompany}</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {footerTerms}
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {footerPrivacy}
            </a>
            <a
              href="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {footerCareers}
            </a>
          </div>
        </div>
        <div className="mt-6 text-sm">
          <p>{footerCopyright}</p>
        </div>
      </div>
    </footer>
  )
}

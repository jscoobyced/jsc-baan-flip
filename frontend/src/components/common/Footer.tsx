import { Link } from 'react-router-dom'

interface FooterProps {
  footerCompany: string
  footerTerms: string
  footerPrivacy: string
  aboutUs: string
  footerCopyright: string
}

export const Footer = ({
  footerCompany,
  footerTerms,
  footerPrivacy,
  aboutUs,
  footerCopyright,
}: FooterProps) => {
  return (
    <footer className="mt-10 py-8 px-4 text-center bg-secondary text-secondary-foreground font-family-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              to="/"
              className="font-semibold hover:text-primary-foreground transition-colors"
            >
              {footerCompany}
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link
              to="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {footerTerms}
            </Link>
            <Link
              to="#"
              className="hover:text-primary-foreground transition-colors"
            >
              {footerPrivacy}
            </Link>
            <Link
              to="/about-us"
              className="hover:text-primary-foreground transition-colors"
            >
              {aboutUs}
            </Link>
          </div>
        </div>
        <div className="mt-6 text-sm">
          <p>{footerCopyright}</p>
        </div>
      </div>
    </footer>
  )
}

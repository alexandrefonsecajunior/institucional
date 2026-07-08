import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { companyInfo } from '../config/company'
import AnimatedSVG from './AnimatedSVG'

const CompanySection = () => {
  const { t } = useTranslation()

  const legalDetails = [
    { label: t('company.legalName'), value: companyInfo.legalEntityName },
    { label: companyInfo.registrationLabel, value: companyInfo.registrationNumber },
    {
      label: t('company.registeredAddress'),
      value: `${companyInfo.registeredAddress}, ${companyInfo.country}`,
    },
    { label: t('company.officialDomain'), value: companyInfo.websiteUrl },
    { label: t('company.officialContact'), value: companyInfo.contactEmail },
    { label: t('company.appleContact'), value: companyInfo.developerEmail },
  ]

  const publicLinks = [
    { label: t('company.links.company'), href: '/company/' },
    { label: t('company.links.privacy'), href: '/privacy/' },
    { label: t('company.links.terms'), href: '/terms/' },
    { label: t('company.links.support'), href: '/support/' },
  ]

  return (
    <section id="company" className="py-24 bg-dark-bg relative overflow-hidden border-y border-border-color/30">
      <div className="absolute top-12 right-8 opacity-5">
        <AnimatedSVG size={180} delay={0.4} />
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div>
            <span className="inline-flex mb-5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-accent border border-accent/40 bg-accent/10">
              {t('company.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t('company.titlePrefix')}{' '}
              <span className="text-gradient">{companyInfo.publicName}</span>
            </h2>
            <p className="mt-6 text-lg text-text-gray leading-relaxed">
              {t('company.description')}
            </p>
            <p className="mt-5 text-text-gray leading-relaxed">
              {t('company.appleContext')}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {publicLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-text-light border border-border-color hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {legalDetails.map((detail) => (
              <div
                key={detail.label}
                className="p-5 bg-accent-dark border border-border-color hover:border-accent/50 transition-all duration-300"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-text-gray">{detail.label}</p>
                <p className="mt-3 text-text-light font-semibold break-words">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanySection

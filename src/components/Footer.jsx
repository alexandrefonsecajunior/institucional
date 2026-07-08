import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { companyInfo } from '../config/company'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="py-6 bg-darker-bg text-center border-t border-border-color/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-text-gray">&copy; {new Date().getFullYear()} {companyInfo.legalEntityName}. {t('footer.rights')}</p>
        <p className="text-text-gray text-xs mt-2">
          {t('footer.companyDisclosure')}
        </p>
        <p className="text-text-gray text-xs mt-2">
          {t('footer.stack')}
        </p>
      </div>
    </footer>
  )
}

export default Footer 

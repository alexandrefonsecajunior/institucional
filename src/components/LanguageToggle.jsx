import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { toggleLanguage, isPortuguese } = useLanguage()
  
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 bg-accent-dark border border-border-color text-text-light hover:border-accent/50 hover:text-accent transition-all duration-300 group"
      title={isPortuguese ? 'Mudar para Inglês' : 'Switch to Portuguese'}
    >
      <div className="flex items-center gap-1 text-sm font-medium">
        {isPortuguese ? (
          <>
            <span className="text-base">🇧🇷</span>
            <span>PT</span>
          </>
        ) : (
          <>
            <span className="text-base">🇺🇸</span>
            <span>EN</span>
          </>
        )}
      </div>
      
      {/* Indicador visual de troca */}
      <div className="flex items-center">
        <svg 
          className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" 
          />
        </svg>
      </div>
    </button>
  )
}

export default LanguageToggle 
import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Verificar se já existe um idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('preferred-language')
    if (savedLanguage) {
      return savedLanguage
    }
    
    // Detectar idioma do navegador
    const browserLanguage = navigator.language || navigator.languages[0]
    return browserLanguage.startsWith('pt') ? 'pt' : 'en'
  })

  useEffect(() => {
    // Salvar idioma no localStorage quando mudar
    localStorage.setItem('preferred-language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt')
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isPortuguese: language === 'pt',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
} 
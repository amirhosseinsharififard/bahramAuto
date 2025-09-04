"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useExcelData } from '@/hooks/useExcelData';

interface LanguageContextType {
  language: 'de' | 'fa';
  setLanguage: (lang: 'de' | 'fa') => void;
  t: (key: string) => string;
  translations: { de: any; fa: any };
  loading: boolean;
  error: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'de' | 'fa'>('de');
  const { translations, loading, error } = useExcelData();

  // Translation function
  const t = (key: string): string => {
    try {
      // Split the key by dots to navigate nested objects
      const keys = key.split('.');
      let value: any = translations[language];
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // If key not found, try to find it in the other language as fallback
          let fallbackValue: any = translations[language === 'de' ? 'fa' : 'de'];
          for (const fallbackKey of keys) {
            if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
              fallbackValue = fallbackValue[fallbackKey];
            } else {
              fallbackValue = undefined;
              break;
            }
          }
          if (fallbackValue) {
            return fallbackValue;
          }
          // If still not found, return the key itself
          return key;
        }
      }
      
      return value || key;
    } catch (error) {
      console.error('Translation error for key:', key, error);
      return key;
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations,
    loading,
    error,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

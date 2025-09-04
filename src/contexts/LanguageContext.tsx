/**
 * Language Context for Internationalization
 *
 * This context provides internationalization (i18n) functionality for the Bahram Autohaus application.
 * It manages language state, translations, and provides a translation function that supports
 * nested object navigation with dot notation.
 *
 * Key Features:
 * - Supports German (de) and Persian (fa) languages
 * - Dynamic translation loading from Excel files
 * - Nested object navigation with dot notation
 * - Fallback to other language if translation not found
 * - RTL/LTR direction support
 * - Loading and error states
 *
 * @fileoverview Language context for internationalization
 * @author Amir Hossein Shrififard
 * @version 1.0.0
 */

'use client'; // Enable client-side rendering

// React imports for context and state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

// Import Excel data hook for loading translations
import { useExcelData } from '@/hooks/useExcelData';

/**
 * Language context type definition
 *
 * This interface defines the shape of the language context value,
 * including all the properties and methods that components can access.
 *
 * @interface LanguageContextType
 * @property {'de' | 'fa'} language - Current language setting ('de' for German, 'fa' for Persian)
 * @property {function} setLanguage - Function to change the current language
 * @property {function} t - Translation function that retrieves translated text by key
 * @property {object} translations - All translations object with 'de' and 'fa' properties
 * @property {boolean} loading - Loading state for translations (true while loading from Excel)
 * @property {string | null} error - Error state for translations (null when no error, string when error occurs)
 */
interface LanguageContextType {
  language: 'de' | 'fa';
  setLanguage: (lang: 'de' | 'fa') => void;
  t: (key: string) => string;
  translations: { de: any; fa: any };
  loading: boolean;
  error: string | null;
}

// Create the language context with undefined as default value
// This will be used to detect if the hook is used outside of the provider
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

/**
 * Custom hook to use the language context
 *
 * This hook provides access to the language context value. It must be used
 * within a LanguageProvider component, otherwise it will throw an error.
 *
 * @returns {LanguageContextType} Language context value containing language state and translation function
 * @throws {Error} If used outside of LanguageProvider
 *
 * @example
 * const { language, setLanguage, t, loading, error } = useLanguage();
 *
 * return (
 *   <div>
 *     <h1>{t('hero.title')}</h1>
 *     <button onClick={() => setLanguage('fa')}>فارسی</button>
 *   </div>
 * );
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/**
 * Language provider props interface
 *
 * @interface LanguageProviderProps
 * @property {ReactNode} children - Child components that will have access to the language context
 */
interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Language provider component that manages language state and translations
 *
 * This component provides the language context to all child components.
 * It manages the current language state and provides a translation function
 * that can navigate nested objects using dot notation.
 *
 * @param {LanguageProviderProps} props - Component props
 * @returns {JSX.Element} Language provider component that wraps children with language context
 *
 * @example
 * <LanguageProvider>
 *   <App />
 * </LanguageProvider>
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Current language state (defaults to German)
  // This state determines which language translations to use
  const [language, setLanguage] = useState<'de' | 'fa'>('de');

  // Get translations data from Excel files using the custom hook
  // This provides the raw translation data, loading state, and error state
  const { translations, loading, error } = useExcelData();

  /**
   * Translation function that retrieves translated text by key
   *
   * This function provides a powerful translation system that supports:
   * - Nested object navigation using dot notation (e.g., "nav.home")
   * - Fallback to the other language if translation not found
   * - Error handling with graceful degradation
   * - Returns the key itself if no translation is found
   *
   * @param {string} key - Translation key (supports dot notation for nested objects)
   * @returns {string} Translated text or key if not found
   *
   * @example
   * t('nav.home') // Returns "Startseite" in German or "صفحه اصلی" in Persian
   * t('hero.title') // Returns the hero title in the current language
   * t('nonexistent.key') // Returns "nonexistent.key" if not found
   */
  const t = (key: string): string => {
    try {
      // Split the key by dots to navigate nested objects
      const keys = key.split('.');
      let value: any = translations[language];

      // Navigate through nested object structure
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          // Key exists in current language, continue navigation
          value = value[k];
        } else {
          // Key not found in current language, try fallback to other language
          let fallbackValue: any =
            translations[language === 'de' ? 'fa' : 'de'];
          for (const fallbackKey of keys) {
            if (
              fallbackValue &&
              typeof fallbackValue === 'object' &&
              fallbackKey in fallbackValue
            ) {
              fallbackValue = fallbackValue[fallbackKey];
            } else {
              fallbackValue = undefined;
              break;
            }
          }
          if (fallbackValue) {
            // Found in fallback language, return that value
            return fallbackValue;
          }
          // Not found in either language, return the key itself
          return key;
        }
      }

      // Return the final value or the key if value is falsy
      return value || key;
    } catch (error) {
      // Handle any errors during translation lookup
      console.error('Translation error for key:', key, error);
      return key;
    }
  };

  /**
   * Create the context value object
   *
   * This object contains all the values and functions that will be available
   * to components that use the useLanguage hook.
   */
  const value: LanguageContextType = {
    language, // Current language setting
    setLanguage, // Function to change language
    t, // Translation function
    translations, // Raw translation data
    loading, // Loading state
    error, // Error state
  };

  /**
   * Render the provider with the context value
   *
   * This makes the language context available to all child components.
   */
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const TranslationTest = () => {
  const { language, setLanguage, t, translations, loading, error, refreshData } = useLanguage();

  if (loading) {
    return <div className="p-4 text-white">Loading translations...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4 text-white">
      <h2 className="mb-4 text-xl font-bold">Translation Test</h2>
      <div className="mb-4">
        <button
          onClick={() => setLanguage("de")}
          className={`mr-2 px-4 py-2 rounded ${
            language === "de" ? "bg-blue-600" : "bg-gray-600"
          }`}
        >
          German
        </button>
        <button
          onClick={() => setLanguage("fa")}
          className={`mr-2 px-4 py-2 rounded ${
            language === "fa" ? "bg-blue-600" : "bg-gray-600"
          }`}
        >
          Persian
        </button>
        <button
          onClick={refreshData}
          className="px-4 py-2 rounded bg-green-600 text-white"
        >
          Refresh Data
        </button>
      </div>
      
      <div className="space-y-2">
        <p><strong>Language:</strong> {language}</p>
        <p><strong>Direction:</strong> {t("direction")}</p>
        <p><strong>Hero Title:</strong> {t("hero.title")}</p>
        <p><strong>Hero Subtitle:</strong> {t("hero.subtitle")}</p>
        <p><strong>Nav Home:</strong> {t("nav.home")}</p>
        <p><strong>Advantages Title:</strong> {t("advantages.title")}</p>
        
        <div>
          <strong>Advantage Items:</strong>
          <ul className="ml-4">
            {translations[language]?.advantageItems?.map((item: any, index: number) => (
              <li key={index}>
                {t(`advantageItems.${index}.title`)}: {t(`advantageItems.${index}.description`)}
              </li>
            )) || (
              <li>No advantage items found</li>
            )}
          </ul>
        </div>
        
        <div className="mt-4">
          <strong>Raw Translations Debug:</strong>
          <pre className="text-xs bg-gray-800 p-2 rounded overflow-auto max-h-32">
            {JSON.stringify(translations[language]?.advantageItems, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TranslationTest;

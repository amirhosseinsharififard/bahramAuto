"use client";

import { useState } from "react";
import { ExcelReader } from "@/utils/excelReader";

const ExcelDebug = () => {
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testExcelReading = async () => {
    setLoading(true);
    try {
      console.log("Testing Excel reading...");
      const data = await ExcelReader.readTranslations('/excel/translations.xlsx');
      console.log("Raw Excel data:", data);
      
      const converted = ExcelReader.convertTranslationsToObject(data);
      console.log("Converted data:", converted);
      
      setDebugInfo({
        rawData: data,
        convertedData: converted,
        rawDataLength: data.length,
        firstFewRaw: data.slice(0, 5),
        faAdvantageItems: converted.fa?.advantageItems,
        deAdvantageItems: converted.de?.advantageItems
      });
    } catch (error) {
      console.error("Error testing Excel:", error);
      setDebugInfo({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 text-white bg-black/80 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Excel Debug</h3>
      <button
        onClick={testExcelReading}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
      >
        {loading ? "Testing..." : "Test Excel Reading"}
      </button>
      
      {debugInfo && (
        <div className="mt-4 space-y-4">
          <div>
            <strong>Raw Data Length:</strong> {debugInfo.rawDataLength}
          </div>
          
          <div>
            <strong>First Few Raw Items:</strong>
            <pre className="text-xs bg-gray-800 p-2 rounded overflow-auto max-h-32">
              {JSON.stringify(debugInfo.firstFewRaw, null, 2)}
            </pre>
          </div>
          
          <div>
            <strong>FA Advantage Items:</strong>
            <pre className="text-xs bg-gray-800 p-2 rounded overflow-auto max-h-32">
              {JSON.stringify(debugInfo.faAdvantageItems, null, 2)}
            </pre>
          </div>
          
          <div>
            <strong>DE Advantage Items:</strong>
            <pre className="text-xs bg-gray-800 p-2 rounded overflow-auto max-h-32">
              {JSON.stringify(debugInfo.deAdvantageItems, null, 2)}
            </pre>
          </div>
          
          {debugInfo.error && (
            <div className="text-red-500">
              <strong>Error:</strong> {debugInfo.error}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExcelDebug;

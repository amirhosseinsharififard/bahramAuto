"use client";

import { useState } from "react";

const CSVTest = () => {
  const [csvData, setCsvData] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const testCSVReading = async () => {
    setLoading(true);
    try {
      const response = await fetch('/excel/translations-template.csv');
      const text = await response.text();
      console.log("Raw CSV text:", text);
      console.log("First 500 characters:", text.substring(0, 500));
      
      // Check for Persian characters
      const persianMatches = text.match(/[\u0600-\u06FF]/g);
      console.log("Persian characters found:", persianMatches?.length || 0);
      console.log("Sample Persian characters:", persianMatches?.slice(0, 10));
      
      setCsvData(text.substring(0, 1000)); // Show first 1000 characters
    } catch (error) {
      console.error("Error reading CSV:", error);
      setCsvData(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 text-white bg-black/80 rounded-lg">
      <h3 className="text-lg font-bold mb-4">CSV Test</h3>
      <button
        onClick={testCSVReading}
        disabled={loading}
        className="px-4 py-2 bg-green-600 rounded disabled:opacity-50"
      >
        {loading ? "Testing..." : "Test CSV Reading"}
      </button>
      
      {csvData && (
        <div className="mt-4">
          <strong>CSV Data (first 1000 chars):</strong>
          <pre className="text-xs bg-gray-800 p-2 rounded overflow-auto max-h-32 whitespace-pre-wrap">
            {csvData}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CSVTest;

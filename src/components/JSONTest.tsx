"use client";

import { useState } from "react";

const JSONTest = () => {
  const [jsonData, setJsonData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testJSONReading = async () => {
    setLoading(true);
    try {
      const response = await fetch('/excel/translations.json');
      const data = await response.json();
      console.log("JSON data loaded:", data);
      setJsonData(data);
    } catch (error) {
      console.error("Error reading JSON:", error);
      setJsonData({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 text-white bg-black/80 rounded-lg">
      <h3 className="text-lg font-bold mb-4">JSON Test</h3>
      <button
        onClick={testJSONReading}
        disabled={loading}
        className="px-4 py-2 bg-purple-600 rounded disabled:opacity-50"
      >
        {loading ? "Testing..." : "Test JSON Reading"}
      </button>
      
      {jsonData && (
        <div className="mt-4 space-y-4">
          <div>
            <strong>FA Hero Title:</strong> {jsonData.fa?.hero?.title}
          </div>
          <div>
            <strong>FA Direction:</strong> {jsonData.fa?.direction}
          </div>
          <div>
            <strong>FA Advantage Items:</strong>
            <ul className="ml-4">
              {jsonData.fa?.advantageItems?.map((item: any, index: number) => (
                <li key={index}>
                  {item.title}: {item.description}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <strong>Raw JSON (first 500 chars):</strong>
            <pre className="text-xs bg-gray-800 p-2 rounded overflow-auto max-h-32">
              {JSON.stringify(jsonData, null, 2).substring(0, 500)}...
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default JSONTest;

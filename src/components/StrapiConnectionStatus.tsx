'use client';

import { useEffect, useState } from 'react';

interface ConnectionStatus {
  isConnected: boolean;
  error: string | null;
  url: string;
}

const StrapiConnectionStatus = () => {
  const [status, setStatus] = useState<ConnectionStatus>({
    isConnected: false,
    error: null,
    url: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  });

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Only test cars API, not hero-contents (which doesn't exist yet)
        const response = await fetch(`${status.url}/api/cars`);
        if (response.ok) {
          setStatus((prev) => ({ ...prev, isConnected: true, error: null }));
        } else {
          setStatus((prev) => ({
            ...prev,
            isConnected: false,
            error: `HTTP ${response.status}: ${response.statusText}`,
          }));
        }
      } catch (error) {
        setStatus((prev) => ({
          ...prev,
          isConnected: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }));
      }
    };

    testConnection();
  }, [status.url]);

  if (process.env.NODE_ENV === 'production') {
    return null; // Don't show in production
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-white p-4 shadow-lg border max-w-xs">
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            status.isConnected ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
        <span className="text-sm font-medium">
          Strapi: {status.isConnected ? 'متصل' : 'قطع شده'}
        </span>
      </div>
      <div className="text-xs text-gray-600 mt-1">
        {status.isConnected ? 'Connected' : 'Disconnected'}
      </div>
      <div className="text-xs text-gray-500 mt-1">URL: {status.url}</div>
      {status.error && (
        <div className="text-xs text-red-600 mt-1">خطا: {status.error}</div>
      )}
    </div>
  );
};

export default StrapiConnectionStatus;

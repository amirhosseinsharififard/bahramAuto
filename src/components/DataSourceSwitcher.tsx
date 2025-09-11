'use client';

import { useState } from 'react';

import { DataSource } from '@/hooks/useCarData';

interface DataSourceSwitcherProps {
  currentSource: DataSource;
  onSourceChange: (source: DataSource) => void;
  className?: string;
}

const DataSourceSwitcher = ({
  currentSource,
  onSourceChange,
  className = '',
}: DataSourceSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sources = [
    {
      value: 'auto',
      label: 'Auto (Recommended)',
      description: 'Automatically choose best available source',
    },
    {
      value: 'strapi',
      label: 'Strapi API',
      description: 'Use Strapi backend for car data',
    },
    {
      value: 'excel',
      label: 'Excel Files',
      description: 'Use local Excel files for car data',
    },
  ] as const;

  const currentSourceInfo = sources.find((s) => s.value === currentSource);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              currentSource === 'strapi'
                ? 'bg-green-500'
                : currentSource === 'excel'
                  ? 'bg-blue-500'
                  : 'bg-yellow-500'
            }`}
          />
          {currentSourceInfo?.label}
        </span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full z-20 mt-1 w-64 rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="p-2">
              <div className="mb-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                Data Source
              </div>
              {sources.map((source) => (
                <button
                  key={source.value}
                  onClick={() => {
                    onSourceChange(source.value);
                    setIsOpen(false);
                  }}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    currentSource === source.value
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        source.value === 'strapi'
                          ? 'bg-green-500'
                          : source.value === 'excel'
                            ? 'bg-blue-500'
                            : 'bg-yellow-500'
                      }`}
                    />
                    <div>
                      <div className="font-medium">{source.label}</div>
                      <div className="text-xs text-gray-500">
                        {source.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="border-t border-gray-200 p-2">
              <div className="text-xs text-gray-500">
                <strong>Current:</strong> {currentSourceInfo?.description}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DataSourceSwitcher;

'use client';

import { Search } from 'lucide-react';

interface GallerySearchFilterSectionProps {
  t: (key: string) => string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const GallerySearchFilterSection = ({
  t,
  searchTerm,
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
}: GallerySearchFilterSectionProps) => {
  const filterOptions = [
    { key: 'alle', label: t('search.filters.all') },
    { key: 'limousine', label: t('search.filters.limousine') },
    { key: 'suv', label: t('search.filters.suv') },
    { key: 'sportwagen', label: t('search.filters.sportwagen') },
    { key: 'kombi', label: t('search.filters.kombi') },
  ];

  return (
    <div className="mb-12 rounded-xl border border-white/10 bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-6 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <div className="relative w-full lg:flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          <input
            type="text"
            placeholder={t('search.placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-gray-800/50 py-3 pl-12 pr-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto">
          {filterOptions.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySearchFilterSection;

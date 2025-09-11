'use client';

import { Search } from 'lucide-react';

interface SearchFilterSectionProps {
  t: (key: string) => string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const SearchFilterSection = ({
  t,
  searchTerm,
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
}: SearchFilterSectionProps) => {
  const filterOptions = [
    { key: 'alle', label: t('search.filters.all') },
    { key: 'limousine', label: t('search.filters.limousine') },
    { key: 'suv', label: t('search.filters.suv') },
    { key: 'sportwagen', label: t('search.filters.sportwagen') },
    { key: 'kombi', label: t('search.filters.kombi') },
  ];

  return (
    <section className="bg-white/10 py-6 shadow-sm backdrop-blur-sm sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          {/* Search Input */}
          <div className="relative w-full lg:flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400 sm:h-5 sm:w-5" />
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:py-3 sm:pl-12 sm:text-base"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto">
            {filterOptions.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                  selectedFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:shadow-sm'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilterSection;

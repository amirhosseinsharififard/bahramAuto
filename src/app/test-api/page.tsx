'use client';

import { DataSourceSwitcher } from '@/components';
import { useCarData } from '@/hooks/useCarData';

export default function TestApiPage() {
  const { cars, loading, error, dataSource, setDataSource, refreshData } =
    useCarData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          API Integration Test
        </h1>

        {/* Data Source Switcher */}
        <div className="mb-8 flex justify-center">
          <DataSourceSwitcher
            currentSource={dataSource}
            onSourceChange={setDataSource}
          />
        </div>

        {/* Status Information */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-4">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Data Source
            </h3>
            <p className="text-gray-300">
              {dataSource === 'auto'
                ? 'Auto (Recommended)'
                : dataSource === 'strapi'
                  ? 'Strapi API'
                  : 'Excel Files'}
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-4">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Loading Status
            </h3>
            <p className={loading ? 'text-yellow-400' : 'text-green-400'}>
              {loading ? 'Loading...' : 'Ready'}
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-4">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Cars Count
            </h3>
            <p className="text-blue-400">{cars.length} cars loaded</p>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-8 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
            <h3 className="mb-2 text-lg font-semibold text-red-400">Error</h3>
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {/* Refresh Button */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={refreshData}
            disabled={loading}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Refreshing...' : 'Refresh Data'}
          </button>
        </div>

        {/* Cars List */}
        {loading ? (
          <div className="text-center text-white">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
            <p className="mt-2">Loading cars...</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <div
                key={car.id}
                className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-6"
              >
                <div className="mb-4">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="h-48 w-full rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/cars/hero-bg.jpg';
                    }}
                  />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">
                  {car.brand} {car.model}
                </h3>

                <div className="mb-4 space-y-2 text-sm text-gray-300">
                  <p>
                    <strong>Year:</strong> {car.year}
                  </p>
                  <p>
                    <strong>Price:</strong> €{car.price.toLocaleString()}
                  </p>
                  <p>
                    <strong>Mileage:</strong> {car.mileage.toLocaleString()} km
                  </p>
                  <p>
                    <strong>Fuel:</strong> {car.fuel}
                  </p>
                  <p>
                    <strong>Transmission:</strong> {car.transmission}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-white">
                    Features:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="rounded bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
                      >
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 3 && (
                      <span className="rounded bg-gray-500/20 px-2 py-1 text-xs text-gray-300">
                        +{car.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {car.gallery && car.gallery.length > 0 && (
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-white">
                      Gallery:
                    </h4>
                    <p className="text-xs text-gray-400">
                      {car.gallery.length} additional images available
                    </p>
                  </div>
                )}

                <p className="text-sm text-gray-400">{car.description}</p>
              </div>
            ))}
          </div>
        )}

        {cars.length === 0 && !loading && (
          <div className="text-center text-white">
            <p className="text-lg">No cars found</p>
            <p className="text-sm text-gray-400 mt-2">
              Try switching data sources or check your configuration
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

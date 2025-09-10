'use client';

import { useCars } from '@/hooks/useCars';
import { CreateCarData } from '@/services/strapi';
import React, { useState } from 'react';

/**
 * Car Management component for admin panel
 * Allows admins to add, edit, and manage cars with multiple images
 */
export const CarManagement: React.FC = () => {
  const {
    cars,
    loading,
    error,
    createCar,
    updateCar,
    deleteCar,
    uploadCarImages,
  } = useCars();

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [editingCar, setEditingCar] = useState<number | null>(null);
  const [formData, setFormData] = useState<CreateCarData>({
    name: '',
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    fuelType: 'gasoline',
    transmission: 'automatic',
    engineSize: '',
    color: '',
    description: '',
    features: [],
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [featuresInput, setFeaturesInput] = useState('');
  const [submitting, setSubmitting] = useState(false);

  /**
   * Handle form input changes
   */
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'year' || name === 'price' || name === 'mileage'
          ? Number(value)
          : value,
    }));
  };

  /**
   * Handle image selection
   */
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedImages(files);
  };

  /**
   * Handle features input (comma-separated)
   */
  const handleFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeaturesInput(e.target.value);
    const features = e.target.value
      .split(',')
      .map((f) => f.trim())
      .filter((f) => f);
    setFormData((prev) => ({ ...prev, features }));
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (editingCar) {
        await updateCar(editingCar, formData);
        setEditingCar(null);
      } else {
        await createCar(formData, selectedImages);
      }

      // Reset form
      setFormData({
        name: '',
        brand: '',
        model: '',
        year: new Date().getFullYear(),
        price: 0,
        mileage: 0,
        fuelType: 'gasoline',
        transmission: 'automatic',
        engineSize: '',
        color: '',
        description: '',
        features: [],
      });
      setSelectedImages([]);
      setFeaturesInput('');
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  /**
   * Handle car deletion
   */
  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      try {
        await deleteCar(id);
      } catch (error) {
        console.error('Error deleting car:', error);
      }
    }
  };

  /**
   * Start editing a car
   */
  const startEditing = (car: any) => {
    setEditingCar(car.id);
    setFormData({
      name: car.attributes.name,
      brand: car.attributes.brand,
      model: car.attributes.model,
      year: car.attributes.year,
      price: car.attributes.price,
      mileage: car.attributes.mileage,
      fuelType: car.attributes.fuelType,
      transmission: car.attributes.transmission,
      engineSize: car.attributes.engineSize,
      color: car.attributes.color,
      description: car.attributes.description,
      features: car.attributes.features,
    });
    setFeaturesInput(car.attributes.features.join(', '));
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg">Loading cars...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Car Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add New Car
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Car Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowForm(false)}
          />
          <div className="relative bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              {editingCar ? 'Edit Car' : 'Add New Car'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Car Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Model
                  </label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (€)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mileage (km)
                  </label>
                  <input
                    type="number"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fuel Type
                  </label>
                  <select
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="gasoline">Gasoline</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transmission
                  </label>
                  <select
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                    <option value="semi-automatic">Semi-Automatic</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Engine Size
                  </label>
                  <input
                    type="text"
                    name="engineSize"
                    value={formData.engineSize}
                    onChange={handleInputChange}
                    placeholder="e.g., 2.0L, 3.0L"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Color
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Features (comma-separated)
                </label>
                <input
                  type="text"
                  value={featuresInput}
                  onChange={handleFeaturesChange}
                  placeholder="e.g., GPS, Leather Seats, Sunroof"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {!editingCar && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Images
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Select multiple images for the car
                  </p>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {submitting
                    ? 'Saving...'
                    : editingCar
                      ? 'Update Car'
                      : 'Add Car'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingCar(null);
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cars List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {car.attributes.images?.data?.[0] ? (
                <img
                  src={StrapiService.getImageUrl(car.attributes.images.data[0])}
                  alt={car.attributes.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">
                {car.attributes.brand} {car.attributes.model}
              </h3>
              <p className="text-gray-600 mb-2">{car.attributes.year}</p>
              <p className="text-green-600 font-bold text-xl mb-3">
                €{car.attributes.price.toLocaleString()}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => startEditing(car)}
                  className="flex-1 bg-blue-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(car.id)}
                  className="flex-1 bg-red-600 text-white py-1 px-3 rounded text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cars.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          No cars found. Add your first car to get started.
        </div>
      )}
    </div>
  );
};


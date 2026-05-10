"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, X, Save } from 'lucide-react';

export default function AddPropertyPage() {
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    propertyType: 'House'
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages([...images, ...files]);
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setPreviews([...previews, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    
    const newPreviews = [...previews];
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Use FormData for multipart/form-data upload
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('location', formData.location);
    data.append('property_type', formData.propertyType);
    
    images.forEach((img) => {
      data.append('images', img);
    });

    try {
      const response = await fetch('http://localhost:8010/api/v1/properties/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: data
      });
      if (response.ok) {
        router.push('/dashboard/properties');
      }
    } catch (error) {
      console.error('Failed to save property:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Add New Property</h1>
        <button 
          onClick={() => router.back()}
          className="text-gray-500 font-bold hover:text-gray-900"
        >
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Property Title</label>
              <input 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                placeholder="e.g. Luxury Modern House in BSD"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Price (IDR)</label>
              <input 
                type="number"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                placeholder="5200000000"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Location</label>
              <input 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                placeholder="BSD City, Tangerang"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Property Type</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none appearance-none"
                value={formData.propertyType}
                onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
              >
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Land</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Description</label>
            <textarea 
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none h-32"
              placeholder="Detailed property description..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
           <h3 className="text-lg font-bold text-gray-900">Property Photos</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {previews.map((url, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-100">
                   <img src={url} className="w-full h-full object-cover" />
                   <button 
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
                   >
                     <X size={14} />
                   </button>
                </div>
              ))}
              <label className="aspect-square rounded-2xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-gray-400 hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer transition-all">
                <Upload size={24} className="mb-2" />
                <span className="text-xs font-bold uppercase">Upload</span>
                <input type="file" multiple className="hidden" onChange={handleImageChange} accept="image/*" />
              </label>
           </div>
        </div>

        <div className="flex justify-end">
           <button 
            type="submit"
            className="px-10 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1 flex items-center space-x-3"
           >
             <Save size={20} />
             <span>Save Property Listing</span>
           </button>
        </div>
      </form>
    </div>
  );
}

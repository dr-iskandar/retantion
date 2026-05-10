import {useTranslations} from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="p-6 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Retantion
        </div>
        <div className="space-x-8 hidden md:flex items-center text-gray-600 font-medium">
          <a href="#" className="hover:text-indigo-600 transition-colors">Fitur</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Harga</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Tentang</a>
          <button className="px-5 py-2 rounded-full border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all">
            {t('login')}
          </button>
          <button className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">
            {t('getStarted')}
          </button>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('description')}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="w-full md:w-auto px-10 py-4 rounded-2xl bg-indigo-600 text-white text-lg font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1">
            Mulai Demo Gratis
          </button>
          <button className="w-full md:w-auto px-10 py-4 rounded-2xl bg-white text-gray-900 text-lg font-bold border border-gray-200 hover:bg-gray-50 transition-all">
            Lihat Playbook SOP
          </button>
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent h-40 bottom-0 z-10"></div>
          <div className="rounded-3xl border border-gray-200 shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm p-2">
             {/* Placeholder for Canva-style dashboard image */}
             <div className="bg-gray-50 rounded-2xl aspect-video flex items-center justify-center text-gray-400 font-medium">
                Dashboard Preview (Canva-style UI)
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

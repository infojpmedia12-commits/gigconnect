'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-yellow-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              G
            </div>
            <span className="text-3xl font-bold tracking-tight text-gray-900">GigConnect</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-lg">
            <a href="#" className="hover:text-pink-600 transition-colors">Find Talent</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Find Work</a>
            <a href="#" className="hover:text-pink-600 transition-colors">How it Works</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              Log in
            </button>
            <button className="px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium transition-colors">
              Join Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6">
            Connect. Hire.<br />Hustle in Kenya.
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-10">
            The best place to find skilled freelancers or get paid for your talent. 
            Secure payments via M-Pesa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-pink-600 hover:bg-pink-700 text-white text-xl font-semibold rounded-2xl transition-all active:scale-95">
              I need a Service
            </button>
            <button className="px-10 py-4 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-xl font-semibold rounded-2xl transition-all active:scale-95">
              I want to Earn
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500">Trusted by 10,000+ Kenyan hustlers</p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b py-4 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex justify-center gap-12 text-gray-400 text-sm">
          <div>M-PESA SECURE</div>
          <div>VERIFIED FREELANCERS</div>
          <div>24/7 SUPPORT</div>
        </div>
      </div>
    </div>
  );
}

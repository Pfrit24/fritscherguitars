import React from "react";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-100 text-neutral-900">
      <section className="h-screen flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="bg-black/60 p-8 rounded-xl text-white text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fritscher Guitars</h1>
          <p className="text-lg md:text-xl mb-6">Handcrafted. Timeless. Uniquely Yours.</p>
          <a href="#gallery" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition">
            View Guitars
          </a>
        </div>
      </section>

      <section id="about" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Fritscher Guitars</h2>
          <p className="text-lg text-neutral-700">
            Established in 2020, Fritscher Guitars is a father and son-run business based in Long Island, NY. What began as a hobby during the Covid pandemic quickly evolved into a full-fledged passion for building world-class custom instruments. Each Fritscher guitar is meticulously crafted to blend traditional techniques with modern innovation, resulting in instruments of exceptional quality and beauty.
          </p>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 md:px-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/guitar1.jpg" alt="Guitar 1" className="rounded-xl shadow" />
            <img src="/guitar2.jpg" alt="Guitar 2" className="rounded-xl shadow" />
            <img src="/guitar3.jpg" alt="Guitar 3" className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      <section id="shop" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">For Sale</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-neutral-100 p-4 rounded-xl shadow text-center">
              <img src="/guitar1.jpg" alt="FG Custom No.1" className="rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">FG Custom No.1</h3>
              <p className="text-sm text-neutral-600 mb-4">$3,200 – Flame Maple Top</p>
              <a href="mailto:fritscherguitars@gmail.com?subject=Inquiry about FG Custom No.1" className="px-4 py-2 bg-black text-white rounded hover:bg-neutral-800 transition inline-block">Buy Now via Email</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-white text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Fritscher Guitars. All rights reserved.</p>
      </footer>
    </main>
  );
}

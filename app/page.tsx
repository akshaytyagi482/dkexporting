"use client"
import { Mail, Phone, Globe as GlobeIcon, ArrowRight, Loader } from "lucide-react";
import ContactForm from "@/components/contact-form";
import ProductCard from "@/components/product-card";
import ServiceCard from "@/components/service-card";
import FeatureCard from "@/components/feature-card";
import { World } from "@/components/ui/globe";
import { GlobeConfig } from "@/components/ui/globe";
import Slider from "@/components/Slider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { CustomEase } from "gsap/all";
import Link from "next/link";


gsap.registerPlugin(useGSAP,ScrollTrigger,TextPlugin);

export default function Home() {
  const textRef = useRef(null);
  const text = 'DK EXPORTING'
  useGSAP(() => {
    gsap.fromTo(
      ".letter",
      { y: "1.1em", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay:0.4,
        duration: 0.75,
        stagger: 0.05, // Stagger for each letter
        ease: "power2.out",
      }
    );
}, []);
 
  useGSAP(() => {
    // const words = textRef.current.children; // Select each word
   
    
    gsap.from(".subh",{
       x:-20,
       delay:0.6,
       duration:0.5,
       opacity:0
    });
    gsap.from(".desc",{
      x:-20,
      delay:0.7,
      duration:0.5,
      opacity:0
   });

   gsap.fromTo(".but",{ 
    opacity:0,
 },{
  opacity:1,
  delay:0.8,
    duration:0.5,
 });
 
  }, []);

  const globeConfig: GlobeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[Math.floor(Math.random() * colors.length)] },
    { order: 14, startLat: -33.936138, startLng: 18.436529, endLat: 21.395643, endLng: 39.883798, arcAlt: 0.3, color: colors[Math.floor(Math.random() * colors.length)] },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 pt-24">
        <div className="container mx-auto px-4 py-20 lg:pt-0 flex flex-col lg:flex-row justify-center items-center gap-12">
          {/* Text Content */}
          <div className="max-w-3xl lg:text-left text-center z-10">
            <h1 ref={textRef}  className="ml6 text-4xl md:text-6xl font-bold text-green-800 dark:text-green-100 mb-4">
              <span className="text-wrapper">
              {text.split("").map((char, index) => (
        <span key={index} className="letter inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
        </span></h1>
            <p className="text-xl md:text-2xl subh text-green-800 dark:text-green-200 mb-8">
              Your Trusted Partner in Global Trade
            </p>
            <p className="text-gray-700 desc dark:text-gray-200 text-lg mb-8 mx-auto">
              DK Exporting specializes in the export and import of premium-quality organic and natural products. We
              provide end-to-end sourcing, logistics, and full white-labeling services to help businesses expand their
              global reach effortlessly.
            </p>
            <button className="bg-green-600 hover:bg-green-700 but text-white px-6 py-3 buttones rounded-full flex items-center gap-2 transition-all max-lg:mx-auto">
              Explore Our Products
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Globe - Shows on mobile (sm and below) and desktop (lg and up), hidden in between */}
          <div className="w-full h-[400px] sm:hidden lg:block lg:w-1/2 lg:h-[600px] relative lg:-mt-10">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/about.png" alt="About DK Exporting" className="w-full h-auto" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">About DK Exporting</h2>
              <div className="h-1 w-20 bg-green-500 mb-8 rounded-full"></div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Founded with a vision to connect global markets with premium organic products, DK Exporting has
                established itself as a trusted name in the international trade industry. Our journey began with a
                simple mission: to provide high-quality, ethically sourced products to businesses worldwide.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We take pride in our rigorous quality control processes and our commitment to sustainability. Every
                product that bears our name undergoes thorough testing and verification to ensure it meets the highest
                standards of quality and purity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Certified Organic Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Ethical Sourcing Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Global Distribution Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Customized Solutions</span>
                </div>
              </div>
              <Link href="/about">
              <button className="bg-green-600 hover:bg-green-700 buttones text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                Learn More About Us
                <ArrowRight size={18} />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Our Product Categories
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Essential Oils & Cold-Pressed Oils"
              description="Premium-grade essential oils and cold-pressed oils sourced from the finest raw materials."
              imageSrc="/oil.jpg"
            />
            <ProductCard
              title="Spices"
              description="High-quality turmeric with rich curcumin content, sourced from organically grown farms."
              imageSrc="/spice.jpg"
            />
            <ProductCard
              title="Seeds"
              description="Nutrient-rich chia seeds and other super seeds, ethically sourced and organically processed."
              imageSrc="/seed.jpg"
            />
            <ProductCard
              title="Natural Supplements"
              description="Moringa-based health supplements, including formulations for male reproductive health."
              imageSrc="/moringa.jpg"
            />
            <ProductCard
              title="Organic Foods"
              description="Dragon fruit products, lime extract, millet-based food, ragi-jaggery cookies, and natural jaggery."
              imageSrc="/ok.jpg"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Export & Import Solutions"
              description="Global distribution, compliance, and efficient supply chain management."
              icon="globe"
            />
            <ServiceCard
              title="White Labeling & Private Branding"
              description="Full customization with your brand name and packaging."
              icon="tag"
            />
            <ServiceCard
              title="Custom Sourcing & Bulk Supply"
              description="Tailored sourcing from certified organic farms and manufacturers."
              icon="search"
            />
            <ServiceCard
              title="Logistics & Documentation Support"
              description="End-to-end shipment handling, customs clearance, and certification assistance."
              icon="truck"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Why Choose DK Exporting?
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard title="Premium Quality" description="Sourced from trusted suppliers" icon="award" />
            <FeatureCard title="Global Reach" description="Seamless export-import services" icon="globe" />
            <FeatureCard title="Customization" description="Complete white-label solutions" icon="settings" />
            <FeatureCard title="Sustainability" description="Ethical and eco-friendly sourcing" icon="leaf" />
          </div>
        </div>
      </section>
      <Slider />
    </main>
  );
}
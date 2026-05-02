import Image from "next/image";
import { CAMPUS_NAME } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* 
        Background Images - Dual strategy for zero JS resize logic.
        Next.js Image component with 'priority' ensures fast LCP.
        Tailwind classes handle visibility based on screen size.
      */}
      
      {/* Mobile Image (Visible only on small screens) */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/images/hero-school-mobile.jpg"
          alt={`${CAMPUS_NAME} — official campus`}
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
          sizes="(max-width: 768px) 100vw, 0vw"
        />
      </div>

      {/* Desktop Image (Visible only on medium screens and up) */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/hero-school.jpg"
          alt={`${CAMPUS_NAME} — official campus`}
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
          sizes="(min-width: 768px) 100vw, 0vw"
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-start px-5 pb-28 pt-[calc(10rem+env(safe-area-inset-top))] sm:px-8 sm:pb-24 sm:pt-[calc(12rem+env(safe-area-inset-top))]">
        <div className="mx-auto w-full max-w-4xl px-6 py-6 text-center sm:px-10 sm:py-8 md:py-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
          <h1 className="mt-4 font-heroDisplay text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.05] [text-shadow:_0_4px_20px_rgba(0,0,0,0.5)]">
            Igniting the <br className="hidden md:block" /> 
            <span className="text-[#F5A623]">Next Generation</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { Testimonials } from "./_components/testimonials";
import { Pricing } from "./_components/pricing";
import { Demo } from "./_components/demo";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Demo />
        <Footer />
      </div>
    </div>
  );
}
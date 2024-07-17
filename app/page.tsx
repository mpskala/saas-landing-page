import Brands from "@/components/brands";
import CTA from "@/components/cta";
import FAQs from "@/components/faqs";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <Showcase />
      <FAQs />
      <CTA />
    </>
  );
}

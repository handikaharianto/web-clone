import Banner from "@/components/truewind/banner";
import Features from "@/components/truewind/features";
import Header from "@/components/truewind/header";
import Hero from "@/components/truewind/hero";
import Solutions from "@/components/truewind/solutions";
import Clients from "@/components/truewind/clients";

export default function TruewindPage() {
  return (
    <>
      <div className="fixed w-full">
        <Banner />
        <Header />
      </div>
      <Hero />
      <Solutions />
      <Features />
      <Clients />
    </>
  );
}

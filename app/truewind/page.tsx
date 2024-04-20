import Banner from "@/components/truewind/banner";
import Header from "@/components/truewind/header";
import Hero from "@/components/truewind/hero";
import Solutions from "@/components/truewind/solutions";

export default function TruewindPage() {
  return (
    <>
      <div className="fixed w-full">
        <Banner />
        <Header />
      </div>
      <Hero />
      <Solutions />
    </>
  );
}

import Banner from "@/components/truewind/banner";
import Header from "@/components/truewind/header";
import Hero from "@/components/truewind/hero";

export default function TruewindPage() {
  return (
    <>
      <div className="fixed w-full">
        <Banner />
        <Header />
      </div>
      <Hero />
    </>
  );
}

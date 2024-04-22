import TextHighlight from "@/components/truewind/text-highlight";
import Image from "next/image";
import Link from "next/link";

export default function Clients() {
  return (
    <section className="bg-[#ffc220]/10">
      <div className="px-4 max-w-7xl mx-auto py-20">
        <div className="2xl:grid 2xl:grid-cols-2">
          <div>
            <div className="text-sm font-medium text-zinc-600">Customers</div>
            <h2 className="font-archivo text-3xl lg:text-5xl !leading-relaxed font-medium mt-2">
              <TextHighlight>Truewind</TextHighlight>
              <br />
              Partners + Clients
            </h2>
            <p className="text-zinc-600 mt-6 max-w-sm">
              Join our growing network of clients that are experiencing the
              Truewind difference every day.
            </p>
            <Link
              href="#"
              className="text-sm inline-flex items-center mt-2 gap-x-2 font-medium"
            >
              <span>Learn About Us</span>
              <Image
                src="/truewind/arrow-right-dark.svg"
                alt="Arrow"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 mt-16 md:grid-cols-3">
            <div className="flex justify-center flex-col items-center">
              <Image
                src="/truewind/client-logo.webp"
                alt="Client"
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center flex-col items-center">
              <Image
                src="/truewind/client-logo.webp"
                alt="Client"
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center flex-col items-center">
              <Image
                src="/truewind/client-logo.webp"
                alt="Client"
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center flex-col items-center">
              <Image
                src="/truewind/client-logo.webp"
                alt="Client"
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center flex-col items-center">
              <Image
                src="/truewind/client-logo.webp"
                alt="Client"
                width={250}
                height={250}
              />
            </div>
            <div className="flex justify-center flex-col items-center">
              <Image
                src="/truewind/client-logo.webp"
                alt="Client"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

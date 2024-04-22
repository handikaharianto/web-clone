import TextHighlight from "@/components/truewind/text-highlight";
import Image from "next/image";

export default function Media() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="max-w-md">
          <div className="text-sm font-medium text-zinc-600">Media</div>
          <h2 className="font-archivo text-3xl lg:text-5xl !leading-relaxed font-medium mt-2">
            <TextHighlight>Featured</TextHighlight> news coverage
          </h2>
        </div>
        <div className="grid items-center justify-center gap-y-16 my-16 md:my-32 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/truewind/new-york-times-logo.webp"
              alt="Media"
              width={170}
              height={170}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/truewind/business-insider-logo.webp"
              alt="Media"
              width={170}
              height={170}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/truewind/axios-logo.webp"
              alt="Media"
              width={170}
              height={170}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

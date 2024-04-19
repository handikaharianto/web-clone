import Image from "next/image";

export default function Banner() {
  return (
    <div className="hidden lg:block bg-[#041f41]">
      <div className="px-6 py-2 flex justify-between">
        <div className="flex gap-x-1 items-center">
          <Image
            src="/truewind/truewind-initial-logo.webp"
            alt="Logo"
            width={24}
            height={24}
          />
          <p className="text-sm text-white font-light">
            Thomson Reuters Ventures Invests in Truewind and Unlocks
            Partnerships with Accounting Firms
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image
            src="/truewind/linkedin-logo.webp"
            alt="Logo"
            width={24}
            height={24}
          />
          <Image
            src="/truewind/x-logo.webp"
            alt="Logo"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}

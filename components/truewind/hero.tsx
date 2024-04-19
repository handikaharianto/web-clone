import TextHighlight from "@/components/truewind/text-highlight";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-dot-zinc-400">
      <div className="bg-gradient-to-b from-[#ffc220]/10 via-[#ffc220]/10 to-zinc-100">
        <div className="pt-36 pb-32 md:pt-48  flex items-center flex-col justify-center gap-y-8 mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-x-2 *:text-sm bg-white rounded-full py-1 pl-1 pr-8 *:font-medium shadow-sm">
            <div className="rounded-full border border-zinc-300 shadow px-3 py-1 bg-white">
              New
            </div>
            <div className="">Truewind AI Assistant is live! 🎉</div>
          </div>
          <div className="text-center space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl md:leading-normal font-archivo tracking-tight leading-snug lg:leading-normal font-medium text-zinc-800">
              Next Generation <TextHighlight>AI-powered</TextHighlight>{" "}
              Accounting Solutions
            </h1>
            <p className="text-lg text-zinc-600">
              Bringing generative AI to power accounting workflow automation for
              accounting firms and world-class bookkeeping services for startups
              and SMBs.
            </p>
            <div className="space-y-4">
              <Link
                href="#"
                className="inline-block bg-[#ffc220] text-zinc-900 px-8 py-3 rounded-full font-medium mt-4"
              >
                Book a Demo
              </Link>
              <div className="text-xs text-zinc-600">
                Get in touch ✤ See what AI can do
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

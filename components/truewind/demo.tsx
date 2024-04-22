import Link from "next/link";
import TextHighlight from "@/components/truewind/text-highlight";

export default function Demo() {
  return (
    <section>
      <div className="px-4 pb-20 max-w-3xl mx-auto">
        <div className="flex justify-center flex-col items-center *:text-center">
          <div className="text-sm font-medium text-zinc-600">Demo</div>
          <h2 className="font-archivo text-3xl lg:text-5xl !leading-relaxed font-medium mt-2">
            Next gen <TextHighlight>AI-powered</TextHighlight> accounting
            solutions
          </h2>
          <p className="mt-8 text-zinc-600 max-w-2xl text-lg">
            Truewind is bringing generative AI to power accounting workflow
            automation. Meet with one of our team members and see what AI can do
            for your organization.
          </p>
          <Link
            href="#"
            className="bg-[#ffc220] text-zinc-900 px-8 py-3 rounded-full font-medium mt-8"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

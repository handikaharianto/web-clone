import TextHighlight from "@/components/truewind/text-highlight";
import Image from "next/image";
import Link from "next/link";

const featureItems = [
  {
    title: (
      <>
        <TextHighlight>AI-powered</TextHighlight> bookkeeping and tax service
      </>
    ),
    image: "/truewind/feature-1.webp",
    desc: [
      "AI-powered to automate accounting tasks, built to augment accountants so they can provide better support to their clients.",
      "An AI copilot to assist in month end close. A management tool with visibility and control. All in one platform.",
    ],
    benefits: ["Faster Monthly Close", "World-Class Support"],
    cta: {
      title: "Startup & SMB",
      url: "#",
    },
  },
  {
    title: (
      <>
        <TextHighlight>The digital accountant</TextHighlight> to prep your
        morning queue
      </>
    ),
    image: "/truewind/feature-1.webp",
    desc: [
      "Automate data classification, supporting document collection, and client follow-up. ",
      "Fully integrated with your existing systems, you will never miss a deadline with an AI agent that follows up on outstanding items while you rest.",
    ],
    benefits: ["Accounting Operations", "Analytics & Insights"],
    cta: {
      title: "Accounting Firm",
      url: "#",
    },
  },
  {
    title: (
      <>
        <TextHighlight>Enterprise grade</TextHighlight> data security and
        privacy
      </>
    ),
    image: "/truewind/feature-1.webp",
    desc: [
      "Truewind is SOC 2 certified. Enterprise-grade security is built into every layer of the Truewind platform.",
      "Data security and privacy are our highest priority. Further, we adhere to OpenAl's newly implemented and strictest data privacy policies for its API platform.",
    ],
    benefits: ["SOC 2 Certified", "Enterprise Grade"],
    cta: {
      title: "Enterprises",
      url: "#",
    },
  },
];

export default function Features() {
  return (
    <section>
      <div className="py-20 px-4 grid gap-y-32 max-w-6xl mx-auto">
        {featureItems.map((item, index) => (
          <div
            key={index}
            className="group grid gap-y-8 gap-x-16 grid-flow-row-dense md:grid-cols-2 items-center"
          >
            <div className="space-y-8 md:group-odd:col-start-2">
              <h4 className="font-archivo text-3xl font-medium lg:text-4xl !leading-relaxed">
                {item.title}
              </h4>
              <div className="space-y-4">
                {item.desc.map((text, index) => (
                  <p key={`desc-${index}`} className="text-zinc-600">
                    {text}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-x-4">
                {item.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-x-1">
                    <Image
                      src="/truewind/check.svg"
                      alt={"Check"}
                      width={24}
                      height={24}
                    />
                    <div className="text-xs">{benefit}</div>
                  </div>
                ))}
              </div>
              <Link
                href={item.cta.url}
                className="rounded-full bg-zinc-800 py-2 px-4 inline-flex items-center gap-x-2"
              >
                <span className="text-white text-sm">{item.cta.title}</span>
                <div>
                  <Image
                    src="/truewind/arrow-right.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </div>
            <div className="md:h-[300px] lg:h-[400px] md:group-odd:col-start-1">
              <Image
                src={item.image}
                alt="Feature"
                width={400}
                height={400}
                className="overflow-hidden rounded-3xl w-full object-cover h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

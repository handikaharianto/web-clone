import Image from "next/image";

const solutionItems = [
  {
    sectionTitle: "Accounting Products",
    contents: [
      {
        title: "Core AI Platform",
        image: "/truewind/sparkle.svg",
        description:
          "Month End Close Powered by AI. We help accountants close their books faster, without the administrative overhead costs that come with most month-end close management solutions.",
      },
      {
        title: "API Products",
        image: "/truewind/gear.webp",
        description:
          "Generative AI for the CFO Office. Foundational AI, uniquely developed for the CFO Office. Truewind Enterprise is a finance & accounting centric foundational AI model across your business.",
      },
    ],
  },
  {
    sectionTitle: "End-to-End Services",
    contents: [
      {
        title: "Bookkeeping",
        image: "/truewind/calculator.webp",
        description:
          "With AI-powered bookkeeping, you can close your books faster and more accurately. Truewind takes care of your back-office operations, freeing you to concentrate on pleasing your customers. ",
      },
      {
        title: "CFO Services",
        image: "/truewind/hand.webp",
        description:
          "Get the insights you need to scale strategically, from evaluating critical financial metrics to forecasting future performance. Get ongoing CFO support tailored to individual companies.",
      },
      {
        title: "Taxes & R&D",
        image: "/truewind/document.webp",
        description:
          "Our finance back-office services include federal and state tax filings, and R&D tax credits. Work with a dedicated tax preparer who can answer all your questions.",
      },
    ],
  },
];

export default function Solutions() {
  return (
    <section>
      <div className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl text-zinc-800 font-medium leading-snug">
          Explore Truewind&apos;s AI-powered Solutions
        </h2>
        <div className="mt-16 grid gap-8 lg:gap-x-16 md:grid-cols-2 mx-auto max-w-5xl">
          {solutionItems.map((solution) => (
            <div key={solution.sectionTitle}>
              <h3 className="text-2xl font-medium text-center">
                {solution.sectionTitle}
              </h3>
              <div className="mt-8 flex flex-col gap-y-8">
                {solution.contents.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-center items-center gap-y-6 bg-white p-8 shadow-[0_12px_40px_0_rgba(255,194,32,0.1)] rounded-2xl"
                  >
                    <div className="bg-[#ffc220]/30 rounded-full p-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={30}
                        height={30}
                      />
                    </div>
                    <h4 className="text-xl font-medium">{item.title}</h4>
                    <p className="text-sm lg:text-base text-center !leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

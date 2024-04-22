"use client";

import { Disclosure } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import TextHighlight from "@/components/truewind/text-highlight";
import clsx from "clsx";

const faqItems = [
  {
    question: "I'm an accounting firm, what does Truewind do for me?",
    answer:
      "A digital accountant, fully integrated with your existing systems. Truewind is an AI accountant that classifies transactions, finds supporting documentation, and more. ",
  },
  {
    question: "I'm an enterprise, what does Truewind do for me?",
    answer:
      "Use our AI-powered close management platform automates routine tasks and finishes your monthly close with time to spare. Find API solutions to power your AI applications. ",
  },
  {
    question: "I'm a startup / SMB, what does Truewind do for me?",
    answer:
      "End-to-end bookkeeping, taxes, and CFO services. Through a combination of our technology and CPA team, we consistently deliver world-class support. ",
  },
  {
    question: "I'm an accounting firm, what does Truewind do for me?",
    answer:
      "A digital accountant, fully integrated with your existing systems. Truewind is an AI accountant that classifies transactions, finds supporting documentation, and more. ",
  },
  {
    question: "I'm an accounting firm, what does Truewind do for me?",
    answer:
      "A digital accountant, fully integrated with your existing systems. Truewind is an AI accountant that classifies transactions, finds supporting documentation, and more. ",
  },
  {
    question: "I'm an accounting firm, what does Truewind do for me?",
    answer:
      "A digital accountant, fully integrated with your existing systems. Truewind is an AI accountant that classifies transactions, finds supporting documentation, and more. ",
  },
];

export default function Faqs() {
  return (
    <section>
      <div className="py-20">
        <div className="max-w-6xl mx-auto bg-[#ffc220]/10 rounded-2xl p-8 md:p-16">
          <div>
            <div className="text-sm font-medium text-zinc-600">FAQ</div>
            <h2 className="font-archivo text-3xl lg:text-5xl !leading-relaxed font-medium mt-2">
              Frequently Asked <TextHighlight>Questions</TextHighlight>
            </h2>
            <p className="text-zinc-600 max-w-md mt-6">
              Your success is our top priority. Our dedicated support team is
              here to assist you every step of the way
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 mt-16">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl">
                <Disclosure as="div" className="overflow-hidden">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="p-6 w-full flex justify-between items-center text-left gap-x-4">
                        <span className="font-medium">{faq.question}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={clsx(
                            "icon icon-tabler icons-tabler-outline icon-tabler-chevron-down transition duration-300 ease-in-out",
                            open ? "-rotate-180" : "rotate-0"
                          )}
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 9l6 6l6 -6" />
                        </svg>
                      </Disclosure.Button>
                      <AnimatePresence>
                        {open && (
                          <Disclosure.Panel
                            static
                            as={motion.div}
                            initial={{
                              height: 0,
                            }}
                            animate={{
                              height: "auto",
                            }}
                            exit={{
                              height: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                          >
                            <div className="text-zinc-600 px-6 pb-6 text-sm md:text-base">
                              {faq.answer}
                            </div>
                          </Disclosure.Panel>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

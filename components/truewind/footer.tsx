import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    section: "Company",
    links: [
      {
        title: "Home",
        url: "#",
      },
      {
        title: "About Us",
        url: "#",
      },
      {
        title: "Resources",
        url: "#",
      },
    ],
  },
  {
    section: "Product",
    links: [
      {
        title: "Core AI Platform",
        url: "#",
      },
      {
        title: "Bookkeeping Service",
        url: "#",
      },
      {
        title: "API Product",
        url: "#",
      },
    ],
  },
  {
    section: "Solutions",
    links: [
      {
        title: "Accounting Firm",
        url: "#",
      },
      {
        title: "Startup & SMB",
        url: "#",
      },
      {
        title: "Enterprise",
        url: "#",
      },
    ],
  },
  {
    section: "Resources",
    links: [
      {
        title: "Careers",
        url: "#",
      },
      {
        title: "Terms & Conditions",
        url: "#",
      },
      {
        title: "Privacy Policy",
        url: "#",
      },
      {
        title: "Data Trust Center",
        url: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#041f41]">
        <div className="max-w-6xl mx-auto px-4 py-20 space-y-32">
          <div className="grid md:grid-cols-2 md:items-end gap-8 justify-between">
            <div className="space-y-8">
              <div>
                <Image
                  src="/truewind/truewind-dark-logo.webp"
                  alt="Logo"
                  width={120}
                  height={120}
                />
              </div>
              <p className="max-w-64 text-zinc-400 text-sm">
                Bringing generative AI to power accounting workflow automation
              </p>
              <div className="inline-flex items-center gap-x-2 px-4 py-2 border border-white/10 rounded-full bg-white/5">
                <Image
                  src="/truewind/mail-logo.svg"
                  alt="Mail"
                  width={24}
                  height={24}
                />
                <span className="text-white/80 text-sm">
                  support@trytruewind.com
                </span>
              </div>
            </div>
            <div>
              <p className="text-white">Contact us here to book a demo:</p>
              <Link
                href="#"
                className="bg-[#ffc220] text-zinc-900 px-8 py-3 rounded-full font-medium mt-8 block text-center md:inline-block"
              >
                Book a Demo
              </Link>
            </div>
          </div>
          <div>
            <div className="space-y-8 lg:flex lg:space-y-0 gap-x-16">
              {navItems.map((item) => (
                <div key={item.section}>
                  <div className="text-white text-sm mb-6">{item.section}</div>
                  <ul className="space-y-4">
                    {item.links.map((link) => (
                      <li key={link.title}>
                        <Link href={link.url} className="text-zinc-400 text-sm">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-x-2">
                <div className="rounded-full p-1 bg-white/5 border border-white/10">
                  <Image
                    src="/truewind/linkedin-logo.webp"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="rounded-full p-1 bg-white/5 border border-white/10">
                  <Image
                    src="/truewind/x-logo.webp"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="text-zinc-400 text-sm max-w-64 mt-8">
                Copyright @ 2024 Truewind Technologies Inc. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

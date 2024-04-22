import Image from "next/image";
import Marquee from "react-fast-marquee";
import TextHighlight from "@/components/truewind/text-highlight";

const testimonialItems = [
  {
    name: "Johnnie Walker",
    position: "Director",
    companyImage: "/truewind/superpath.png",
    profileImage: "/truewind/person.webp",
    testimony:
      '"We researched many of the applications targeting use of Ai in accounting. Rooled is thrilled to partner with Truewind."',
    rating: 5,
  },
  {
    name: "Johnnie Walker",
    position: "Director",
    companyImage: "/truewind/superpath.png",
    profileImage: "/truewind/person.webp",
    testimony:
      '"We researched many of the applications targeting use of Ai in accounting. Rooled is thrilled to partner with Truewind."',
    rating: 5,
  },
  {
    name: "Johnnie Walker",
    position: "Director",
    companyImage: "/truewind/superpath.png",
    profileImage: "/truewind/person.webp",
    testimony:
      '"We researched many of the applications targeting use of Ai in accounting. Rooled is thrilled to partner with Truewind."',
    rating: 5,
  },
  {
    name: "Johnnie Walker",
    position: "Director",
    companyImage: "/truewind/superpath.png",
    profileImage: "/truewind/person.webp",
    testimony:
      '"We researched many of the applications targeting use of Ai in accounting. Rooled is thrilled to partner with Truewind."',
    rating: 5,
  },
  {
    name: "Johnnie Walker",
    position: "Director",
    companyImage: "/truewind/superpath.png",
    profileImage: "/truewind/person.webp",
    testimony:
      '"We researched many of the applications targeting use of Ai in accounting. Rooled is thrilled to partner with Truewind."',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-md">
            <div className="text-sm font-medium text-zinc-600">
              Testimonials
            </div>
            <h2 className="font-archivo text-3xl lg:text-5xl !leading-relaxed font-medium mt-2">
              <TextHighlight>Hear directly</TextHighlight> from our customers
            </h2>
          </div>
        </div>
      </div>
      <div className="pb-20 relative -z-10">
        <Marquee speed={70}>
          <div className="flex items-center gap-x-8 ml-8">
            {testimonialItems.map((testimony, index) => (
              <div
                key={`${testimony}-index`}
                className="border border-zinc-200 rounded-2xl max-w-96 p-8"
              >
                <div className="border-b border-zinc-200 pb-8">
                  <Image
                    src={testimony.companyImage}
                    alt="Company"
                    width={120}
                    height={160}
                  />
                </div>
                <div className="py-8 space-y-8">
                  <div className="flex items-center gap-x-4">
                    <div className="rounded-full overflow-hidden">
                      <Image
                        src={testimony.profileImage}
                        alt="Person"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <div className="font-medium ">{testimony.name}</div>
                      <div className="text-sm text-zinc-600">
                        {testimony.position}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-zinc-600">{testimony.testimony}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-zinc-200 flex items-center gap-x-1">
                  <Image
                    src="/truewind/star.svg"
                    alt="Rating"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/truewind/star.svg"
                    alt="Rating"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/truewind/star.svg"
                    alt="Rating"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/truewind/star.svg"
                    alt="Rating"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/truewind/star.svg"
                    alt="Rating"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

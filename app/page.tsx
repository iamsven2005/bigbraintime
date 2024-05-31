
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center flex-col">
          <a className="font-bold text-2xl lg:text-4xl" href="/">
            BigBrainTime
          </a>
          <div className="flex space-x-4">
            <Link href="#hero" className="py-2 text-gray-700 hover:text-gray-900" prefetch={false}>
              Description
            </Link>
            <Link href="#roadmap" className="py-2 text-gray-700 hover:text-gray-900" prefetch={false}>
              Roadmap
            </Link>
            <Link href="#tokenomics" className="py-2 text-gray-700 hover:text-gray-900" prefetch={false}>
              Tokenomics
            </Link>
            <Link href="#story" className="py-2 text-gray-700 hover:text-gray-900" prefetch={false}>
              Story
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-6 py-10">
        <section id="hero" className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="MemeCoin Image" className="w-50 h-50 rounded-full mb-4 object-contain" />
          <h1 className="text-4xl font-bold mb-2">Welcome to BigBrainTime</h1>
          <p className="mb-6">
            Join us on a community-led adventure within the Internet Computer Protocol landscape, focused on fun and
            exploration.
          </p>
        </section>
        <section id="description" className="my-16 flex flex-col sm:flex-row">
          <div>
          <h2 className="text-3xl font-bold mb-4">Description</h2>
          <p>
            MemeCoin is a token born from the Memethon event, designed to showcase creativity and the exploratory spirit
            of blockchain within the ICP ecosystem.
          </p>
          </div>
          <img
                  src="/Mem.jpeg"
                  width="400"
                  height="225"
                  alt="Product image"
                  className="aspect-video object-cover rounded-lg"
                />
        </section>
        <section id="roadmap" className="my-16">
          <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
          <p>
            Our roadmap outlines the journey of MemeCoin development, with milestones set to build a robust
            infrastructure and toolkit for future innovation.
          </p>
        </section>
        <section id="tokenomics" className="my-16">
          <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
          <p>
            The tokenomics of MemeCoin are designed to sustain the ecosystem and support the community, with a focus on
            long-term growth and utility.
          </p>
        </section>
        <section id="story" className="my-16">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p>
            MemeCoin's story is one of collaboration and community, where every participant contributes to the narrative
            and growth of MemeCoins on the ICP.
          </p>
        </section>
      </div>
    </div>
  )
}
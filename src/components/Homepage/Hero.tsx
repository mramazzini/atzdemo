import { NAVBAR_REM_HEIGHT } from "@/lib/global";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      style={{
        height: `calc(70vh - ${NAVBAR_REM_HEIGHT}rem)`,
        maxHeight: "900px",
      }}
      className="flex flex-row justify-center items-center bg-base-300 rounded-3xl hero-gradient relative"
    >
      <div className="w-full relative h-full flex items-center flex-row p-8">
        <Image
          src="/woman.png"
          alt="woman"
          width={1280}
          height={1252}
          className="w-1/2 absolute right-0 bottom-0"
        />
        <div className="flex flex-col justify-start text-left text-primary-content w-1/2 h-full">
          <div className="mb-auto" />

          <h1 className="text-8xl">A to Z </h1>
          <h2 className="text-3xl font-bold">
            Your Houston Real Estate Experts
          </h2>
          <div className="mt-4">
            <Link href="/about" className="btn btn-lg  mr-4">
              Learn More -&gt;
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg border btn-ghost border-white"
            >
              Get A Quote -&gt;
            </Link>
          </div>
          <div className="mt-auto flex justify-start flex-row items-start">
            <Link href="/contact" className="font-bold btn btn-ghost">
              Contact Us -&gt;
            </Link>
            <Link href="/listings" className="font-bold btn btn-ghost">
              View Listings -&gt;
            </Link>
            <Link href="/about" className="font-bold btn btn-ghost">
              About Us -&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

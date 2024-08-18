import PropertyCard from "@/components/Homepage/FeaturedProperties/PropertyCard";
import Hero from "@/components/Homepage/Hero";
import { EXAMPLE_PROPERTIES } from "@/lib/global";

export default function Home() {
  return (
    <>
      <div className="p-8 w-full">
        <Hero />
        {/* Properties */}
        <div className="flex flex-row  justify-center items-center p-8">
          <div className="w-full text-center">
            <div className="flex flex-col md:flex-row justify-around ">
              {" "}
              {EXAMPLE_PROPERTIES.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Post from "@/components/Homepage/Blogposts/Post";
import PropertyCard from "@/components/Homepage/FeaturedProperties/PropertyCard";
import Hero from "@/components/Homepage/Hero";
import Signup from "@/components/Homepage/Newsletter/Signup";

import { EXAMPLE_BLOG_POSTS, EXAMPLE_PROPERTIES } from "@/lib/global";

export default function Home() {
  return (
    <>
      <div className="p-8 w-full">
        <Hero />
        {/* Properties */}

        <div className="divider divider-primary text-4xl mt-16 font-bold text-primary">
          Featured Listings
        </div>
        <p className="text-xl text-center">
          We have a variety of properties available in the Houston area. Check
          out our featured listings below.
        </p>
        <div className="flex flex-col  justify-center items-center p-8">
          <div className="w-full text-center">
            <div className="flex flex-col md:flex-row justify-around ">
              {EXAMPLE_PROPERTIES.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary w-full p-8 flex flex-row justify-around">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-primary-content">
            Join Our Newsletter
          </h1>
          <p className="text-xl text-primary-content p-4">
            Weekly updates on new listings and real estate news.
          </p>
          <Signup />
        </div>
        <div className="divider divider-horizontal divider-secondary"></div>
        <div>
          <h3 className="text-3xl font-bold text-primary-content text-center">
            Recent Posts
          </h3>
          <div className="carousel w-[500px] ">
            {EXAMPLE_BLOG_POSTS.map((post, index) => (
              <div
                id={`item${post.id}`}
                className="carousel-item w-[500px] flex items-center justify-center "
              >
                <Post key={post.id} blogPost={post} />
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

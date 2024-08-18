import { BlogPost, Property } from "./types";

export const NAVBAR_REM_HEIGHT = 4;
export const EXAMPLE_PROPERTIES: Property[] = [
  {
    id: "2",
    price: "$500,000",
    image: "/house2.jpg",
    location: "5678 Oak St",
    beds: 3,
    baths: 2,
    sqft: 2000,
    type: "house",
    address: {
      street: "5678 Oak St",
      city: "Houston",
      state: "TX",
      zip: "77002",
    },
    description: "This is a beautiful house with a large garden.",
    tags: ["garage", "garden"],
    featured: true,
    new: true,
  },
  {
    id: "1",
    price: "$1,000,000",
    image: "/house1.jpg",
    location: "1234 Elm St",
    beds: 4,
    baths: 3,
    sqft: 3000,
    type: "house",
    description:
      "Featuring a pool and fireplace, this house is perfect for entertaining.",
    address: {
      street: "1234 Elm St",
      city: "Houston",
      state: "TX",
      zip: "77002",
    },
    tags: ["pool", "fireplace"],
    featured: true,
    inDemand: true,
  },

  {
    id: "3",
    price: "$300,000",
    image: "/house3.jpg",
    location: "9101 Pine St",
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: "apartment",
    address: {
      street: "9101 Pine St",
      city: "Houston",
      state: "TX",
      zip: "77002",
    },
    description: "Located in a great neighborhood, perfect for a small family.",
    featured: true,
    tags: ["pool", "garden"],
  },
  //   {
  //     id: "4",
  //     price: "$200,000",
  //     image: "/house4.jpg",
  //     location: "1212 Maple St",
  //     beds: 1,
  //     baths: 1,
  //     sqft: 1000,
  //     type: "apartment",
  //     address: {
  //       street: "1212 Maple St",
  //       city: "Houston",
  //       state: "TX",
  //       zip: "77002",
  //     },
  //     tags: [],
  //   },
];

export const EXAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "How to Buy a Home",
    date: "2021-09-01",
    flavorText: "Learn how to buy a home in 5 easy steps.",
    image: "/blog1.jpg",
  },
  {
    id: "2",
    title: "How to Sell a Home",
    date: "2021-09-15",
    flavorText: "Learn how to sell a home in 5 easy steps.",
    image: "/blog2.jpg",
  },
  {
    id: "3",
    title: "The Best Neighborhoods in Houston",
    date: "2021-10-01",
    flavorText: "Discover the best neighborhoods in Houston.",
    image: "/blog3.jpg",
  },
];

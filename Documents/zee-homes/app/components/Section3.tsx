"use client";
import Link from "next/link";
import { useState } from "react";

const Section3 = () => {
  // Dropdown filters
  const [filters] = useState([
    {
      label: "City",
      placeholder: "Select City",
      options: ["New York City, NY", "Atlanta, GA", "Los Angeles, CA"],
    },
    {
      label: "Price",
      placeholder: "Select Price Range",
      options: ["$500 - $1500", "$1500 - $3000", "$3000+"],
    },
    {
      label: "Property Type",
      placeholder: "Select Property Type",
      options: ["Apartment", "Villa", "Studio", "Condo"],
    },
  ]);

  // Selected filter states
  const [selectedFilters, setSelectedFilters] = useState({
    city: "",
    price: "",
    type: "",
  });

  // House cards data (12 items)
  const [houses] = useState([
    {
      img: "/images/img2.webp",
      price: "$200,000",
      city: "New York City, NY",
      type: "Apartment",
      priceRange: "$1500 - $3000",
      desc: "Beautiful family home with modern finishes and close access to parks and transport.",
      link: "/",
    },
    {
      img: "/images/img3.webp",
      price: "$350,000",
      city: "Atlanta, GA",
      type: "Condo",
      priceRange: "$3000+",
      desc: "Modern condo with skyline views and open-plan living near downtown Atlanta.",
      link: "/",
    },
    {
      img: "/images/img4.webp",
      price: "$120,000",
      city: "Los Angeles, CA",
      type: "Studio",
      priceRange: "$500 - $1500",
      desc: "Cozy studio ideal for young professionals seeking comfort and convenience.",
      link: "/",
    },
    {
      img: "/images/img5.webp",
      price: "$450,000",
      city: "Atlanta, GA",
      type: "Villa",
      priceRange: "$3000+",
      desc: "Luxury villa with private pool, garden, and spacious family rooms.",
      link: "/",
    },
    {
      img: "/images/img6.webp",
      price: "$250,000",
      city: "New York City, NY",
      type: "Condo",
      priceRange: "$1500 - $3000",
      desc: "Stylish condo near downtown Manhattan with top-tier amenities and security.",
      link: "/",
    },
    {
      img: "/images/img7.webp",
      price: "$180,000",
      city: "Los Angeles, CA",
      type: "Apartment",
      priceRange: "$500 - $1500",
      desc: "Affordable apartment in a peaceful area with a friendly community vibe.",
      link: "/",
    },
    {
      img: "/images/img2.webp",
      price: "$500,000",
      city: "New York City, NY",
      type: "Villa",
      priceRange: "$3000+",
      desc: "High-end Manhattan villa with luxurious design and stunning city views.",
      link: "/",
    },
    {
      img: "/images/img8.webp",
      price: "$220,000",
      city: "Atlanta, GA",
      type: "Apartment",
      priceRange: "$1500 - $3000",
      desc: "Modern apartment close to shops, cafes, and major business areas.",
      link: "/",
    },
    {
      img: "/images/img9.webp",
      price: "$150,000",
      city: "Los Angeles, CA",
      type: "Condo",
      priceRange: "$500 - $1500",
      desc: "Comfortable condo with private parking and a spacious balcony view.",
      link: "/",
    },
    {
      img: "/images/img10.webp",
      price: "$400,000",
      city: "New York City, NY",
      type: "Condo",
      priceRange: "$3000+",
      desc: "Luxury condo with rooftop terrace, gym, and scenic Manhattan views.",
      link: "/",
    },
    {
      img: "/images/img11.webp",
      price: "$275,000",
      city: "Atlanta, GA",
      type: "Studio",
      priceRange: "$1500 - $3000",
      desc: "Stylish studio with smart layout, bright lighting, and fitness access.",
      link: "/",
    },
    {
      img: "/images/img12.webp",
      price: "$190,000",
      city: "Los Angeles, CA",
      type: "Villa",
      priceRange: "$3000+",
      desc: "Elegant villa with garden space, garage, and modern interior design.",
      link: "/",
    },
  ]);

  // Handle filter change
  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  // Filter logic
  const filteredHouses = houses.filter((house) => {
    return (
      (!selectedFilters.city || house.city === selectedFilters.city) &&
      (!selectedFilters.price || house.priceRange === selectedFilters.price) &&
      (!selectedFilters.type || house.type === selectedFilters.type)
    );
  });

  return (
    <section className="w-full h-fit py-[5%] flex justify-center items-center bg-gradient-to-b from-white via-red-600/10 to-white">
      <div className="w-[90%] h-full flex flex-col justify-center items-center gap-y-7">
        {/* Heading */}
        <div className="w-full flex flex-col justify-center text-center md:text-left">
          <h2 className="text-black/90 font-semibold text-2xl">
            Explore Top Listings Near You
          </h2>
          <p className="text-black/70 text-[16px] max-w-[600px] mx-auto md:mx-0">
            Discover the best homes, apartments, and properties close to your
            city.
          </p>

          {/* Dropdown Filters */}
          <span className="mt-7 flex flex-wrap justify-center md:justify-start gap-3">
            <select
              className="bg-white/50 backdrop-blur-sm border border-red-400/30 text-black/80 py-2 px-3 rounded text-[14px] focus:outline-none hover:border-red-500 transition-all duration-200"
              onChange={(e) => handleFilterChange("city", e.target.value)}
              value={selectedFilters.city}
            >
              <option value="">Select City</option>
              {filters[0].options.map((opt, j) => (
                <option key={j} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <select
              className="bg-white/50 backdrop-blur-sm border border-red-400/30 text-black/80 py-2 px-3 rounded text-[14px] focus:outline-none hover:border-red-500 transition-all duration-200"
              onChange={(e) => handleFilterChange("price", e.target.value)}
              value={selectedFilters.price}
            >
              <option value="">Select Price Range</option>
              {filters[1].options.map((opt, j) => (
                <option key={j} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <select
              className="bg-white/50 backdrop-blur-sm border border-red-400/30 text-black/80 py-2 px-3 rounded text-[14px] focus:outline-none hover:border-red-500 transition-all duration-200"
              onChange={(e) => handleFilterChange("type", e.target.value)}
              value={selectedFilters.type}
            >
              <option value="">Select Property Type</option>
              {filters[2].options.map((opt, j) => (
                <option key={j} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </span>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {filteredHouses.length > 0 ? (
            filteredHouses.map((house, index) => (
              <div
                key={index}
                className="w-full h-[20em] bg-white shadow-2xl flex flex-col overflow-hidden rounded-xl transition-all duration-300"
              >
                <div className="w-full h-[50%] overflow-hidden">
                  <img
                    src={house.img}
                    alt="house"
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-y-1 w-fit h-fit p-3">
                  <h2 className="text-[16px] font-semibold text-black/90">
                    {house.price}
                  </h2>
                  <p className="text-[14px] text-black/70 max-w-[240px]">
                    {house.desc}
                  </p>
                  <Link
                    href={house.link}
                    className="text-red-600 font-medium group"
                  >
                    View Details{" "}
                    <span className="text-red-500 font-extrabold text-[15px] group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-black/60 text-center w-full py-10">
              No houses found for your filters 😢
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section3;

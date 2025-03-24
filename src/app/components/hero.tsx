import React from "react";

const restaurants = [
  {
    name: "Hadeer Restaurant",
    category: "Cakes N Pastries",
    location: "Lahore",
    image:
      "https://t4.ftcdn.net/jpg/01/96/92/43/240_F_196924308_dm97P0Ob8WhOW0GvAzKWjd0WgP7trPTL.jpg",
  },
  {
    name: "Burger Boss pk",
    category: "Fast Food",
    location: "Lahore",
    image:
      "https://as2.ftcdn.net/v2/jpg/02/44/61/19/1000_F_244611927_yrh0ZIYwOGTDurVnCMAt7Cq8DR4sBkB0.jpg",
  },
  {
    name: "Sizzling Sir Johar Town",
    category: "Fast Food, Wraps, Burgers",
    location: "Lahore",
    image:
      "https://t3.ftcdn.net/jpg/01/33/61/72/240_F_133617244_dWdivRXwoLVzowl1kn3iFP9JGcuNd8n6.jpg",
  },
  {
    name: "Khalida'sKitchen",
    category: "Cakes N Pastries",
    location: "Lahore",
    image:
      "https://t4.ftcdn.net/jpg/02/90/05/01/240_F_290050109_OSesgAR5355skVhUsHaHP0qrHvmNt5c7.jpg",
  },
];

const RestaurantCard = ({ name, category, location, image }: any) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-70 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{category}</p>
        <p className="text-gray-400 text-xs">{location}</p>
      </div>
    </div>
  );
};

const RestaurantGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        Best and Top Restaurants in Lahore
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantGrid;


// import React, { useEffect, useState } from "react";
// import { useAppContext } from "../context/AppContext";
// import { useParams } from "react-router-dom";
// import ProductCard from "../components/ProductCard";

// const AllProducts = () => {
//   const { products, searchQuery } = useAppContext();
//   const { category } = useParams(); // Category from URL
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     let filtered = products;

//     // Filter by category if URL param exists
//     if (category) {
//       filtered = filtered.filter(
//         (product) =>
//           product.category &&
//           product.category.toLowerCase() === category.toLowerCase()
//       );
//     }

//     // Filter by search query
//     if (searchQuery.length > 0) {
//       filtered = filtered.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredProducts(filtered);

//     // Scroll to top when filter changes
//     window.scrollTo(0, 0);
//   }, [products, category, searchQuery]);

//   return (
//     <div className="mt-16 flex flex-col">
//       {/* Header */}
//       <div className="flex flex-col items-end w-max">
//         <h2 className="text-2xl font-medium uppercase">
//           All Products
//         </h2>
//         <div className="w-16 h-0.5 bg-primary rounded-full"></div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-11 md:gap-25 lg:grid-cols-5 mt-6">
//         {filteredProducts.length > 0 ? (
//           filteredProducts
//             .filter((product) => product.inStock)
//             .map((product, index) => (
//               <ProductCard key={index} product={product} />
//             ))
//         ) : (
//           <p className="text-gray-500 col-span-full mt-4 text-center">
//             No products found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const { category } = useParams(); // Category from URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(
        (product) =>
          product.category &&
          product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchQuery.length > 0) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);

    window.scrollTo(0, 0);
  }, [products, category, searchQuery]);

  return (
    <div className="mt-16 flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col items-start w-full">
        <h2 className="text-2xl font-medium uppercase">All Products</h2>
        <div className="w-16 h-0.5 bg-primary rounded-full mt-1"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-6 w-full">
       
      

        {filteredProducts.length > 0 ? (
          filteredProducts
            .filter((product) => product.inStock)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
        ) : (
          <p className="text-gray-500 col-span-full mt-4 text-center">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
// import React, { useEffect, useState } from "react";
// import { useAppContext } from "../context/AppContext";
// import { useParams } from "react-router-dom";
// import ProductCard from "../components/ProductCard";

// const AllProducts = () => {
//   const { products, searchQuery } = useAppContext();
//   const { category } = useParams();
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     let filtered = products;

//     if (category) {
//       filtered = filtered.filter(
//         (product) =>
//           product.category &&
//           product.category.toLowerCase() === category.toLowerCase()
//       );
//     }

//     if (searchQuery.length > 0) {
//       filtered = filtered.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredProducts(filtered);
//     window.scrollTo(0, 0);
//   }, [products, category, searchQuery]);

//   return (
//     <div className="mt-16 flex flex-col w-full">
//       {/* Header */}
//       <div className="flex flex-col items-start w-full max-w-[1280px] mx-auto px-2 sm:px-4">
//         <h2 className="text-2xl font-medium uppercase">All Products</h2>
//         <div className="w-16 h-0.5 bg-primary rounded-full mt-1"></div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-6 max-w-[1280px] mx-auto px-2 sm:px-4">
//         {filteredProducts.length > 0 ? (
//           filteredProducts
//             .filter((product) => product.inStock)
//             .map((product, index) => (
//               <ProductCard key={index} product={product} />
//             ))
//         ) : (
//           <p className="text-gray-500 col-span-full mt-4 text-center">
//             No products found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;



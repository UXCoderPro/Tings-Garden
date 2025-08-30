"use client";
import { useState, useMemo } from "react";
import { products } from "../Data/index"; // your data
import { useNavigate } from "react-router-dom";
import Container from "./Container";

export default function ProductListing({ category }) {
  const navigate = useNavigate();

  // States
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const perPage = 12;

  // --- Filtering ---
  const filteredProducts = useMemo(() => {
    let items = products.filter((p) => p.category === category);

    if (search) {
      items = items.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (type) {
      items = items.filter((p) => p.type === type);
    }
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      items = items.filter(
        (p) => p.price >= min && (max ? p.price <= max : true)
      );
    }

    // Sorting
    if (sort === "price-low") {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      items = [...items].sort((a, b) => b.price - a.price);
    } else if (sort === "name") {
      items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  }, [search, priceRange, type, sort, category]);

  // --- Pagination ---
  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="flex w-full justify-center py-20 px-4 ">
      <div className="max-w-full justify-center flex-col lg:flex-row gap-8 flex">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 space-y-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded px-3 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Price Range</option>
            <option value="0-20">$0 - $20</option>
            <option value="20-50">$20 - $50</option>
            <option value="50-100">$50 - $100</option>
          </select>

          <select
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Type</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </aside>

        {/* Product Grid */}
        <main className="w-full lg:w-3/4">
          {/* Sort + Results */}
          <div className="flex justify-between items-center mb-4">
            <span>
              Showing {paginatedProducts.length} of {filteredProducts.length}{" "}
              results
            </span>
            <select
              className="border px-3 py-2 rounded"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-10">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <Container
                  image={product.image}
                  alt={product.name}
                  name={product.name}
                  type={product.type}
                  price={`$${product.size.small.price} - $${product.size.large.price}`}
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 border rounded font-italian font-semibold ${
                  page === i + 1 ? "bg-primary text-white" : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

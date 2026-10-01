import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import products from "../data/products";

function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="products-page">

            <h1>Our Products</h1>

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>

            {/* Category Filter */}
            <div className="category-filter">

                <button onClick={() => setSelectedCategory("All")}>
                    All
                </button>

                <button onClick={() => setSelectedCategory("Earbuds")}>
                    Earbuds
                </button>

                <button onClick={() => setSelectedCategory("Smart Watches")}>
                    Smart Watches
                </button>

                <button onClick={() => setSelectedCategory("Speakers")}>
                    Speakers
                </button>

                <button onClick={() => setSelectedCategory("Headphones")}>
                    Headphones
                </button>

            </div>

            {/* Products */}
            <div className="product-container">

                {loading ? (
                    <>
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                    </>
                ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                ) : (
                    <p className="no-products">
                        No products found.
                    </p>
                )}

            </div>

        </div>
    );
}

export default Products;
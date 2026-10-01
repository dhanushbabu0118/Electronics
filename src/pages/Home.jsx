import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
    return (
        <div className="home">

            {/* Hero Section */}
            <motion.section
                className="hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="hero-content">
                    <p className="hero-small-text">NEW ARRIVALS</p>

                    <h1>
                        Upgrade Your
                        <br />
                        Everyday Sound
                    </h1>

                    <p className="hero-description">
                        Discover powerful audio, smart wearables and modern gadgets
                        designed for your everyday life.
                    </p>

                    <button className="shop-button">
                        Shop Now
                    </button>
                </div>
            </motion.section>

            {/* Categories Section */}
            <section className="categories">
                <h2>Shop By Category</h2>

                <div className="category-container">

                    <div className="category-card">
                        <div className="category-icon">🎧</div>
                        <h3>Earbuds</h3>
                        <p>Wireless audio</p>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">⌚</div>
                        <h3>Smart Watches</h3>
                        <p>Stay connected</p>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🔊</div>
                        <h3>Speakers</h3>
                        <p>Powerful sound</p>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🎮</div>
                        <h3>Headphones</h3>
                        <p>Immersive experience</p>
                    </div>

                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-products">
                <h2>Featured Products</h2>

                <motion.div
                    className="product-container"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 30
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0
                                }
                            }}
                            transition={{
                                duration: 0.4
                            }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

        </div>
    );
}

export default Home;
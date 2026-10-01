function ProductSkeleton() {
    return (
        <div className="product-card skeleton-card">

            <div className="skeleton-image"></div>

            <div className="skeleton-content">
                <div className="skeleton-line small"></div>
                <div className="skeleton-line title"></div>
                <div className="skeleton-line price"></div>
                <div className="skeleton-button"></div>
            </div>

        </div>
    );
}

export default ProductSkeleton;
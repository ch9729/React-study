import useData from "../../Hook/useData";
import ProductCard from "../products/ProductCard";
import ProductCardSkeleton from "../products/ProductCardSkeleton";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const { data, error, isLoading } = useData("products/featured");
  console.log(data);
  const skeletons = [1, 2, 3];
  return (
    <section className="featured_products">
      <h2>주요 제품</h2>

      <div className="align_center featured_products_list">
        {error && <em className="form_error">{error}</em>}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
        {data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

import { getProducts } from "@/lib/api";
import ProductCard from "../../components/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section>
      <ProductCard />
    </section>
  );
}

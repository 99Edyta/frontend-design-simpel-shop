import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";

const ProductCard = () => {
  return (
    <article>
      <Image src={product.thumbnail} alt={product.title} width={100} height={100} />
      <div>
        <h2>Produktnavn</h2>
        <BsCartPlus />
      </div>
    </article>
  );
};

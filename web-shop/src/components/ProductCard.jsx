import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <article className="bg-gray-100 p-4 rounded-lg">
      {/* <Image src={product.thumbnail} alt="Image" width={100} height={100} /> */}
      <div className="flex justify-between mt-4">
        <h2 className="text-red-500">Produktnavn</h2>
        <BsCartPlus />
      </div>
    </article>
  );
};

export default ProductCard;

import { useParams } from "react-router-dom";
import { products } from "../Data/index";

const ProductDetails = () => {
  const { id } = useParams(); // get product id from route
  const product = products.find((p) => p.id === id);

  if (!product) return <h2 className="text-center py-10">Product Not Found</h2>;

  return (
    <div className="w-full px-6 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-primary font-semibold mb-2">
            ${product.size.small.price} - ${product.size.large.price}
          </p>
          <p className="mb-4 text-gray-600">{product.description}</p>
          <h3 className="font-semibold mb-2">Care Instructions:</h3>
          <p className="text-sm text-gray-600 mb-4">
            {product.careInstruction}
          </p>
          {product.instructionImage && (
            <img
              src={product.instructionImage}
              alt="Care instruction"
              className="w-52 h-auto"
            />
          )}

          <button className="bg-primary text-white px-6 py-3 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

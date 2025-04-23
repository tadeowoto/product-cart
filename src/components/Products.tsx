import "../mocks/products.json";
import { AddToCartIcon } from "./icons";
import { Product } from "../types/types";

type Props = {
  products: Product[];
};

export const Products = ({ products }: Props) => {
  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </div>
            <div>
              <AddToCartIcon />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

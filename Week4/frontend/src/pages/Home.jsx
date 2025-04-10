import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

import pencilImg from "../assets/products/pencil.png";
import penImg from "../assets/products/pen.png";
import highlighterImg from "../assets/products/highlighter.jpeg";

const products = [
  { id: 1, name: "Pencil", price: "₹20", image: pencilImg, description: "Details about Product A" },
  { id: 2, name: "Pen", price: "₹30", image: penImg, description: "Details about Product B" },
  { id: 3, name: "Highlighter", price: "₹40", image: highlighterImg, description: "Details about Product C" },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="text-center py-10 bg-gray-100">
        <h2 className="text-4xl font-bold">Welcome to Our Store</h2>
        <p className="mt-2 text-lg">Explore our exclusive range of products</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
        ))}
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}

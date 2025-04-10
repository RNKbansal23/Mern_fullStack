export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white rounded-lg shadow hover:shadow-xl cursor-pointer transition-all"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
      </div>
    </div>
  );
}

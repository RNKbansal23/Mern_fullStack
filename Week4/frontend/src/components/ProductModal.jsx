export default function ProductModal({ product, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover mb-2 rounded"
        />
        <p className="mb-4">{product.description}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

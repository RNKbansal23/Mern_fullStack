export default function Header() {
    return (
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">My Store</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
        </div>
      </nav>
    );
  }
  
import { Link, useLocation } from 'react-router-dom';
import { Plane, UtensilsCrossed, Home, Tv, Building2, Laptop, Smartphone, Wrench, Sparkles, Shirt as ShirtFolded } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  
  const categories = [
    { path: 'travel', icon: <Plane />, label: 'Travel & Transportation' },
    { path: 'food', icon: <UtensilsCrossed />, label: 'Food & Beverage' },
    { path: 'home-appliances', icon: <Home />, label: 'Home Appliances' },
    { path: 'electronics', icon: <Tv />, label: 'Electronics & Electricals' },
    { path: 'properties', icon: <Building2 />, label: 'Properties' },
    { path: 'computers', icon: <Laptop />, label: 'Computers & Accessories' },
    { path: 'mobile', icon: <Smartphone />, label: 'Mobile Phones & Accessories' },
    { path: 'home-services', icon: <Wrench />, label: 'Home Services' },
    { path: 'beauty', icon: <Sparkles />, label: 'Beauty & Glamour' },
    { path: 'clothing', icon: <ShirtFolded />, label: 'Clothing & Fashion' }
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <nav className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={`/categories/${category.path}`}
              className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                location.pathname.includes(category.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
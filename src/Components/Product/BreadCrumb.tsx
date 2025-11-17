import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm">
          {/* Home Icon */}
          <a
            href="/"
            className="flex items-center gap-1 transition-all duration-200 hover:scale-105 group"
          >
            <Home 
              size={16} 
              className="text-gray-500 group-hover:text-purple-700 transition-colors" 
              style={{ color: 'inherit' }}
            />
            <span className="text-gray-600 group-hover:text-purple-700 font-medium transition-colors">
              Home
            </span>
          </a>

          {/* Breadcrumb Items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={index}>
                {/* Separator */}
                <ChevronRight size={16} className="text-gray-400" />

                {/* Breadcrumb Link or Text */}
                {isLast ? (
                  <span 
                    className="font-semibold truncate max-w-xs"
                    style={{ color: '#633B6F' }}
                  >
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href || '#'}
                    className="text-gray-600 hover:text-purple-700 font-medium transition-all duration-200 hover:scale-105 truncate"
                  >
                    {item.label}
                  </a>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

// Example Usage Component
export function BreadcrumbsExample() {
  const breadcrumbItems = [
    { label: 'Handicrafts', href: '/handicrafts' },
    { label: 'Ceramics', href: '/handicrafts/ceramics' },
    { label: 'Handcrafted Ceramic Vase' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold" style={{ color: '#633B6F' }}>
            Heritage Crafts
          </h1>
        </div>
      </header>

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#633B6F' }}>
            Product Details Page
          </h2>
          <p className="text-gray-600 mb-6">
            Place the Breadcrumbs component right after your header and before your product details section.
          </p>

          {/* Usage Example */}
          <div className="bg-gray-50 rounded-xl p-6 border-2 border-purple-200">
            <h3 className="font-semibold mb-3 text-lg" style={{ color: '#633B6F' }}>
              How to Use:
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import Breadcrumbs from './Breadcrumbs';

const breadcrumbItems = [
  { label: 'Handicrafts', href: '/handicrafts' },
  { label: 'Ceramics', href: '/handicrafts/ceramics' },
  { label: 'Handcrafted Ceramic Vase' } // Current page (no href)
];

<Breadcrumbs items={breadcrumbItems} />`}
            </pre>
          </div>

          {/* Different Examples */}
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-lg" style={{ color: '#633B6F' }}>
                Example Variations:
              </h3>
              
              <div className="space-y-4">
                {/* Simple Path */}
                <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
                  <p className="text-sm text-gray-500 mb-2">Simple Navigation:</p>
                  <Breadcrumbs items={[
                    { label: 'Products', href: '/products' },
                    { label: 'Ceramic Vase' }
                  ]} />
                </div>

                {/* Deep Path */}
                <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
                  <p className="text-sm text-gray-500 mb-2">Deep Navigation:</p>
                  <Breadcrumbs items={[
                    { label: 'Shop', href: '/shop' },
                    { label: 'Handicrafts', href: '/shop/handicrafts' },
                    { label: 'Home Decor', href: '/shop/handicrafts/home-decor' },
                    { label: 'Vases', href: '/shop/handicrafts/home-decor/vases' },
                    { label: 'Premium Ceramic Vase with Hand-painted Designs' }
                  ]} />
                </div>

                {/* Category Path */}
                <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
                  <p className="text-sm text-gray-500 mb-2">Category Navigation:</p>
                  <Breadcrumbs items={[
                    { label: 'Collections', href: '/collections' },
                    { label: 'Traditional Art', href: '/collections/traditional' },
                    { label: 'Nepali Pottery' }
                  ]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
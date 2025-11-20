import React from "react";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-2 -mx-3 sm:-mx-5 lg:-mx-6 px-3 sm:px-5 lg:px-6">
      <nav className="flex items-center space-x-2 text-xs sm:text-sm">
        {/* Home Icon */}
        <a
          href="/"
          className="flex items-center gap-1 transition-all duration-200 hover:scale-105 group"
        >
          <Home
            size={16}
            className="text-gray-500 group-hover:text-purple-700 transition-colors"
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
                  style={{ color: "#633B6F" }}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || "#"}
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
  );
}

// SidebarNavigation.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { ArrowLeftIcon } from "../../components/ui/icons";
import { navigationItems } from "../../data/navigationItems";

function SidebarNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block transition-all duration-300 ${
        isCollapsed ? "w-14" : "w-48"
      }`}
    >
      {/* Sidebar Container */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 p-3">
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="cursor-pointer group relative w-full flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-200 shadow-sm mb-3 border border-gray-200/50"
        >
          <ArrowLeftIcon
            className={`w-4 h-4 text-gray-600 transition-all duration-300 ${
              isCollapsed ? "" : "rotate-180"
            }`}
          />
          {!isCollapsed && (
            <span className="ml-3 text-sm font-medium whitespace-nowrap">
              Compact view
            </span>
          )}

          {/* Tooltip */}
          {isCollapsed && (
            <div className="absolute left-full ml-3 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap">
              Full view
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-0 border-r-4 border-r-white border-t-transparent border-b-transparent"></div>
            </div>
          )}
        </button>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`cursor-pointer group relative flex items-center w-full rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 shadow-sm border border-blue-200/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                } ${
                  isCollapsed ? "justify-center p-3" : "justify-start px-4 py-3"
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`relative flex items-center justify-center ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-gray-700"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />

                  {/* Active Dot */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                {/* Label */}
                {!isCollapsed && (
                  <span className="ml-3 text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                )}

                {/* Tooltip */}
                {isCollapsed && (
                  <div className="absolute left-full ml-3 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap">
                    {item.label}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-0 border-r-4 border-r-white border-t-transparent border-b-transparent"></div>
                  </div>
                )}

                {/* Active Bar Indicator */}
                {isActive && (
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full shadow-sm"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Separator and Home Button */}
        <div className="mt-4 pt-3 border-t border-gray-200/50">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer w-full text-center p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
          >
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold group-hover:scale-105 transition-transform duration-200">
              GS
            </div>
            {!isCollapsed && (
              <p className="mt-2 text-xs text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-200">
                Gonzalo Sanchez Cano
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarNavigation;

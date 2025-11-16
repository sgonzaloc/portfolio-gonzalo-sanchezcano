import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1
            className="text-lg font-bold cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => navigate("/")}
          >
            Gonzalo Sanchez
          </h1>
          <nav className="flex gap-4 text-sm">
            <button
              onClick={() => navigate("/me")}
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === "/me" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Me
            </button>
            <button
              onClick={() => navigate("/projects")}
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === "/projects"
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/skills")}
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === "/skills"
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => navigate("/fun")}
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === "/fun"
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              Fun
            </button>
            <button
              onClick={() => navigate("/contact")}
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === "/contact"
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => navigate("/resume")}
              className={`hover:text-blue-600 transition-colors ${
                location.pathname === "/resume"
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              Resume
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

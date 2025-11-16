import { useNavigate } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import imgMeAvatar from "../assets/me/avatar.png";
import { navigationItems } from "../data/navigationItems";
import { ArrowRightIcon } from "../components/ui/icons";

function Home() {
  const navigate = useNavigate();

  return (
    <PageLayout header={false} sidebar={false}>
      <div className="min-h-screen text-gray-900">
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-0 md:pb-0 mt-4 ">
          {/* Decorative background "gonzalo" */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
            <div
              className="hidden bg-gradient-to-b from-gray-500/20 to-gray-500/3 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
              style={{ marginBottom: "0.8rem" }}
            >
              gonzalo
            </div>
          </div>

          {/* Header with large photo */}
          <div className="relative z-10 w-full max-w-[76rem] mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
              {/* Large photo on the left */}
              <div className="relative">
                <div className="relative h-80 w-64 sm:h-96 sm:w-80 overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    alt="Gonzalo Sanchez"
                    className="h-full w-full object-cover object-center"
                    src={imgMeAvatar}
                  />
                  {/* Gradient effect on photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
                </div>
              </div>

              {/* Text on the right */}
              <div className="text-center lg:text-left flex-1 max-w-4xl">
                <h2 className="text-gray-900 text-xl font-semibold md:text-2xl mb-2">
                  Hey, I'm Gonzalo 🚀
                </h2>
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl mb-4">
                  Master in Computer Science +
                </h1>
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl mb-6">
                  Full-Stack Engineer
                </h1>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Building innovative solutions with{" "}
                  <span className="font-semibold text-gray-800">15+ years</span>{" "}
                  of experience across AI research, fintech, and diverse
                  full-stack applications. Passionate about creating impactful
                  software that solves real-world problems and drives tangible
                  results.
                </p>

                {/* Stats Grid with exact colors and values */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                      15+
                    </div>
                    <div className="text-gray-700 text-sm">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                      30+
                    </div>
                    <div className="text-gray-700 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
                      70+
                    </div>
                    <div className="text-gray-700 text-sm">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">
                      10
                    </div>
                    <div className="text-gray-700 text-sm">Expertise Areas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2">
                      10
                    </div>
                    <div className="text-gray-700 text-sm">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-2">
                      4+
                    </div>
                    <div className="text-gray-700 text-sm">Languages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="relative z-10 w-full max-w-7xl mx-auto mt-4 lg:mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {navigationItems
                .filter((navigationItem) => navigationItem.id !== "home")
                .map((navigationItem, index) => {
                  const IconComponent = navigationItem.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => navigate(navigationItem.path)}
                      className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 hover:bg-white hover:scale-108 active:scale-95 text-left"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <span className="font-semibold text-gray-900">
                            {navigationItem.label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          {navigationItem.description}
                        </p>
                      </div>

                      {/* Hover arrow */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRightIcon />
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Home;

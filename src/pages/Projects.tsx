import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import { projects } from "../data/projects";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "../components/ui/icons";

function Projects() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      // Can scroll left if not at the start
      setCanScrollLeft(scrollLeft > 0);

      // Can scroll right if not at the end
      // Use 1px margin for possible decimals
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Calculate card width + gap
      const cardElement = container.querySelector(".project-card");
      if (cardElement) {
        const cardWidth = cardElement.getBoundingClientRect().width;
        const gap = 16; // gap-4 = 16px
        const scrollAmount = cardWidth + gap;

        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Calculate card width + gap
      const cardElement = container.querySelector(".project-card");
      if (cardElement) {
        const cardWidth = cardElement.getBoundingClientRect().width;
        const gap = 16; // gap-4 = 16px
        const scrollAmount = cardWidth + gap;

        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  // Check buttons on load and when window size changes
  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen text-gray-900 transition-colors">
        <div className="relative h-screen overflow-hidden">
          {/* Main Content */}
          <div className="container mx-auto flex h-full max-w-4xl flex-col">
            <div className="flex-1 overflow-y-auto px-2">
              <div className="pb-4">
                <div className="flex h-full w-full flex-col px-4">
                  <div className="flex h-full w-full flex-col overflow-y-auto">
                    {/* Projects Carousel */}
                    <div className="mb-4 w-full">
                      <div className="w-full transition-all duration-300">
                        <div className="w-full overflow-hidden rounded-lg">
                          <div className="w-full h-full pt-8">
                            <h2 className="max-w-7xl mx-auto text-xl md:text-3xl font-bold text-gray-800 font-sans">
                              Latest Works
                            </h2>

                            {/* Horizontal Carousel */}
                            <div className="relative w-full">
                              <div
                                ref={scrollContainerRef}
                                onScroll={checkScrollButtons}
                                className="flex w-full overflow-x-auto overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none]"
                              >
                                <div className="absolute right-0 z-[10] h-auto w-[5%] overflow-hidden bg-gradient-to-l from-white"></div>
                                <div className="flex flex-row justify-start gap-4 mx-auto max-w-7xl">
                                  {projects.map((project) => (
                                    <div
                                      key={project.id}
                                      className="rounded-3xl last:pr-[5%] md:last:pr-[15%] project-card"
                                    >
                                      <button
                                        onClick={() =>
                                          handleProjectClick(project.id)
                                        }
                                        className="relative z-1 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 hover:scale-105 transition-transform duration-300 project-card"
                                      >
                                        <div className="absolute inset-x-0 top-0 z-30 h-full cursor-pointer bg-gradient-to-b from-black/70 via-transparent to-transparent"></div>
                                        <div className="relative z-30 p-8">
                                          <p className="text-left font-sans text-sm font-medium text-white md:text-base">
                                            {project.category}
                                          </p>
                                          <p className="max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] md:text-3xl text-outline-gray text-white">
                                            {project.title}
                                          </p>
                                        </div>
                                        <img
                                          className="transition duration-300 blur-0 absolute inset-0 z-1 object-cover w-full h-full"
                                          loading="lazy"
                                          alt={project.title}
                                          src={project.image}
                                        />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Navigation Buttons */}
                              <div className="mr-10 flex justify-end gap-2 md:mr-20">
                                <button
                                  onClick={scrollLeft}
                                  disabled={!canScrollLeft}
                                  className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
                                >
                                  <ArrowNarrowLeftIcon />
                                </button>
                                <button
                                  onClick={scrollRight}
                                  disabled={!canScrollRight}
                                  className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
                                >
                                  <ArrowNarrowRightIcon />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="w-full">
                      <div className="flex gap-2 items-start group self-start w-full relative group">
                        <div className="text-gray-600 rounded-lg py-2 w-full break-words max-w-full whitespace-pre-wrap">
                          <div className="w-full">
                            <div className="w-full space-y-4">
                              <div className="prose w-full">
                                <p className="break-words text-lg whitespace-pre-wrap">
                                  I've contributed to a wide range of projects,
                                  from full-stack web applications leveraging
                                  modern JavaScript frameworks to AI and
                                  LLM-based solutions. Every project is an
                                  opportunity to craft meaningful software that
                                  addresses real problems and delivers tangible
                                  impact for users.
                                </p>
                                <p className="break-words text-lg whitespace-pre-wrap mt-4">
                                  Currently, I focus on building scalable web
                                  architectures, integrating AI technologies,
                                  and continuously exploring new tools and
                                  frameworks to stay at the forefront of
                                  development. Collaboration and understanding
                                  the client's needs are key—I aim to provide
                                  solutions even in situations where the
                                  challenge isn't fully defined.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Projects;

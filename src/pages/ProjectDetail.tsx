import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { projectDetails } from "../data/projectDetails";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  CheckIcon,
} from "../components/ui/icons";
import EmblaCarousel from "../components/ui/EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = { loop: true };

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  if (!projectId || !(projectId in projectDetails)) {
    navigate("/");
    return null;
  }

  const project = projectDetails[projectId];

  return (
    <PageLayout>
      <div className="min-h-screen text-gray-900 py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back Button */}
          <button
            onClick={() => navigate("/projects")}
            className="cursor-pointer group flex items-center space-x-2 px-3 py-2 bg-gradient-to-tl from-blue-600 to-blue-200 text-white rounded-2xl border border-blue-800 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-300 mt-4 mb-6"
          >
            <ArrowLeftIcon className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="font-semibold leading-tight">
              Back to Projects
            </span>
          </button>

          {/* Project Header */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg mb-8">
            <div className="relative h-96">
              <EmblaCarousel options={OPTIONS} images={project.images} />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_50%,transparent_60%,rgba(23,37,84,0.6)_80%,rgba(23,37,84,0.9)_100%)]" />
              <div className="absolute bottom-8 left-8 text-white text-shadow-lg break-words text-lg whitespace-pre-wrap text-gray-900 font-extrabold [text-shadow:1px_1px_0px_#f3f4f6,3px_3px_0px_#e5e7eb,5px_5px_0px_#d1d5db,7px_7px_0px_#9ca3af]">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <h1 className="text-4xl font-bold mt-2">{project.title}</h1>
                <p className="text-xl mt-2 opacity-90">{project.description}</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Main Information */}
            <div className="lg:col-span-3 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About the Project
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Project Areas */}
              {project.projectAreas.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Project Areas & Skills
                  </h3>
                  <div className="space-y-6">
                    {project.projectAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {area.name}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {area.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Key Features */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Key Features by Area
                </h2>
                <div className="space-y-6">
                  {project.projectAreas.map((area, areaIndex) => (
                    <div
                      key={areaIndex}
                      className="border-l-4 border-blue-500 pl-4"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {area.name}
                      </h3>
                      <div className="space-y-2">
                        {area.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckIcon />
                            <span className="text-gray-700 ml-2">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Link */}
              {project.demoUrl && (
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Links
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLinkIcon className="h-5 w-5 mr-2 inline-block" />
                      Go to project
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectDetail;

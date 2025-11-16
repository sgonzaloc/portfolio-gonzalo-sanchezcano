import PageLayout from "../components/layout/PageLayout";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { EmailIcon, LocationIcon } from "../components/ui/icons";

function Contact() {
  return (
    <PageLayout>
      <div className="min-h-screen text-gray-900 transition-colors">
        <div className="relative">
          {/* Main Content */}
          <div className="container mx-auto max-w-3xl flex flex-col px-4 py-8">
            {/* Contact Card */}
            <div className="mb-8 w-full rounded-3xl bg-gray-50 p-8 sm:px-10 md:px-16 md:py-12">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-gray-900 text-3xl font-semibold md:text-4xl">
                  Contact Information
                </h2>
                <span className="mt-2 text-gray-500 sm:mt-0">
                  @gonzalo.sanchezcano
                </span>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="group cursor-pointer">
                  <a
                    href="mailto:gonzalo.sanchezcano@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <EmailIcon />
                      <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
                        gonzalo.sanchezcano@gmail.com
                      </span>
                    </div>
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                  <LocationIcon />
                  <span className="text-base sm:text-lg">
                    Open to work wherever the client needs, worldwide
                  </span>
                </div>

                {/* Social Media */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8">
                    <button
                      className="cursor-pointer flex items-center gap-2 rounded-md px-4 py-2 text-gray-500 hover:text-gray-900 hover:underline text-base font-medium transition-colors"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/gonzalo-sanchez-cano/",
                          "_blank"
                        )
                      }
                    >
                      <FaLinkedin
                        className="h-5 w-5"
                        style={{ color: "#0A66C2" }}
                      />
                      LinkedIn
                    </button>

                    <button
                      className="cursor-pointer flex items-center gap-2 rounded-md px-4 py-2 text-gray-500 hover:text-gray-900 hover:underline text-base font-medium transition-colors"
                      onClick={() =>
                        window.open("https://github.com/sgonzaloc", "_blank")
                      }
                    >
                      <FaGithub
                        className="h-5 w-5"
                        style={{ color: "#181717" }}
                      />
                      GitHub
                    </button>

                    <button
                      className="cursor-pointer flex items-center gap-2 rounded-md px-4 py-2 text-gray-500 hover:text-gray-900 hover:underline text-base font-medium transition-colors"
                      title="Organization"
                      onClick={() =>
                        window.open("https://github.com/TraderCharts", "_blank")
                      }
                    >
                      <FaGithub
                        className="h-5 w-5"
                        style={{ color: "#181717" }}
                      />
                      Open-Source Organization
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Descriptive Text */}
            <div className="prose text-gray-600 text-lg">
              <p>
                You can find my contact information above. I'm happy to discuss
                how we can leverage technology to create impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Contact;

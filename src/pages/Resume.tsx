import PageLayout from "../components/layout/PageLayout";
import { FileTextIcon, DownloadIcon } from "../components/ui/icons";

function Resume() {
  // Function to download CV
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1_WigW4-QrEdq5TdkmIk1X4K4ljs9-te5",
      "_blank"
    );
  };

  return (
    <PageLayout>
      <div className="min-h-screen text-gray-900 transition-colors">
        <div className="relative h-screen overflow-hidden">
          {/* Main Content */}
          <div className="container mx-auto flex h-full max-w-3xl flex-col">
            <div className="flex-1 overflow-y-auto px-2">
              <div className="pb-4">
                <div className="flex h-full w-full flex-col px-4">
                  <div className="flex h-full w-full flex-col overflow-y-auto">
                    {/* Download Card */}
                    <div className="w-full">
                      <div className="w-full transition-all duration-300">
                        <div className="w-full rounded-lg">
                          <div className="mx-auto w-full max-w-5xl">
                            <div className="rounded-xl border text-gray-900 w-full border-none shadow-none">
                              <div className="flex flex-col space-y-1.5 p-6 pb-8">
                                <div className="tracking-tight text-4xl font-bold">
                                  Resume
                                </div>
                              </div>
                              <div className="p-6 pt-0">
                                {/* Clickable Download Card */}
                                <div
                                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-50 p-0 transition-all duration-300 hover:bg-gray-100"
                                  onClick={handleDownload}
                                >
                                  <div className="p-6">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                                          <FileTextIcon />
                                        </div>
                                        <div>
                                          <h3 className="text-lg font-semibold text-gray-900">
                                            Gonzalo Sanchez Cano
                                          </h3>
                                          <p className="text-sm text-gray-500">
                                            Full Stack Engineer
                                          </p>
                                          <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
                                            <span className="inline-flex items-center">
                                              PDF
                                            </span>
                                            <span>•</span>
                                            <span>Updated December 2024</span>
                                            <span>•</span>
                                            <span>0.5 MB</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-colors group-hover:bg-blue-700">
                                        <DownloadIcon />
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

                    {/* Descriptive Text */}
                    <div className="w-full text-center">
                      <div className="flex gap-2 items-start group self-start w-full relative group">
                        <div className="text-gray-600 rounded-lg py-2 w-full break-words max-w-full whitespace-pre-wrap">
                          <p
                            className="break-words text-lg whitespace-pre-wrap text-gray-500 text-lg italic"
                            style={{
                              fontFamily: "'Manrope', sans-serif",
                            }}
                          >
                            You can download my resume by clicking on the link
                            above
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pb-4"></div>
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

export default Resume;

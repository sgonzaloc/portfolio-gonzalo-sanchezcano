import PageLayout from "../components/layout/PageLayout";
import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            15+ years of experience building scalable applications, AI
            solutions, and full-stack systems across FinTech, Research, and
            Cloud platforms
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center mb-16">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
              15+
            </div>
            <div className="text-gray-700 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
              30+
            </div>
            <div className="text-gray-700 text-sm">Projects</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
              70+
            </div>
            <div className="text-gray-700 text-sm">Technologies</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">
              10
            </div>
            <div className="text-gray-700 text-sm">Expertise Areas</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2">
              10
            </div>
            <div className="text-gray-700 text-sm">Industries</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-2">
              4+
            </div>
            <div className="text-gray-700 text-sm">Languages</div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Development Philosophy
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Throughout my career, I've learned that impactful software
              solutions require more than just technical expertise—they demand a
              deep understanding of user needs, business objectives, and the
              ability to translate complex requirements into elegant, scalable
              systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">
                  Technical Excellence
                </h4>
                <p className="text-gray-600">
                  Mastering modern technologies while maintaining code quality,
                  performance, and scalability across frontend, backend, and AI
                  systems.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">
                  User-Centric Approach
                </h4>
                <p className="text-gray-600">
                  Building solutions that not only solve technical challenges
                  but also deliver exceptional user experiences and tangible
                  business value.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              From real-time financial charting platforms to AI research and
              cloud-native applications, I specialize in creating systems that
              are both technologically advanced and practically valuable to
              end-users.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Skills;

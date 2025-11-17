import PageLayout from "../components/layout/PageLayout";
import { skillCategories } from "../data/skills";
import { experienceStats } from "../data/experienceStats";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-items-center">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full"
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
        <div className="flex flex-col gap-8 mb-16 mx-20">
          <div className="grid grid-cols-4 gap-12">
            {experienceStats
              .filter((item) => !["industries", "languages"].includes(item.id))
              .map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`text-2xl md:text-3xl font-bold mb-2`}
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-sm">{stat.label}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Skills;

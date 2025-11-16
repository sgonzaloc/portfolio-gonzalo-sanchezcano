import PageLayout from "../components/layout/PageLayout";
import { languages, languageSkills } from "../data/languages";
import { CheckIcon } from "../components/ui/icons";

function Languages() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-4xl px-4 pt-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Languages</h1>
          <p className="text-xl text-gray-600">
            Professional multilingual skills for global collaboration
          </p>
        </div>

        {/* Language Proficiency */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Language Proficiency
          </h2>

          <div className="space-y-6">
            {languages.map((language, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-gray-900">
                      {language.name}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {language.level}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {language.proficiency}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${language.proficiency}%` }}
                  ></div>
                </div>

                <p className="text-gray-600 text-sm">{language.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Language Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {languageSkills.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <CheckIcon />
                    <span className="text-gray-700 ml-2">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* International Experience */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            International Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Professional Collaboration
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  On-site and remote collaboration with teams in France
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Remote collaboration with US-based teams
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  On-site and remote collaboration with teams in Argentina
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Cultural Adaptation
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Effective collaboration in diverse professional and
                  multicultural environments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Coordination of multi-timezone projects and cross-functional
                  teams
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  European citizenship and dual nationality facilitating
                  seamless professional integration in international
                  environments
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-6"></div>

          {/* Quote */}
          <div className="text-center mt-6">
            <p
              className="text-lg italic text-gray-600"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Professional communication and cultural insight drive successful
              global collaboration
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Languages;

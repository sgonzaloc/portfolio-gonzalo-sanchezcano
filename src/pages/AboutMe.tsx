// src/pages/AboutMe.jsx
import PageLayout from "../components/layout/PageLayout";
import { useNavigate } from "react-router-dom";
import imgMeAvatar from "../assets/me/avatar.png";
import {
  hardSkills,
  leadershipSoftSkills,
  collaborationSoftSkills,
} from "../data/mainSkills";
import { languages } from "../data/languages";
import {
  EducationIcon,
  LightningIcon,
  ShieldIcon,
  ComputerIcon,
  NetworkIcon,
  SettingsIcon,
  AWSIcon,
  SecurityIcon,
  TeamIcon,
} from "../components/ui/icons";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <PageLayout header={false}>
      <div className="min-h-screen py-8">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Main Profile */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Profile Photo */}
              <div className="relative mx-auto aspect-3/4 w-full max-w-sm">
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg">
                  <img
                    alt="Gonzalo Sanchez"
                    className="h-full w-full object-cover object-center"
                    src={imgMeAvatar}
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="flex flex-col space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Gonzalo Sanchez Cano
                  </h1>
                  <p className="text-gray-500 text-lg">
                    Full-Stack Engineer & AI Researcher
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p className="text-gray-600">Remote - Worldwide</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Full-Stack Engineer, Functional Analyst, and Scientific
                  Researcher with
                  <span className="font-semibold text-gray-900">
                    {" "}
                    15+ years of experience{" "}
                  </span>
                  across startups, small companies, and large multinational
                  organizations. Passionate about exploring new technologies and
                  tackling complex challenges that drive innovation and growth.
                </p>

                {/* Featured Skills */}
                <div className="mb-2">
                  {/* Hard Skills - Blue */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-3">
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {hardSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-tr from-blue-800 to-blue-500 text-white rounded-full px-4 py-2 text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                      <button
                        onClick={() => navigate("/skills")}
                        className="cursor-pointer"
                      >
                        <span className="bg-gradient-to-tr from-gray-600 to-gray-400 text-white rounded-full px-4 py-2 text-sm font-medium shadow-sm opacity-80">
                          + more
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Leadership Skills - Orange/Amber */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-3">
                      Leadership & Strategy
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leadershipSoftSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-tr from-amber-700 to-amber-500 text-white rounded-full px-4 py-2 text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Collaboration Skills - Green */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-3">
                      Collaboration & Methodology
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {collaborationSoftSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-tr from-green-700 to-green-600 text-white rounded-full px-4 py-2 text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="space-y-8">
              {/* Main Degrees */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <EducationIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      Master in Computer Science
                    </h3>
                    <p className="text-gray-600 text-lg">
                      University of Buenos Aires
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <LightningIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      Advanced Machine Learning Specialization
                    </h3>
                    <p className="text-gray-600 text-lg">
                      National Research University - Higher School of Economics,
                      Moscow
                    </p>
                    <p className="text-green-600 font-semibold mt-1">
                      International specialization suspended due to the
                      "Ukrainian War".
                    </p>
                    <p className="text-green-600 font-semibold mt-1">
                      1st year successfully completed with honors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <ShieldIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      University Computer Analyst
                    </h3>
                    <p className="text-gray-600 text-lg">
                      University of Buenos Aires
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">
                  Complementary Education
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <ComputerIcon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Computer Hardware & Maintenance
                      </h4>
                      <p className="text-gray-600 text-sm">
                        FUCE - University of Buenos Aires
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <NetworkIcon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Network Administration
                      </h4>
                      <p className="text-gray-600 text-sm">
                        AMUTENA - Technological National University
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <SettingsIcon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Electromechanical and Electronic Technician
                      </h4>
                      <p className="text-gray-600 text-sm">Philips School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Certifications & Training
            </h2>

            {/* AWS Cloud Certifications */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AWSIcon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  AWS Cloud Certifications
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS Cloud Solutions Architect Professional",
                  "Architecting Solutions on AWS",
                  "AWS Certified Solutions Architect - Associate",
                  "AWS Cloud Technical Essentials",
                  "AWS Data Lakes Design",
                  "AWS Cloud Consulting",
                ].map((cert, index) => (
                  <span
                    key={index}
                    className="bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-3 py-1 text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <LightningIcon className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  AI & Machine Learning
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Natural Language Processing - Facebook AI",
                  "Quantum Computing - Aix-Marseille University",
                  "Data Mining & WEKA - University of Waikato",
                  "Automatic Speech Recognition",
                  "Advanced Machine Learning Specialization",
                ].map((course, index) => (
                  <span
                    key={index}
                    className="bg-purple-50 text-purple-700 border border-purple-200 rounded-full px-3 py-1 text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Security & Infrastructure */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <SecurityIcon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Security & Infrastructure
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Confidentiality & Integrity - Chalmers University",
                  "Mobile Computing",
                  "Network Administration",
                  "Computer Hardware & Maintenance",
                ].map((course, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Development */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <TeamIcon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Professional Development
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Trainer of Trainers - Personal",
                  "Literacy Program Volunteer - La Tecla",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="bg-green-50 text-green-700 border border-green-200 rounded-full px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {languages.map((lang, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-lg font-semibold text-gray-900">
                    {lang.name}
                  </div>
                  <div className={`text-sm font-medium text-${lang.color}-600`}>
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-4">
              Fluent communication across cultures and technical contexts
            </p>
          </div>

          {/* Personal Philosophy */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                My Approach
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Beyond coding, I'm passionate about languages and cultures — I
                speak English, French, Italian, and Spanish. Understanding
                different perspectives helps me communicate better, collaborate
                effectively, and connect with people on both the technical and
                human sides of a project.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Technical Excellence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Building scalable, maintainable systems with modern
                    technologies and best practices.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Always exploring new technologies, from AI/ML to cloud
                    infrastructure and beyond.
                  </p>
                </div>
                <div className="md:col-span-2 flex justify-center">
                  <div className="space-y-3 text-center max-w-sm">
                    <h4 className="font-semibold text-gray-900">
                      Human-Centered Collaboration
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Communicating effectively, understanding team dynamics,
                      and integrating human perspectives into every technical
                      decision.
                    </p>
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

export default AboutMe;

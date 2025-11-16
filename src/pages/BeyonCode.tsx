import PageLayout from "../components/layout/PageLayout";
import imgMeFun1 from "../assets/me/fun1.png";
import imgMeFun2 from "../assets/me/fun2.png";
import imgMeFun3 from "../assets/me/fun3.png";

function Fun() {
  return (
    <PageLayout>
      <div className="min-h-screen text-gray-900 transition-colors">
        <div className="relative">
          {/* Main Content */}
          <div className="container mx-auto max-w-3xl flex flex-col px-4 py-8">
            {/* Main Card */}
            <div className="mb-8 w-full rounded-xl border-none shadow-none bg-white">
              <div className="flex flex-col space-y-6 p-6">
                <h1 className="text-4xl font-bold tracking-tight">
                  Beyond the Code
                </h1>
                <p className="text-lg leading-relaxed text-gray-600">
                  When I'm not coding, I stay active—whether at the gym,
                  swimming, or exploring nature through hiking and adventure
                  travel. I also have a passion for learning languages and
                  discovering cultures, having lived across multiple countries:
                  seven months in Italy, nearly two years in France, six months
                  in Latvia, three months in Colombia, two months in Egypt, and
                  one month in Greece. These experiences, along with fluency in
                  Spanish, French, Italian, and English, and familiarity with
                  several other languages, have completely broadened my
                  perspective. Meeting friends from all over the world and
                  experiencing diverse ways of thinking has given me a deep
                  understanding of global needs, enriching both my personal life
                  and professional approach.
                </p>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                  {[imgMeFun1, imgMeFun2, imgMeFun3].map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`Personal moment ${idx + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inspirational Text */}
            <div className="prose text-lg text-gray-600">
              <p>
                What excites me most as a software engineer is the opportunity
                to create solutions that truly solve a problem. Unlike products
                you can simply buy off the shelf, real software solutions often
                need to be designed and built to address a specific need. Every
                project brings new challenges, and I embrace these challenges
                with enthusiasm, combining technical expertise with creativity
                and careful analysis. My goal is to deliver solutions that are
                not only reliable and innovative but also make a meaningful
                difference for clients, helping them bring their software
                visions to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Fun;

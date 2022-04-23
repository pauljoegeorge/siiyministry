import React from 'react'

const Vision = () => (
  <div id="vision" className="relative bg-white overflow-hidden">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">Mission & Vision</h1>
          <p className="mt-4 text-xl text-gray-500">
            We envision ourselves to be empowered youth, journeying together in the path of holiness, a community
            helping one another in achieving spiritual growth through catechism, youth camps, trainings and seminars
            that will deepen our faith.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            聖イグナチオ教会国際青年会は、信仰を深めるカテキズム、黙想会、研修、セミナーなどを通じて霊的成長を促すために、
            互いに助け合う共同体である。神聖な道を共に歩むことのできる、力ある青年となることを目指している。
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Inflamed by the Holy Spirit, we also envision to be Christ-centered youth bringing inspiration to our fellow
            young people. Coming together as one Catholic youth, committed to be in service for the Church, we will
            create opportunities that will unify us as we strive to share our gifts and blessings to others and build a
            community that we can call family.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            聖霊によって強められた私たちは、仲間の青年たちに良きインスピレーションをもたらすことのできる、
            キリスト中心に生きる青年となることを目指している。
            <br />
            教会に奉仕することを約束したカトリックの青年として一つになり、
            私たちは自分に与えられた賜物と恵みを他の人に分かち合い、家族と呼べる共同体を築くよう努めながら、一致する場を提供する。
          </p>
        </div>
        <div>
          <div className="mt-10">
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Vision

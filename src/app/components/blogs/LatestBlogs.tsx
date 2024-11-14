import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function LatestBlogs() {
  return (
    <section className="py-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Writings from our team</h2>
        <p className="text-center text-gray-500 mt-4">
          The latest industry news, interviews, technologies, and resources.
        </p>

        <div className="mt-12 relative mx-auto">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            speed={2500}
            className="relative overflow-hidden"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog image"
                  className="w-full h-[70vh] object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <p className="text-sm text-gray-300">Olivia Rhye • 20 Jan 2022</p>
                  <h3 className="text-2xl font-semibold text-white mt-2">
                    UX review presentations
                  </h3>
                  <p className="text-gray-200 mt-1">
                    How do you create compelling presentations that wow your colleagues and impress your managers?
                  </p>
                  <div className="mt-4 space-x-2">
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Design
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Research
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Presentation
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1717501218003-3c89682cfb3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog image 2"
                  className="w-full h-[70vh] object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <p className="text-sm text-gray-300">Alex Tran • 5 Mar 2023</p>
                  <h3 className="text-2xl font-semibold text-white mt-2">
                    The Future of Remote Work
                  </h3>
                  <p className="text-gray-200 mt-1">
                    Exploring the latest trends, tools, and challenges in remote work for a globally connected team.
                  </p>
                  <div className="mt-4 space-x-2">
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Remote Work
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Productivity
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Innovation
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog image 3"
                  className="w-full h-[70vh] object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <p className="text-sm text-gray-300">Jordan Lee • 12 Feb 2023</p>
                  <h3 className="text-2xl font-semibold text-white mt-2">
                    Innovations in AI and Machine Learning
                  </h3>
                  <p className="text-gray-200 mt-1">
                    A look into the advancements in AI technologies shaping the future of industries worldwide.
                  </p>
                  <div className="mt-4 space-x-2">
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      AI
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Machine Learning
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Tech
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

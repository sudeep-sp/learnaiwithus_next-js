import { FaLinkedin } from "react-icons/fa6";

const AboutSection = () => {
    return <div className="boxed-container ">
        <div className="about-section mt-10">
            <h2 className="text-2xl font-bold mb-4 text-white">About</h2>
            <p className="text-base leading-relaxed text-gray-400">
            <b>LearnAIwithUs</b> is a platform by students, for students, exploring the fields of Artificial Learning (ML & DL), and Data Science. We’re here to make learning collaborative, fun, and open to everyone. <br /><br />

            We’re a small, dedicated team building this platform to create a community where students can learn, share, and grow together in these exciting fields.
            </p>
            <>
                <h2 className=" text-white mt-10">Team Members</h2>
                <div className="flex justify-between items-center">
                    <div className="text text-gray-400 mt-3">
                        <h4 className="text-base leading-relaxed text-gray-200">Sudeep</h4>
                        <p className="text-base leading-relaxed text-gray-400 text-sm">Studying Ms in AI at B-TU</p>
                        <a href="https://www.linkedin.com/in/sudeepspatil/" target="_blank" rel="noopener noreferrer" className="mt-1 text-gray-400 inline-block">
                            <FaLinkedin className="text-xl" />
                        </a>
                    </div>
                    <div className="text text-gray-400 mt-3">
                        <h4 className="text-base leading-relaxed text-gray-200">Yashwanth</h4>
                        <p className="text-base leading-relaxed text-gray-400 text-sm">Studying Ms in AI at B-TU</p>
                        <a href="https://www.linkedin.com/in/yashwanth-m-y-0b9b6319a/" target="_blank" rel="noopener noreferrer" className="mt-1 text-gray-400 inline-block">
                            <FaLinkedin className="text-xl" />
                        </a>
                    </div>
                </div>
            </>
        </div>
    </div>
}

export default AboutSection;
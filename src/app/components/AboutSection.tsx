import { FaLinkedin } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <div className="boxed-container " id="about-section">
      <div className="about-section mt-10">
        <h2 className="text-2xl font-bold mb-4 text-white">About</h2>
        <p className="text-base leading-relaxed text-gray-400">
          Welcome to <b>LearnAIwithUs</b>, the go-to platform for students
          exploring the exciting worlds of Artificial Intelligence and Data
          Science.
          <br />
          <br />
          Our mission? To revolutionize the way students learn, share, and
          innovate in these cutting-edge fields. Powered by state-of-the-art
          RAG-based LLM explains terms instantly and AI-powered blogging agents
          create high-quality content in seconds, we’ve created a space where
          knowledge is accessible, interactive, and fun.
          <br />
          <br />
          Join our collaborative community and explore the future of AI, one
          blog at a time!
        </p>
        <>
          <h2 className=" text-white mt-10">Team Members</h2>
          <div className="flex flex-col items-start md:flex-row  justify-between md:items-center">
            <div className="text text-gray-400 mt-3">
              <h4 className="text-base leading-relaxed text-gray-200">
                Sudeep
              </h4>
              <p className="text-base leading-relaxed text-gray-400 text-sm">
                Studying MS in AI at B-TU
              </p>
              <a
                href="https://www.linkedin.com/in/sudeepspatil/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-gray-400 inline-block"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
            <div className="text text-gray-400 mt-3">
              <h4 className="text-base leading-relaxed text-gray-200">
                Yashwanth
              </h4>
              <p className="text-base leading-relaxed text-gray-400 text-sm">
                Studying MS in AI at B-TU
              </p>
              <a
                href="https://www.linkedin.com/in/yashwanth-m-y-0b9b6319a/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-gray-400 inline-block"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default AboutSection;

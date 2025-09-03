import { useState } from 'react';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Download } from 'lucide-react';

const Profile = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    
  return (
    <section
      className="relative px-2 sm:px- md:px-0 my-6 sm:my-8 md:my-10 flex w-full max-w-7xl flex-col justify-center overflow-hidden rounded-2xl sm:rounded-3xl dark border-2 shadow-2xl max-sm:px-4 " 
      id="about"
      aria-labelledby="profile-heading"
    >
    <div className="relative flex flex-col px-4 sm:px-8 md:px-15 justify-center min-h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[40rem] z-20">
      <button 
        className="bg-white text-black px-3 py-2 sm:px-4 sm:py-3 rounded-full absolute top-3 sm:top-5 right-3 sm:right-5 text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Download resume"
      >
        <a 
          href="https://drive.google.com/drive/folders/1Qoc0AYX9Chm69FKPvNf3B-A7euOEumod" 
          className="flex flex-row items-center gap-1 sm:gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true"/>
          <span>Resume</span>
        </a>
      </button>
      <div className='flex flex-col items-center text-center'>
        <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 mb-6 sm:mb-8 md:mb-10">
          <div className="relative w-full h-full">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
            )}
            <img 
              src="/pro.jpg" 
              alt="AmalKrishna KP - Full Stack Developer" 
              className={`rounded-full w-full h-full object-cover shadow-lg transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
        <div className='space-y-3 sm:space-y-4 md:space-y-6'>
          <h1 id="profile-heading" className="sr-only">AmalKrishna KP - Full Stack Developer</h1>
          <TypingAnimation 
          delay={100}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium"
          aria-label="Greeting message"
          >
            Hello, I am AmalKrishna KP
          </TypingAnimation>
          <ContainerTextFlip
          words={["Student","Coder","MERN Developer"]}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
          aria-label="Professional roles"
          />
          <div className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-2">
            <p>
              I am currently pursuing <strong>B.Tech</strong> in <strong>Computer Science</strong> in RIT Kottayam.<br className="hidden sm:block"/>
              A passionate full stack web Developer (<strong>MERN</strong>)<br className="hidden sm:block"/>
              Currently member of Database Team of <strong>CGPC GEC KOTTAYAM</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Profile


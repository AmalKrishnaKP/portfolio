import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Download } from 'lucide-react';
const Profile = () => {
    
  return (
    <div className="relative flex flex-col max-sm:pl-5 pl-15 justify-center  h-[40rem] max-sm:h-[25rem] z-20 max-sm:text-sm">
      <button className="bg-white text-black px-4 py-3 rounded-full absolute top-5 right-5 ">
      <a href="https://drive.google.com/drive/folders/1Qoc0AYX9Chm69FKPvNf3B-A7euOEumod" className="flex flex-row"><Download />Resume</a>

      </button>
      <div className="h-80 w-80 mb-10 max-sm:w-40 max-sm:h-40">
        <img src="/pro.jpg" alt=""  className="rounded-full"/>
      </div>
      <TypingAnimation 
      delay={100}
      className="text-3xl pl-4"
      >
        Hello,I am AmalKrishna KP
      </TypingAnimation>
      <ContainerTextFlip
      words={["Student","Coder","MERN Developer "]}
      // textClassName	={"1px"}
      />
      <h2 className="pl-4">
        I am currently persuing <b>B.Tech</b> in <b>Computer Science</b> in RIT Kottayam .<br />
        A passonate full stack web Developer ( <b>MERN</b> ) <br />
        Currently member of Database Team of <b>CGPC GEC KOTTAYAM</b> 

      </h2>

    </div>
  );
}

export default Profile


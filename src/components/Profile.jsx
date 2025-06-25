import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const Profile = () => {
    
  return (
    <div className="flex flex-col max-sm:pl-5 pl-15 justify-center h-[40rem] z-20 max-sm:text-sm">
      <TypingAnimation 
      delay={100}
      className="text-3xl"
      >
        Hello,I am AmalKrishna KP
      </TypingAnimation>
      <ContainerTextFlip
      words={["Student","Coder","MERN Developer "]}
      // textClassName	={"1px"}
      />
      <h2>
        I am currently persuing <b>B.Tech</b> in <b>Computer Science</b> in RIT Kottayam .<br />
        A passonate full stack web Developer ( <b>MERN</b> ) <br />
        Currently member of Database Team of <b>CGPC GEC KOTTAYAM</b> 

      </h2>

    </div>
  );
}

export default Profile


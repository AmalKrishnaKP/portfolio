import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { projectObj } from "../constance/projectObj.js";



const AnimatedProjects = () => {
    const testimonials = projectObj;
    return <AnimatedTestimonials testimonials={testimonials} />;
}

export default AnimatedProjects
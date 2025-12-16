import {
  RiCss3Fill,
  RiHtml5Fill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  BiLogoAdobe,
  BiLogoFigma,
  BiLogoMongodb,
  BiLogoPostgresql,
} from "react-icons/bi";
import { HiDatabase } from "react-icons/hi";
const skills = [
  {
    icon: <RiHtml5Fill />,
    name: "HTML5",
  },
  {
    icon: <RiCss3Fill />,
    name: "CSS3",
  },
  {
    icon: <RiReactjsFill />,
    name: "React",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "TailwindCSS",
  },
  {
    icon: <RiNodejsFill />,
    name: "Node.js",
  },
  {
    icon: <HiDatabase />,
    name: "Database",
  },
  {
    icon: <BiLogoMongodb />,
    name: "MongoDB",
  },
  {
    icon: <BiLogoPostgresql />,
    name: "PostgreSQL",
  },
  {
    icon: <BiLogoFigma />,
    name: "Figma",
  },
  {
    icon: <BiLogoAdobe />,
    name: "Adobe Cloud Creative",
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        Las <span className="text-accent">Tecnologías</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-secondary group">
                  <div className="text-3xl text-white group-hover:text-accent transition-all">
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

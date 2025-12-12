import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/sergio-pastor-segura-b5211a19/",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/spastorsegura/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;

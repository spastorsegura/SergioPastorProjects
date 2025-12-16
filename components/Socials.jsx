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
          <a
            key={index}
            className={iconStyles}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;

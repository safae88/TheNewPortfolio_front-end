import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

 

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
  mail: Mail,
};

export default function SocialLinks({ links, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ name, url, icon }) => {
        const Icon = icons[icon] || Mail;
        return (
          <a
            key={name}
            href={url}
            target={url.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={name}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:text-neutral-950 hover:shadow-md"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}

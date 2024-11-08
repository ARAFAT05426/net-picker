import { IconType } from "react-icons";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
interface social_linksProps {
  icon: IconType;
  title?: string;
  path: string;
}

// Define the array of social links with icons and paths
const social_links: social_linksProps[] = [
  {
    icon: FaFacebookF,
    title: "Facebook",
    path: "https://facebook.com"
  },
  {
    icon: FaTwitter,
    title: "Twitter",
    path: "https://twitter.com"
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    path: "https://instagram.com"
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    path: "https://linkedin.com"
  }
];

export default social_links;
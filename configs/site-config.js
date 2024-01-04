import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Umesh Gangadharaiah. All Rights Reserved.`,
  author: {
    name: "Umesh Gangadharaiah",
    accounts: [
      {
        url: "https://github.com/umeshmg27 ",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      // {
      //   url: "https://twitter.com/muhammad_ahmaad",
      //   label: "Twitter Account",
      //   type: "twitter",
      //   icon: <FaTwitter />
      // },
      // {
      //   url: "https://dev.to/m_Umesh ",
      //   label: "Dev Account",
      //   type: "gray",
      //   icon: <FaDev />
      // },
      {
        url: "https://linkedin.com/in/umeshmg",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      // {
      //   url: "https://www.quora.com/profile/Muhammad-Umesh -66",
      //   label: "Quora Account",
      //   type: "red",
      //   icon: <FaQuora />
      // },
      {
        url: "mailto:umeshujwal@gmail.com",
        label: "Mail Umesh ",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;

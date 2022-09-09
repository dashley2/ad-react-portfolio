import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  const contactIcons = [
    {
        name: "GitHub",
        src: "akar-icons:github-fill",
        href: "https://github.com/dashley2",
        alt: "https://github.com/dashley2",
    },
    {
        name: "LinkedIn",
        src: "akar-icons:linkedin-box-fill",
        href: "https://www.linkedin.com/in/ashley-darr-a81a63180/",
        alt: "https://www.linkedin.com/in/ashley-darr-a81a63180/",
    },
    {
      name: "email",
      src: "clarity:email-solid",
      href: "mailto: ashleydarr@alumni.unc.edu",
      alt: "ashleydarr@alumni.unc.edu",
    },
  ];

  return (
    <footer className="" id="footer">
      <div className="d-flex justify-content-around mx-20">
        {contactIcons.map((icon) => (
          <a
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-icons"
            key={icon.name}
          >
            <Icon icon={icon.src} color="#84DCC6" width="40" height="40" />
          </a>
        ))}
      </div>
      <div className="d-flex justify-content-center mb-2 mt-2">
        <h5>Ashley Darr &copy; 2022</h5>
      </div>
    </footer>
  );
}

export default Footer;
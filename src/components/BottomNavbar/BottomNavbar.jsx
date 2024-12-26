import React from "react";
import "./BottomNavbar.css";

function BottomNavbar() {
  const links = [
    { href: "#", text: "Online Grievance-Redressal" },
    { href: "#", text: "Extension Of Approvals" },
    { href: "#", text: "AICTE Mandatory Documents" },
    { href: "#", text: "Mandatory Disclosure" },
  ];

  return (
    <section className="footer-1">
      <nav className="bottom-navbar">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.href}>{link.text}</a>
            {index < links.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </nav>
    </section>
  );
}

export default BottomNavbar;

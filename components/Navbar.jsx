import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section>
      <header>
        <nav>
          <div className="row">
            <div className="columnLogo">
              <Link href="/">
                <Image
                  style={{ cursor: "pointer" }}
                  src="/images/panthart-header-logo-light.svg"
                  alt="Panthart Logo Light"
                  height={30}
                  width={150}
                />
              </Link>
            </div>

            <div className="columnMenuItems">
              <div className="menuLinks">
                <Link href="/aboutus">Who We Are</Link>
              </div>

              <div className="menuLinks">
                <Link href="/angelinvestors">Angel Investors</Link>
              </div>

              <div className="menuLinks">
                <Link href="/roadmap">Roadmap</Link>
              </div>

              <div className="menuLinks">
                <Link href="/workwithus">Work With Us</Link>
              </div>

              <div className="menuLinks">
                <Link href="/faqs">Faqs</Link>
              </div>

              <div className="hamburger" onClick={() => setShowMenu(true)}>
                <FaBars />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="mobileNav"
        style={showMenu ? { display: "flex" } : null}
        onClick={() => setShowMenu(false)}
      >
        <div className="closeMenu" onClick={() => setShowMenu(false)}>
          <FaTimes />
        </div>

        <div className="mobileLinks">
          <Link href="/aboutus">Who We Are</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/angelinvestors">Angel Investors</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/roadmap">Roadmap</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/careers">Work With Us</Link>
        </div>

        <div className="mobileLinks">
          <Link href="/faqs">Faqs</Link>
        </div>
      </div>
    </section>
  );
}

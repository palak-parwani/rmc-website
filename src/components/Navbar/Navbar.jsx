"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        {/* LEFT */}
        <div className={styles.navbarLeft}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/assets/logoo.png"
              alt="Construction Logo"
              width={140}
              height={50}
              className={styles.navbarLogo}
            />
          </Link>
        </div>

        {/* HAMBURGER (Mobile Only) */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* RIGHT MENU */}
        <div
          className={`${styles.navbarRight} ${menuOpen ? styles.open : ""
            }`}
        >
          <ul>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
            <li><Link href="/aboutus" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
            <li><Link href="/products" onClick={() => setMenuOpen(false)}>PRODUCTS</Link></li>
            <li><Link href="/machineries" onClick={() => setMenuOpen(false)}>MACHINERIES & EQUIPMENTS</Link></li>
            <li><Link href="/contactus" onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>
          </ul>
        </div>
      </nav>

      <WhatsappButton />
    </>
  );
};

export default Navbar;

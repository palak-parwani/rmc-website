import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import WhatsappButton from "../WhatsappButton/WhatsappButton";

const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png" // Put your logo in /public/logo.png
            alt="Construction Logo"
            width={140}
            height={50}
            className={styles.navbarLogo}
          />
        </Link>
      </div>

      <div className={styles.navbarRight}>
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/aboutus">ABOUT US</Link></li>
          <li><Link href="/products" className="text-uppercase">Products</Link></li>
          <li><Link href="/machineries" className="text-uppercase">Machineries & Equipments</Link></li>
          <li><Link href="/contactus">CONTACT US </Link></li>
        </ul>
      </div>
    </nav>
    <WhatsappButton />
    </>
  );
};

export default Navbar;

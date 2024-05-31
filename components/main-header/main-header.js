import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import HeaderLogo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={HeaderLogo} alt="A plate full of food" priority />
          Foodies
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;

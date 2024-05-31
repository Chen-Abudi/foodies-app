import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";

import MainHeaderBackground from "./main-header-background";
import HeaderLogo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

function MainHeader() {
  // const path = usePathname();

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
              {/* <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse Meals
              </Link> */}
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
              {/* <Link
                href="/community"
                className={path === "/community" ? classes.active : undefined}
              >
                Foodies Community
              </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;

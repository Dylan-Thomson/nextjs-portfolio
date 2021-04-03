import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <Link href="/about">
        <a className={styles.navlink}>.aboutMe()</a>
      </Link>
      <Link href="/xp">
        <a className={styles.navlink}>.workExperience()</a>
      </Link>
      <Link href="/projects">
        <a className={styles.navlink}>.showProjects()</a>
      </Link>
      <Link href="/contact">
        <a className={styles.navlink}>.contactMe()</a>
      </Link>
    </nav>
  );
}

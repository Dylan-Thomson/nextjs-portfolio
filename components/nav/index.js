import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav({ activePages, activePage }) {
  return (
    <nav className={styles.navbar}>
      <Link href="/about">
        <a>.aboutMe()</a>
      </Link>
      <Link href="/xp">
        <a>.workExperience()</a>
      </Link>
      <Link href="/projects">
        <a>.showProjects()</a>
      </Link>
      <Link href="/contact">
        <a>.contactMe()</a>
      </Link>
    </nav>
  );
}

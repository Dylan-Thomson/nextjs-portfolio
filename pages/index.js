import Head from "next/head";
import Layout, { name } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import GitHubLink from "../components/githubLink";
// import LinkedInLink from "../components/linkedInLink";
import { GitHubLink, LinkedInLink, ResumeLink } from "../components/linkIcon";
import NavLink from "../components/navLink";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name}</title>
      </Head>
      <section>
        <h2 className={utilStyles.heading2Xl}>Dylan Thomson</h2>
        {/* <p>Download resume: <ResumeLink size="2x"/></p> */}
        <p>
          <GitHubLink size="2x" /> <LinkedInLink size="2x" />
        </p>
        {/* <p><FontAwesomeIcon icon={faCoffee}/></p> */}
        {/* <p>
          &#123; Full stack developer &#125;
        </p> */}
        <p>Full Stack Web Developer</p>
        <p>map(), filter(), reduce() fan</p>
        <p className={utilStyles.comment}>// Owned by two cats</p>
        <p>
          <NavLink path="resume.pdf" text="downloadCV"/>
        </p>
      </section>
    </Layout>
  );
}

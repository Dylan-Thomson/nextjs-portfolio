import Head from "next/head";
// import Image from "next/image";
import Layout, { name } from "../../components/layout";
// import utilStyles from "../../styles/utils.module.css";

export default function About() {
  return (
    <Layout activePage="about">
      <Head>
        <title>{name} - About</title>
      </Head>
      <section>

        <p>I am a full stack developer from and based in Northeast Ohio.</p>
        <article>
          <h2>Skills</h2>
        </article>
        <article>
          <h2>Tools</h2>
        </article>
        <article>
          <h2>Experience / Education</h2>
        </article>
        <article>
          <h2>Other Interests</h2>
        </article>
      </section>
    </Layout>
  );
}

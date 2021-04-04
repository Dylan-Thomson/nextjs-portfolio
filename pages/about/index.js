import Head from "next/head";
import Layout, { name } from "../../components/layout";

export default function About() {
  return (
    <Layout activePage="about">
      <Head>
        <title>{name} - About</title>
      </Head>
      <section>
        <menu>Social Media Menu</menu>
        <p>
          I am a full stack developer from and based in Northeast Ohio.
        </p>
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

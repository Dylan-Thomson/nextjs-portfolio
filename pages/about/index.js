import Head from "next/head";
import Layout, { name } from "../../components/layout";

export default function About() {
  return (
    <Layout activePage="about">
      <Head>
        <title>{name} - About</title>
      </Head>
      <section>
        <h2>about()</h2>
        <menu>Social Media Menu</menu>
        <p>
          I am a full stack developer based in Northeast Ohio.
        </p>
      </section>
    </Layout>
  );
}

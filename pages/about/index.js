import Head from "next/head";
import Layout, { name } from "../../components/layout";

export default function About() {
  return (
    <Layout activePage="about">
      <Head>
        <title>{name} - About</title>
      </Head>
    </Layout>
  );
}

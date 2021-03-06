import Head from "next/head";
import Layout, { name } from "../../components/layout";
export default function Experience() {
  return (
    <Layout activePage="work">
      <Head>
        <title>{name} - Work</title>
      </Head>
      <section>
        <h2>Projects Coming Soon!</h2>
      </section>
    </Layout>
  );
}

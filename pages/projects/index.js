import Head from "next/head";
import Layout, { name } from "../../components/layout";

export default function Projects() {
  return (
    <Layout activePage="showProjects()">
      <Head>
        <title>{name} - Projects</title>
      </Head>
    </Layout>
  );
}

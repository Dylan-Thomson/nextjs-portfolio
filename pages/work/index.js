import Head from "next/head";
import Layout, { name } from "../../components/layout";
export default function Experience() {
  return (
    <Layout activePage="work">
      <Head>
        <title>{name} - Experience</title>
      </Head>
    </Layout>
  );
}

import Head from "next/head";
import Layout, { name } from "../../components/layout";
export default function Experience() {
  return (
    <Layout activePage="workExperience()">
      <Head>
        <title>{name} - Experience</title>
      </Head>
    </Layout>
  );
}

import Head from "next/head";
import Layout, { name } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name} - Home</title>
      </Head>
    </Layout>
  );
}

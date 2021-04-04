import Head from "next/head";
import Layout, { name } from "../../components/layout";

export default function Contact() {
  return (
    <Layout activePage="contact">
      <Head>
        <title>{name} - Contact</title>
      </Head>
    </Layout>
  );
}

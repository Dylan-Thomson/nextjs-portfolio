import Head from "next/head";
import Layout, { name } from "../../components/layout";

export default function Contact() {
  return (
    <Layout activePage="contact">
      <Head>
        <title>{name} - Contact</title>
      </Head>
      <section>
        <h2>Please reach out to me via email:</h2>
        <a href="mailto:dylantdev@gmail.com">dylantdev@gmail.com</a>
      </section>
    </Layout>
  );
}

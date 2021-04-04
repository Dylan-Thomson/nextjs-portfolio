import Head from "next/head";
import Layout, { name } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name}</title>
      </Head>
      <section>
        <h2 className={[utilStyles.string, utilStyles.heading2Xl].join(" ")}>"Dylan Thomson"</h2>
        <p>
          &#123; Full stack developer &#125;
        </p>
        <p className={utilStyles.comment}>
          // Owned by two cats
        </p>
      </section>
    </Layout>
  );
}

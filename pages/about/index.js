import Head from "next/head";
// import Image from "next/image";
import Layout, { name } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function About() {
  return (
    <Layout activePage="about">
      <Head>
        <title>{name} - About</title>
      </Head>
      <section>
        <p>I am a full stack developer from and based in Northeast Ohio.</p>
        <p className={utilStyles.lightText}>
          I currently work at an aerospace manufacturer as an applications
          developer, where I develop data collection and visualization
          applications to assist engineering and operations. Heavy use of SQL
          and functional JavaScript.
        </p>
        <article>
          <h2>Front End Development</h2>
          <div
            className={[utilStyles.autoGrid, utilStyles.lightText].join(" ")}
          >
            <div>
              <div>JavaScript</div>
              <div>CSS3</div>
              <div>HTML5</div>
            </div>
            <div>
              <div>React / Next JS</div>
              <div>jQuery</div>
              <div>Kendo UI, FusionCharts</div>
            </div>
            <div>
              <div>Bootstrap</div>
              <div>SASS/SCSS</div>
            </div>
          </div>
        </article>
        <article>
          <h2>Back End Development</h2>
          <div
            className={[utilStyles.autoGrid, utilStyles.lightText].join(" ")}
          >
            <div>
              <div>PHP</div>
              <div>Node.js</div>
              <div>C# / .NET 5</div>
            </div>
            <div>
              <div>T-SQL</div>
              <div>MySQL</div>
              <div>MongoDB</div>
            </div>
            <div>
              <div>WAMP</div>
              <div>IIS</div>
              <div>Heroku</div>
              <div>Vercel</div>
            </div>
          </div>
        </article>
        <article>
          <h2>Other Tools / Skills</h2>
          <div
            className={[utilStyles.autoGrid, utilStyles.lightText].join(" ")}
          >
            <div>
              <div>Git / GitHub</div>
              <div>Node.js</div>
            </div>
            <div>
              <div>VS Code</div>
              <div>Visual Studio</div>
            </div>
            <div>
              <div>SSMS</div>
              <div>RazorSQL</div>
            </div>
          </div>
        </article>
        <article>
          <h2>Experience / Education</h2>
          <div
            className={[utilStyles.autoGrid, utilStyles.lightText].join(" ")}
          >
            <div>
              {/* <h3>Experience</h3> */}
              <div>
                <h3 className={utilStyles.purple}>Applications Developer</h3>
                <p>
                  @ Technifab Inc. <span>2019 - now</span>
                </p>
                {/* <p>
                  I mainly develop data collection and visualization applications to assist engineering and operations. 
                  Heavy use of SQL and functional JavaScript.
                </p> */}
              </div>
            </div>
            <div>
              {/* <h3>Education</h3> */}
              <h3 className={utilStyles.purple}>
                Full Stack Web Development Boot Camp
              </h3>
              <p>@ Case Western Reserve</p>
              <h3 className={utilStyles.purple}>
                B.S. Computer And Information Science
              </h3>
              <p>@ Cleveland State University</p>
            </div>
          </div>
        </article>
        <article>
          <h2>Other Interests</h2>
          <div
            className={[utilStyles.autoGrid, utilStyles.lightText].join(" ")}
          >
            <div>
              <div>Board Games</div>
              <div>Tabletop Games</div>
              <div>Video Games</div>
            </div>
            <div>
              <div>Cooking Food</div>
              <div>Eating Food</div>
              <div>Bourbon Tasting</div>
            </div>
            <div>
              <div>Sci Fi</div>
              <div>Fantasy</div>
              <div>History</div>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}

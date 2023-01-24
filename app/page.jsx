import Image from "next/image";
import { Inter, Nosifer } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });
const nosifer = Nosifer({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <header>
          <img src="/logo.png" alt="" />
          <nav>
            <li className={inter.className}>home</li>
            <li className={inter.className}>pricing</li>
            <li className={inter.className}>portfolio</li>
            <li className={inter.className}>contact us</li>
          </nav>

          <button className={inter.className}>get started</button>
        </header>

        <h1 className={inter.className}>
          Grow your business with digital marketing
        </h1>

        <img src="/vector.png" alt="" />

        <div className={styles.buttonContainer}>
          <button>get started</button>
          <img src="/play.png" alt="" />
        </div>
      </div>
      <div className={styles.people}>
        <img src="/people.png" alt="" />
      </div>

      <div className={styles.services}>
        <span className={inter.className}>Our services</span>
        <p className={inter.className}>what we do</p>

        <div className={styles.servicesContainer}>
          <div>
            <h2 className={inter.className}>grow your business</h2>
            <p className={inter.className}>
              we have a team of professionals who will help you to grow your
              business and also collaborate with you.
            </p>
          </div>
          <div>
            <h2 className={inter.className}>best tools</h2>
            <p className={inter.className}>
              we use the best tools to help you drive more sales for your
              business
            </p>
          </div>
          <div>
            <h2 className={inter.className}>drive more sales</h2>
            <p className={inter.className}>
              we use the best tools to help you drive more sales for your
              business
            </p>
          </div>
        </div>
      </div>

      <div className={styles.offer}>
        <img src="/woman.png" alt="" />
        <div className={styles.right}>
          <h2 className={inter.className}>
            We offer the best services to grow your business
          </h2>
          <p className={inter.className}>
            We have a team of professionals who will help you to grow your
            business and also collaborate with you.
          </p>
          <button>learn more</button>
        </div>
      </div>

      <div className={styles.testimonials}>
        <span className={styles.className}>testimonials</span>
        <h2 className={inter.className}>Our client world</h2>
        <div className={styles.cardWrap}>
          <div className={styles.card}>
            <div className={styles.stars}>
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
            </div>

            <div className={styles.teshead}>
              <div className={styles.box}></div>
              <div className={styles.text}>
                <h3 className={inter.className}>Ezeh Anthony</h3>
                <p className={inter.className}>Frontend developer</p>
              </div>
              <img src="/quote.png" alt="" />
            </div>

            <h4 className={inter.className}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quam possimus, exercitationem dolore itaque quo. Quae obcaecati
              quidem vel enim ducimus molestias optio quis! Id numquam harum
              nobis rem asperiores!
            </h4>
          </div>
          <div className={styles.card}>
            <div className={styles.stars}>
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
            </div>

            <div className={styles.teshead}>
              <div className={styles.box}></div>
              <div className={styles.text}>
                <h3 className={inter.className}>John Doe</h3>
                <p className={inter.className}>Ai</p>
              </div>
              <img src="/quote.png" alt="" />
            </div>

            <h4 className={inter.className}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quam possimus, exercitationem dolore itaque quo. Quae obcaecati
              quidem vel enim ducimus molestias optio quis! Id numquam harum
              nobis rem asperiores!
            </h4>
          </div>
        </div>
      </div>

      <footer className={nosifer.className}>Anthony's piece</footer>
    </main>
  );
}

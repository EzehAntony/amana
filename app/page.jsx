"use client";

import Image from "next/image";
import { Inter, Nosifer } from "@next/font/google";
import styles from "./page.module.css";
import gsap from "gsap";
import { Power4, Power3, Power0, Power1, Power2 } from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const inter = Inter({ subsets: ["latin"] });
const nosifer = Nosifer({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();
  const g = gsap.utils.selector(ref);
  const t1 = gsap.timeline({
    defaults: {
      opacity: 0,
    },
  });

  const t2 = gsap.timeline({ defaults: { opacity: 0 } });
  const t3 = gsap.timeline({ defaults: { opacity: 0 } });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(g("#main *"), { visibility: "visible" });
      const hero = (() => {
        t1.from(g("#logo"), { x: 40 })
          .from(
            g("#hero h1"),
            {
              y: 50,
            },
            "<+=.2"
          )
          .from(g("#hero #vector"), {}, "<+=.5")
          .from(g("#hero button"), { y: -20, ease: "bounce" }, "<+=.2")
          .from(g("#hero #play"), { x: -20, ease: "bounce" }, "<+=.3")
          .from(
            g("#people"),
            {
              scale: 1.5,
              y: -20,
              ease: Power1.easeIn,
            },
            "<+=.3"
          );
      })();

      const services = (() => {
        t2.from(g("#services > span"), {
          y: 50,
          scrollTrigger: {
            trigger: "#services > span",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
          },
        }).from(g("#services > p"), {
          y: 50,
          scrollTrigger: {
            trigger: "#services >p",
            start: "top 80%",
            end: "top 70%",
            scrub: 1,
          },
        });
        for (var i = 0; i < 5; i++) {
          t2.from(g(`#services div div:nth-of-type(${i})`), {
            x: 50,
            scrollTrigger: {
              trigger: `#services div div:nth-of-type(${i})`,
              start: "top 80%",
              end: "top 70%",
              scrub: 1,
            },
          });
          t2.from(g(`#services div div:nth-of-type(${i}) h2`), {
            y: 50,
            scrollTrigger: {
              trigger: `#services div div:nth-of-type(${i}) h2`,
              start: "top 80%",
              end: "top 70%",
              scrub: 1,
            },
          });
          t2.from(g(`#services div div:nth-of-type(${i}) p`), {
            y: 50,
            scrollTrigger: {
              trigger: `#services div div:nth-of-type(${i}) p`,
              start: "top 80%",
              end: "top 70%",
              scrub: 1,
            },
          });
        }
      })();

      const offer = (() => {
        t3.from(g("#offer img"), {
          scale: 1.5,
          scrollTrigger: {
            trigger: "#offer img",
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        })
          .from(g("#offer h2"), {
            x: -50,
            scrollTrigger: {
              trigger: "#offer h2",
              start: "top 80%",
              end: "top 70%",
              scrub: 1,
            },
          })
          .from(g("#offer p"), {
            y: 50,
            scrollTrigger: {
              trigger: "#offer p",
              start: "top 80%",
              end: "top 70%",
              scrub: 1,
            },
          })
          .from(g("#offer button"), {
            y: 50,
            scrollTrigger: {
              trigger: "#offer button",
              start: "top 80%",
              end: "top 70%",
              scrub: 1,
            },
          });
      })();
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className={styles.main} id="main" ref={ref}>
      <div id="hero" className={styles.hero}>
        <header id="header">
          <img id="logo" src="/logo.png" alt="" />
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

        <img id="vector" src="/vector.png" alt="" />

        <div className={styles.buttonContainer}>
          <button>get started</button>
          <img id="play" src="/play.png" alt="" />
        </div>
      </div>
      <div className={styles.people}>
        <img id="people" src="/people.png" alt="" />
      </div>

      <div className={styles.services} id={"services"}>
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

      <div id="offer" className={styles.offer}>
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

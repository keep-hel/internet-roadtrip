'use client'
import "./mainGenerator.css";
import Image from "next/image";
import MyButton2 from './mybutton2'
import Head from 'next/head'
import Link from "next/link";
import datas from './../data.json';
interface DataItem {
  h1: string;
  // 在这里添加你的数据对象中的其他属性
}
interface DatasObj {
  [key: string]: DataItem; // 或者更具体地指定键的类型
}

export default function Example() {
  const arr = [];
  const datasObj: DatasObj = datas
  for (const key in datasObj) {
    if (datasObj.hasOwnProperty(key)) {
      arr.unshift(key)
    }
  }
  const openPopup = () => {
    if (typeof window !== 'undefined') {
      window.open("https://neal.fun/internet-roadtrip/", "popupWindow", "width=1300,height=700");
    }
  }
  return (
    <div>
      <div className="main" id="games">
        <div className="left">
        </div>
      </div>
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-1PPX0HM5S3`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-1PPX0HM5S3');
              `,
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-1232219942277862"></meta>
      </Head>
      {/* <h2 className="order-tt tracking-tight">Games</h2> */}
      <div className="game slide-in-up float">
        <Image className="img" src="/game.png" alt="Internet Roadtrip" width={450} height={38} priority />
        <h1 className="h1-title text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" >Internet Roadtrip</h1>
        <div className="btn ripple focus-ring" onClick={() => openPopup()}>
          PLAY NOW!
        </div>
      </div>
      <div className="overview slide-in-up" id="overview">
        <h2 className="tt">
          Internet Roadtrip Overview
        </h2>
        {/* <div className="img-content">
          <Image className="img dark:invert" src="/game-content1.png" alt="Internet Roadtrip" width={450} height={38} priority />
          <Image className="img dark:invert" src="/game-content2.png" alt="Internet Roadtrip" width={450} height={38} priority />
        </div> */}
        <div>
          <div>Internet Roadtrip is a unique online interactive experience created by Neal Agarwal.</div>
          <div>It simulates a road trip, but unlike traditional travel, the route of this journey is entirely determined by online participants collectively.</div>
          <div>Users can experience the creativity and sense of exploration of the early internet.</div>
        </div>
        <h2 className="tt">
          How to Play Internet Roadtrip
        </h2>
        <div>
          <div>Visit [Neal.fun](https://neal.fun/internet-roadtrip/) to experience the project.</div>
          <div>Use the interactive steering wheel to vote on the direction the vehicle should go.</div>
          <div>Enjoy the unique journey collectively created by the community.</div>
          <div>You can also vote to switch the radio station.</div>
        </div>
        <h2 className="tt">
          Game Objectives
        </h2>
        <div>
          <div>Collective Decision-Making: Every ten seconds, online participants vote on the direction the virtual car should travel.</div>
          <div>Real-time Street View: The screen displays the street view of the car&apos;s current location, providing an immersive experience.</div>
          <div>Path Map: A map at the bottom shows the route the car has already traveled.</div>
          <div>Interactive Elements: You can also vote to change the virtual radio station, adding to the fun of the journey.</div>
          <div>Unpredictability: Since the route is determined by collective voting, each trip is unique and unpredictable.</div>
        </div>
        <div className="tt">
          Why You Should Try Internet Roadtrip
        </div>
        <div>
          <div>It recreates the fun and weirdness of the early internet, evoking a sense of the internet&apos;s initial excitement and exploration.</div>
          <div>It&apos;s a novel social experience, bringing people together to collectively create an ever-evolving journey.</div>
          <div>Its unpredictability and community-driven nature make it captivating, leaving players curious about what will happen next.</div>
          <div>It&apos;s simple yet engaging, allowing anyone to jump in and enjoy the experience immediately.</div>
          <div>So, Let&apos;s try this <MyButton2 /> game.</div>
        </div>

      </div>
      <h2 className="order-tt tracking-tight fade-in">Hot Games</h2>
      <div className="order">
        {
          arr.map((item, index) => (
            <Link key={index} href={{ pathname: item }}>
              <div className="game slide-in-up ripple" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="game-image-container">
                  <Image className="img" src={`/${item}.png`} alt={datasObj[item].h1} width={322} height={192} priority />
                </div>
                <div className="game-content-container">
                  <h3 className="game-tt">{datasObj[item].h1}</h3>
                  <div className="game-btn focus-ring">Play</div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>

      <div className="footer">
        <Link href={{ pathname: '/privacy-policy' }}>
          <div className="btn">Privacy Policy</div>
        </Link>
        <div className="line">|</div>
        <Link href={{ pathname: '/terms-of-service' }}>
          <div className="btn">Terms of Service</div>
        </Link>
      </div>
    </div>
  )
}
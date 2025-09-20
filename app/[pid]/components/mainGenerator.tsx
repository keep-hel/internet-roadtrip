'use client'
import "./mainGenerator.css";
import datas2 from './../../data.json';
import Image from "next/image";
import Link from "next/link";




interface OverviewItem {
  title: string;  // 明确 title 存在且为字符串
  txt: []
}

interface DataItem {
  h1: string;
  // 在这里添加你的数据对象中的其他属性
}
interface DatasObj {
  [key: string]: DataItem; // 或者更具体地指定键的类型
}



export default function Example({ datas }: { datas: { h1: string, introduction: string, link: string, overview: [] } }) {
  const arr = [];
  const datasObj: DatasObj = datas2
  for (const key in datasObj) {
    if (datasObj.hasOwnProperty(key)) {
      arr.unshift(key)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToAnchor = (anchorName: any) => {
    if (anchorName) {
      // 找到锚点
      const anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
  }
  return (
    <div>
      <div className="main">
        <div className="left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{datas.h1}</h1>
          <p className="mt-4 text-2xl text-gray-500">{datas.introduction}</p>
          <div className="btn-block" id="games">
            {/* <MyButton></MyButton> */}
            <button className="learn" onClick={() => scrollToAnchor("overview")}>Learn more <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </div>
      <h2 className="order-tt tracking-tight">Games</h2>
      <div className="game">
        <iframe className="game-iframe" src={datas.link} sandbox="allow-scripts allow-same-origin" allow="fullscreen" scrolling="no" loading="eager"></iframe>
      </div>
      <div className="overview" id="overview">
        {datas.overview.map((item: OverviewItem, index) => (
          <div key={index}>
            {/* <div>{item.title}</div> */}
            <h2 className="tt" >{item.title}</h2>
            {
              item.txt.map((items, idx) => (
                <div key={idx}>{items}</div>
              ))
            }
          </div>
        ))}
        So, Let&apos;s try this <span className="span-font" onClick={() => scrollToAnchor("games")}>{datas.h1}</span> game.
      </div>
      <h2 className="order-tt tracking-tight">Hot Game</h2>
      <div className="order">
        <div className="game2">
          <Link href={{ pathname: '/' }}>
            <Image className="img dark:invert" src={`/game.png`} alt={'Internet Roadtrip'} width={322} height={38} priority />
            <h3 className="game2-tt">Internet Roadtrip</h3>
            <div className="game2-btn">play</div>
          </Link>
        </div>
        {
          arr.map((item, index) => (
            <div className="game2" key={index}>
              <Link href={{ pathname: item }}>
                <Image className="img dark:invert" src={`/${item}.png`} alt={datasObj[item].h1} width={322} height={38} priority />
                <h3 className="game2-tt">{datasObj[item].h1}</h3>
                <div className="game2-btn">play</div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
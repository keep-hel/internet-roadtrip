'use client'
import "./mainGenerator.css";
import Image from "next/image";
import Link from "next/link";
import datas from '../../data.json';
import { useState, useEffect } from 'react';


interface DataItem {
  h1: string;
  // 在这里添加你的数据对象中的其他属性
}
interface DatasObj {
  [key: string]: DataItem; // 或者更具体地指定键的类型
}



export default function Example() {
  const arr: string[] = [];
  const datasObj: DatasObj = datas
  for (const key in datasObj) {
    if (datasObj.hasOwnProperty(key)) {
      arr.unshift(key)
    }
  }
  return (
    <div>
      <h2 className="hot-order-tt tracking-tight">Hot Games1</h2>
     
      <div className="order">
        {
          <Link href={{ pathname: '/' }} className="game3">
            <Image className="img dark:invert" src={`/game.png`} alt={'Internet Roadtrip'} width={322} height={38} priority />
            <h3 className="game3-tt">Internet Roadtrip</h3>
            <div className="game3-btn">play</div>
          </Link>
        }
        {
          arr.map((item, index) => (
            <Link href={{ pathname: item }} className="game3" key={index}>
              {/* <Link> */}
              <Image className="img dark:invert" src={`/${item}.png`} alt={datasObj[item].h1} width={322} height={38} priority />
              <h3 className="game3-tt">{datasObj[item].h1}</h3>
              <div className="game3-btn">play</div>
              {/* </Link> */}
            </Link>
          ))
        }
      </div>
      {/* <div className="pagination">
        <div className="pagination-start square">←</div>
        <div className={`pagination-num square ${pageNum+1==1 ? 'active-style' : ''}`} onClick={()=>next(pageNum+1==1?0:-1)}>{pageNum==0?1:pageNum}</div>
        <div className={`pagination-num square ${pageNum+1!=1 ? 'active-style' : ''}`} onClick={()=>next(pageNum+2==2?1:0)}>{pageNum==0?2:pageNum+1}</div>
        <div className={`pagination-num square ${pageNum+1==0 ? 'active-style' : ''}`}  onClick={()=>next(pageNum+3==3?2:1)}>{pageNum==0?3:pageNum+2}</div>
        <div className="pagination-end square" onClick={()=>next(1)}>→{pageNum}</div>
      </div> */}
      <h2 className="hot-order-tt tracking-tight">Hot Games</h2>
      <div className="hot-game-footer"></div>
    </div>
  )
}


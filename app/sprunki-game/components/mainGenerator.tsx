'use client'
import "./mainGenerator.css";
import Image from "next/image";
import Link from "next/link";
import datas from './data.json';


interface DataItem {
  h1: string;
  // 在这里添加你的数据对象中的其他属性
}
interface DatasObj {
  [key: string]: DataItem; // 或者更具体地指定键的类型
}



export default function Example() {
  const arr: string[] = [];
  const datasObj:DatasObj = datas
  for(const key in datasObj) {
    if (datasObj.hasOwnProperty(key)) {
      arr.unshift(key)
    }
  }
  // const [pageNum, setPageNum] = useState(0);
  // const [newArr, setNewArr] = useState(arr.slice(0, 8));
  // const next = (page: number) => {
  //     setPageNum(pageNum + page)
  // }
  // useEffect(() => {
  //   if(pageNum) {
  //     if (arr.slice((pageNum+1)*8-8, (pageNum+1)*8).length) {
  //       setNewArr(arr.slice((pageNum+1)*8-8, (pageNum+1)*8))
  //     }
  //   } else {
  //     setNewArr(arr.slice(0, 8));
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pageNum]);
  

  return (
    <div>
      <h2 className="order-tt tracking-tight fade-in">Sprunki Game</h2>
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
      
      {/* 查看更多按钮 */}
      <div className="more-games-container">
        <Link href="/allHotGame">
          <div className="more-games-btn focus-ring">
            查看更多游戏
            <span className="arrow">→</span>
          </div>
        </Link>
      </div>

      {/* 页脚 */}
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


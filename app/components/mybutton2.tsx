"use client"
import "./mainGenerator.css";
export default function MyButton2() {
    const scrollToAnchor = (anchorName: any) => {
        if (anchorName) {
            // 找到锚点
            const anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
      }
  return <span className="span-font" onClick={() => scrollToAnchor("games")}>Internet Roadtrip</span>;
}

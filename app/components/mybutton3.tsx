"use client"
import "./mainGenerator.css";
export default function MyButton() {
    const scrollToAnchor = (anchorName: any) => {
        // window.open('https://neal.fun/stimulation-clicker/', 'newwindow', 'height=800, width=1400, top=0,left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
        if (anchorName) {
            // 找到锚点
            const anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
      }
  return <button className="start" onClick={() => scrollToAnchor("games")}>Strat Games <span aria-hidden="true"></span></button>;
}

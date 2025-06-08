import MainGenerator from "./components/mainGenerator";  
import HeaderNav from "./components/headerNav";  
import datas from './../data.json';  
   
interface DataItem {
  h1: string;
  introduction: string;
}

interface DatasObj {
  [key: string]: DataItem; // 或者更具体地指定键的类型
}

   
export default async function Page({   
  params,   
}: {   
  params: Promise<{ pid: never }>  
}) {  
  const { pid } = await params  
  const data = datas[pid] 
  return <div>
    <HeaderNav />  
    <MainGenerator datas={data} />  
  </div>  
}  


export async function generateMetadata({
  params,
}: {
  params: Promise<{ pid: never }>  
}) {
  const { pid } = await params;
  const data:DatasObj = datas[pid];

  return {
    title: {
      absolute: `Play ${data.h1} On Internet Roadtrip Game`, 
    },
    description: data.introduction, 
  };
}
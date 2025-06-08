import React from 'react';
import { ProductListWithPagination } from './ProductListWithPagination'; // 导入你创建的分页组件
import { ALL_ITEMS } from '@/lib/data'; // 导入你的数据
import datas from '../../data.json';

interface DataItem {
  h1: string;
  // 在这里添加你的数据对象中的其他属性
}
interface DatasObj {
  [key: string]: DataItem; // 或者更具体地指定键的类型
}


export default function HomePage() {
  const arr: DataItem[] = [];
  const datasObj: DatasObj = datas
  for (const key in datasObj) {
    if (datasObj.hasOwnProperty(key)) {
      arr.unshift({h1:key})
    }
  }
  arr.unshift({h1:'home-page'})
  console.log(ALL_ITEMS)
  console.log(arr)
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h2 className="hot-order-tt tracking-tight">Hot Games</h2>
      <div className="max-w-7xl mx-auto px-4">
        {/* 使用你创建的分页组件，并传入数据 */}
        <ProductListWithPagination
          items={arr}
          itemsPerPage={12} // 可选：每页显示8项，不传则默认为10
        />
      </div>
    </div>
  );
}
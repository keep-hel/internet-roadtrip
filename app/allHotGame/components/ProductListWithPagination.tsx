// components/ProductListWithPagination.tsx
"use client"; // 因为这里使用了 useState

import React, { useState, useMemo } from 'react';
import "./mainGenerator.css";
import Image from "next/image";
import Link from "next/link";
import datas from '../../data.json';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // 导入 Shadcn/ui 的分页组件

interface DataItem {
  h1: string;
  // 在这里添加你的数据对象中的其他属性
}
interface DatasObj {
  [key: string]: DataItem; // 或者更具体地指定键的类型
}

interface ProductListWithPaginationProps {
  items: DataItem[]; // 接收要分页的原始数据数组
  itemsPerPage?: number; // 每页显示多少项，可选，默认为10
}



export function ProductListWithPagination({ items, itemsPerPage = 10 }: ProductListWithPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1); // 当前页码，默认为第一页

  // 计算总页数
  const totalPages = useMemo(() => {
    return Math.ceil(items.length / itemsPerPage);
  }, [items.length, itemsPerPage]);

  // 计算当前页数据的起始和结束索引
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // 获取当前页要展示的数据
  const currentItems = useMemo(() => {
    return items.slice(startIndex, endIndex);
  }, [items, startIndex, endIndex]);
  console.log(currentItems, 'currentItems')
  // 处理页码点击事件
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Optional: Scroll to top when page changes for better UX
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 生成显示页码的数组（包含省略号逻辑）
  const getPageNumbers = () => {
    const pageNumbers: (number | "ellipsis")[] = [];
    const siblingCount = 1; // 当前页码两侧显示的页数

    // 添加第一页
    if (totalPages > 0) { // 确保有页面
      pageNumbers.push(1);
    }

    // 处理左侧省略号
    if (currentPage > siblingCount + 2 && totalPages > 2 * siblingCount + 3) {
      pageNumbers.push("ellipsis");
    }

    // 添加当前页码附近的页
    for (let i = Math.max(2, currentPage - siblingCount); i <= Math.min(totalPages - 1, currentPage + siblingCount); i++) {
      pageNumbers.push(i);
    }

    // 处理右侧省略号
    if (currentPage < totalPages - siblingCount - 1 && totalPages > 2 * siblingCount + 3) {
      if (!pageNumbers.includes(totalPages - 1) && totalPages > 1) { // 避免重复添加
        pageNumbers.push("ellipsis");
      }
    }


    // 添加最后一页（如果不是第一页或已经被包含）
    if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
      pageNumbers.push(totalPages);
    }

    // 清理可能导致重复省略号的问题
    const cleanedPageNumbers: (number | "ellipsis")[] = [];
    pageNumbers.forEach((p, index) => {
      if (p === "ellipsis" && index > 0 && pageNumbers[index - 1] === "ellipsis") {
        // Do nothing, skip duplicate ellipsis
      } else {
        cleanedPageNumbers.push(p);
      }
    });

    return cleanedPageNumbers;
  };

  const pageNumbersToShow = getPageNumbers();
  const arr: string[] = [];
  const datasObj: DatasObj = datas
  for (const key in datasObj) {
    if (datasObj.hasOwnProperty(key)) {
      arr.unshift(key)
    }
  }
  console.log(arr, 'arr', datasObj)

  // 如果总页数小于等于1，则不显示分页组件
  if (totalPages <= 1) {
    console.log()
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        {currentItems.length === 0 ? (
          <p className="text-gray-600 text-center">没有找到数据。</p>
        ) : (
          <ul className="space-y-3">
            {currentItems.map((item, index) => (
              <li key={index} className="border-b pb-2 last:border-b-0 text-gray-800">
                {item.h1}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* 数据展示区域 */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        {currentItems.length === 0 ? (
          <p className="text-gray-600 text-center">没有找到数据。</p>
        ) : (
          <div className='order'>

            {
              currentItems.map((item, index) => (
                item.h1 !== "home-page" ? (
                  <Link href={{ pathname: item.h1 }} className="game3" key={index}>
                    {/* <Link> */}
                    <Image className="img dark:invert" src={`/${item.h1}.png`} alt={datasObj[item.h1].h1} width={322} height={38} priority />
                    <h3 className="game3-tt">{datasObj[item.h1].h1}</h3>
                    <div className="game3-btn">play</div>
                    {/* </Link> */}
                  </Link>
                ) : (
                  <Link href={{ pathname: '/' }} className="game3" key={index}>
                    <Image className="img dark:invert" src={`/game.png`} alt={'Internet Roadtrip'} width={322} height={38} priority />
                    <h3 className="game3-tt">Internet Roadtrip</h3>
                    <div className="game3-btn">play</div>
                  </Link>
                )

              ))
            }
          </div>
        )}
      </div>

      {/* 分页控制区域 - 使用 Shadcn/ui 组件 */}
      <Pagination>
        <PaginationContent className='botton-btn'>
          {/* 上一页按钮 */}
          <PaginationItem className='botton-btn'>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              // href="#" // href 可以是一个占位符，或者不设置
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
            />
          </PaginationItem>

          {/* 页码按钮 */}
          {pageNumbersToShow.map((pageNumber, index) => (
            <React.Fragment key={index}>
              {pageNumber === "ellipsis" ? (
                <PaginationItem className='botton-btn'>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem className='botton-btn'>
                  <PaginationLink
                    onClick={() => handlePageChange(pageNumber as number)}
                    isActive={currentPage === pageNumber}
                  // href="#" // href 可以是一个占位符，或者不设置
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )}
            </React.Fragment>
          ))}

          {/* 下一页按钮 */}
          <PaginationItem className='botton-btn'>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              // href="#" // href 可以是一个占位符，或者不设置
              aria-disabled={currentPage === totalPages}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
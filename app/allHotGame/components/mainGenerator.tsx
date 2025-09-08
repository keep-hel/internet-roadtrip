'use client'
import "./mainGenerator.css";
import Image from "next/image";
import Link from "next/link";
import datas from '../../data.json';
import { useState, useMemo } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface DataItem {
  h1: string;
}

interface DatasObj {
  [key: string]: DataItem;
}

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 3列×4行
  
  const arr: string[] = [];
  const datasObj: DatasObj = datas;
  
  for (const key in datasObj) {
    if (datasObj.hasOwnProperty(key)) {
      arr.unshift(key);
    }
  }
  
  // 计算总页数
  const totalPages = useMemo(() => {
    return Math.ceil(arr.length / itemsPerPage);
  }, [arr.length, itemsPerPage]);
  
  // 计算当前页数据
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = useMemo(() => {
    return arr.slice(startIndex, endIndex);
  }, [arr, startIndex, endIndex]);
  
  // 处理页码点击事件
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // 生成显示页码的数组
  const getPageNumbers = () => {
    const pageNumbers: (number | "ellipsis")[] = [];
    const siblingCount = 1;
    
    if (totalPages > 0) {
      pageNumbers.push(1);
    }
    
    if (currentPage > siblingCount + 2 && totalPages > 2 * siblingCount + 3) {
      pageNumbers.push("ellipsis");
    }
    
    for (let i = Math.max(2, currentPage - siblingCount); i <= Math.min(totalPages - 1, currentPage + siblingCount); i++) {
      pageNumbers.push(i);
    }
    
    if (currentPage < totalPages - siblingCount - 1 && totalPages > 2 * siblingCount + 3) {
      if (!pageNumbers.includes(totalPages - 1) && totalPages > 1) {
        pageNumbers.push("ellipsis");
      }
    }
    
    if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  const pageNumbersToShow = getPageNumbers();
  
  return (
    <div>
      <h2 className="order-tt tracking-tight fade-in">Hot Games</h2>
      
      {/* 游戏卡片展示区域 */}
      <div className="order">
        {
          currentItems.map((item, index) => (
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
      
      {/* 分页组件 */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <Pagination>
            <PaginationContent className="pagination-content">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "pagination-btn"}
                />
              </PaginationItem>
              
              {pageNumbersToShow.map((pageNumber, index) => (
                pageNumber === "ellipsis" ? (
                  <PaginationItem key={index}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => handlePageChange(pageNumber as number)}
                      isActive={currentPage === pageNumber}
                      className="pagination-btn"
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              ))}
              
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "pagination-btn"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
      
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
  );
}
// lib/data.ts

export const ALL_ITEMS = Array.from({ length: 75 }, (_, i) => ({
  id: i + 1,
  name: `产品名称 ${i + 1}`,
  description: `这是产品 ${i + 1} 的详细描述。`,
}));

// 你也可以定义一个更复杂的类型
export type ItemType = typeof ALL_ITEMS[0];
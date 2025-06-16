"use client";

import { invoices } from "@/lib/data";
import { Table } from "antd";

const antColumns = [
  {
    title: "Invoice",
    dataIndex: "invoice",
    key: "invoice",
  },
  {
    title: "PaymentStatus",
    dataIndex: "paymentStatus",
    key: "paymentStatus",
  },
  {
    title: "TotalAmount",
    dataIndex: "totalAmount",
    key: "totalAmount",
  },
  {
    title: "PaymentMethod",
    dataIndex: "paymentMethod",
    key: "paymentMethod",
  },
];

export default function AntdTable() {
  return (
    <Table columns={antColumns} dataSource={invoices} footer={() => "Total"} />
  );
}

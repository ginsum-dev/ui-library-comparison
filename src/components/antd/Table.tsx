"use client";

import { invoices } from "@/lib/data";
import { Button, Table, Popover } from "antd";
import { MoreHorizontal } from "lucide-react";

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
  {
    title: "",
    dataIndex: "",
    key: "",
    render: () => (
      <Popover
        content={
          <div className="flex flex-col w-[100px] gap-2">
            <div>COPY</div>
            <div>DELETE</div>
          </div>
        }
        placement="bottom"
        trigger="click"
      >
        <Button type="link">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </Popover>
    ),
  },
];

export default function AntdTable() {
  return (
    <Table
      columns={antColumns}
      dataSource={invoices}
      footer={() => <div>Total</div>}
    />
  );
}

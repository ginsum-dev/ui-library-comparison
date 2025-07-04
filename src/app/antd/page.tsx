import { Button, Input, Select } from "antd";
import { selectList } from "@/lib/data";
import AntdTable from "@/components/antd/Table";

export default function AntdPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <span className="flex justify-center text-2xl font-bold">Ant Design</span>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Input placeholder="Email" style={{ width: "240px" }} />
          <Button type="primary">Button</Button>
        </div>
        <div className="flex gap-2">
          <Select
            defaultValue="Select a fruit"
            style={{ width: 180 }}
            options={selectList}
          />
          <Button>Button</Button>
        </div>
      </div>

      <div>
        <AntdTable />
      </div>
    </div>
  );
}

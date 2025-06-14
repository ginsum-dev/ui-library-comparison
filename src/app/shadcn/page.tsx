import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectList } from "@/lib/data";

export default function ShadcnPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex gap-2">
        <Input type="email" placeholder="Email" className="w-60" />
        <Button variant="outline">Button</Button>
      </div>
      <div className="flex gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              {selectList.map(({ value, label }) => (
                <SelectItem value={value}>{label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="outline">Button</Button>
      </div>
    </div>
  );
}

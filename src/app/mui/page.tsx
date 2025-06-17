import MUISelect from "@/components/mui/Select";
import MuiTable from "@/components/mui/Table";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function MUIPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
          />
          <Button variant="contained">Button</Button>
        </div>
        <div className="flex gap-2">
          <MUISelect />
          <Button variant="outlined">Button</Button>
        </div>
      </div>

      <div>
        <MuiTable />
      </div>
    </div>
  );
}

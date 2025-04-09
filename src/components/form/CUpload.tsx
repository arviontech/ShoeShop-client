import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

interface TInputProps {
  name: string;
  className?: string;
  label: string;
}

const CUpload = ({ className, name, label }: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <>
          <Label className="text-md text-gray-600" htmlFor={name}>
            {label}
          </Label>
          <Input
            type="file"
            {...field}
            className={cn(
              "w-full h-[45px] px-3 py-2 mt-2  rounded-md   focus:ring-1 focus:ring-teal-500 ",
              className
            )}
            value={value?.fileName}
            onChange={(e) => onChange(e.target.files?.[0])}
          />
        </>
      )}
    />
  );
};

export default CUpload;

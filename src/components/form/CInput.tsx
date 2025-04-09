import { Controller } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface TInputProps {
  name: string;
  type?: string;
  label: string;
  className?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
}

const CInput = ({
  name,
  type = "text",
  value,
  label,
  disabled,
  className,
  placeholder,
}: TInputProps) => {
  return (
    <Controller
      name={name}
      defaultValue={value || ""}
      render={({ field, fieldState: { error } }) => (
        <>
          <Label className="text-md text-gray-600" htmlFor={name}>
            {label}
          </Label>
          <Input
            disabled={disabled}
            {...field}
            type={type}
            placeholder={placeholder}
            className={cn(
              "w-full h-[45px] px-3 py-2 rounded-md border border-gray-300",
              "focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-teal-500 mt-1",
              className
            )}
          />
          {error && <p className="text-red-500">{error.message}</p>}
        </>
      )}
    />
  );
};

export default CInput;

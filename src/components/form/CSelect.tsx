import { Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

interface TSelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const CSelect = ({
  name,
  label,
  options,
  placeholder = "Select an option",
  className,
  required = false,
}: TSelectProps) => {
  return (
    <Controller
      name={name}
      defaultValue={""}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && (
            <Label htmlFor={name} className="text-sm text-gray-600">
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
          )}
          <select
            id={name}
            onChange={onChange}
            value={value}
            ref={ref}
            className={cn(
              "w-full h-[45px] px-3 py-2  rounded-md focus:outline-none border-gray-300 focus:ring-1 focus:ring-teal-500 border shadow-sm",
              className
            )}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default CSelect;

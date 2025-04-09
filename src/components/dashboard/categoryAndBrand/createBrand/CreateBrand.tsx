/* eslint-disable prefer-const */
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import CSelect from "@/components/form/CSelect";
import { Button } from "@/components/ui/button";
import { useCreateBrandForProductMutation } from "@/redux/features/brand/brand.api";
import { brandOptions } from "@/utils/selectOption";
import { Camera, Loader, X } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateBrand = () => {
  const [imageFile, setImageFile] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const [createBrandForProduct, { isLoading }] =
    useCreateBrandForProductMutation();

  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    console.log(data);

    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    for (let image of imageFile) {
      formData.append("itemImage", image);
    }

    try {
      const res = await createBrandForProduct(formData);
      console.log(res);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      toast.error("Create Failed");
      console.log(error);
    }
  };

  //! Image handle
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);

      setImageFile((prev) => [...prev, ...newFiles]);

      newFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          setImagePreviews((prev) => [...prev, reader.result as string]);
        };

        reader.readAsDataURL(file);
      });
    }
  };

  //! Remove image
  const handleRemoveImage = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImageFile((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CForm onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Image section */}
        <div className="col-span-3 relative">
          <label
            className="border border-dashed border-gray-400 flex items-center justify-center h-[200px] rounded-lg pt-8 text-gray-400 cursor-pointer"
            htmlFor="brandImage"
          >
            Upload Brand Image
          </label>
          <input
            onChange={handleImageChange}
            className="hidden"
            multiple
            type="file"
            id="brandImage"
          />
          <div
            className="absolute top-7 left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer"
            onClick={() => document.getElementById("brandImage")?.click()}
          >
            <Camera
              strokeWidth={0.8}
              strokeDasharray={"4 1"}
              className="w-14 h-14 text-gray-400"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {imagePreviews.length > 0 &&
              imagePreviews.map((imgDataUrl, index) => (
                <div
                  key={index}
                  className="relative border border-dashed border-gray-400 w-[105px] p-2 rounded-md"
                >
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-red-200"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                  <img
                    src={imgDataUrl}
                    alt="preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* 2nd column */}
        <div className="col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <CInput
                name="brandName"
                label="Brand Name"
                placeholder="Enter Brand Name"
              />
            </div>

            <div className="md:col-span-1">
              <CSelect
                name="brandType"
                label="Select Brand Type"
                options={brandOptions}
              />
            </div>
          </div>
          <div className="mt-5">
            <Button
              type="submit"
              className="h-[42px] w-[120px] bg-[#08a892] text-white rounded hover:bg-blue-600 transition-colors"
            >
              {isLoading ? (
                <Loader className="animate-spin text-yellow-300" />
              ) : (
                "Create Brand"
              )}
            </Button>
          </div>
        </div>
      </div>
    </CForm>
  );
};

export default CreateBrand;

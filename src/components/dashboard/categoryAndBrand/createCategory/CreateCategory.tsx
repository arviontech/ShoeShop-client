/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import { Button } from "@/components/ui/button";
import { useCreateCategoryMutation } from "@/redux/features/category/category.api";
import { Camera, X } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateCategory = () => {
  const [imageFile, setImageFile] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const [createCategory] = useCreateCategoryMutation();

  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    let metaKey = [];
    let subCategory = [];

    if (data.categoryMetaKey) {
      //@ts-ignore
      metaKey = data.categoryMetaKey.split(",");
    }

    if (data.subCategory) {
      //@ts-ignore
      subCategory = data.subCategory.split(",").map((item) => item.trim());
    }

    const categoryData = {
      ...data,
      subCategory: subCategory,
      categoryMetaKey: metaKey,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(categoryData));
    for (let image of imageFile) {
      formData.append("itemImage", image);
    }

    try {
      const res = await createCategory(formData);
      console.log(res);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data?.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
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
            htmlFor="image"
          >
            Upload Product Image
          </label>
          <input
            onChange={handleImageChange}
            className="hidden"
            multiple
            type="file"
            id="image"
          />
          <div
            className="absolute top-7 left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer"
            onClick={() => document.getElementById("image")?.click()}
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
                name="categoryName"
                label="Category Name"
                placeholder="Enter Category Name"
              />
            </div>

            <div className="md:col-span-1">
              <CInput
                name="categoryMetaKey"
                label="Category Meta Key"
                placeholder="Enter Category Meta Key"
              />
            </div>

            <div className="md:col-span-1">
              <CInput
                name="subCategory"
                label="Sub Category (Optional)"
                placeholder="Sub Category (Optional)"
              />
            </div>
          </div>
          <div className="mt-5">
            <Button
              type="submit"
              className="h-[42px] bg-[#08a892] text-white rounded hover:bg-blue-600 transition-colors"
            >
              Create category
            </Button>
          </div>
        </div>
      </div>

      {/* Upload Buttons */}
    </CForm>
  );
};

export default CreateCategory;

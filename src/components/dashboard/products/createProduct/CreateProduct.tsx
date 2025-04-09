/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import CSelect from "@/components/form/CSelect";
import Loading from "@/components/loading/Loading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGetAllBrandQuery } from "@/redux/features/brand/brand.api";
import { useGetAllCategoryQuery } from "@/redux/features/category/category.api";
import { useCreateProductMutation } from "@/redux/features/product/productApi";
import { Camera, X } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { toast } from "sonner";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const CreateProduct = () => {
  const [imageFile, setImageFile] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const { data: category, isLoading } = useGetAllCategoryQuery({});
  const { data: brand, isLoading: isBrandLoading } = useGetAllBrandQuery({});
  const [createProduct, { isLoading: isCreateLoading }] =
    useCreateProductMutation();

  const categoryOption = category?.data?.result?.map((item: any) => ({
    value: item._id,
    label: item.categoryName,
  }));

  const brandOption = brand?.data?.map((item: any) => ({
    value: item._id,
    label: item.brandName,
  }));

  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    const { price, costPrice, stockQuantity, ...payload } = data;
    const productData = {
      ...payload,
      price: Number(price),
      costPrice: Number(costPrice),
      stockQuantity: Number(stockQuantity),
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    console.log(productData, imageFile);
    const formData = new FormData();
    formData.append("data", JSON.stringify(productData));
    for (let image of imageFile) {
      formData.append("itemImage", image);
    }

    try {
      const res = await createProduct(formData).unwrap();
      console.log(res);
      if (res?.success === true) {
        toast.success(res?.message);
      }
    } catch (error) {
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

  // Handle SunEditor onBlur
  const handleBlur = (_event: any, editorContents: string) => {
    setDescription(editorContents);
  };

  return (
    <>
      {isCreateLoading ? (
        <Loading />
      ) : (
        <CForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Image section */}
            <div className="col-span-3 relative">
              <label
                className="border border-dashed border-gray-400 flex items-center justify-center h-[200px] rounded-lg pt-8 text-gray-400 cursor-pointer"
                htmlFor="image"
              >
                Upload Product Images
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
                <Camera className="w-14 h-14 text-gray-400" />
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <CInput
                    name="name"
                    label="Product Name"
                    placeholder="Enter Product Name"
                  />
                </div>
                <div className="md:col-span-1">
                  <CInput name="slug" label="Slug" placeholder="Enter Slug" />
                </div>
                <div className="md:col-span-1">
                  <CInput name="sku" label="SKU" placeholder="Enter SKU" />
                </div>
                <div className="md:col-span-1">
                  <CInput
                    name="price"
                    label="Price"
                    placeholder="Enter Price"
                  />
                </div>
                <div className="md:col-span-1">
                  <CInput
                    name="costPrice"
                    label="Cost Price"
                    placeholder="Enter Cost Price"
                  />
                </div>
                <div className="md:col-span-1">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <CSelect
                      name="category"
                      label="Category"
                      options={categoryOption}
                      placeholder="Select Category"
                    />
                  )}
                </div>
                <div className="md:col-span-1">
                  {isBrandLoading ? (
                    <Loading />
                  ) : (
                    <CSelect
                      name="brand"
                      label="Brand (Optional)"
                      options={brandOption}
                    />
                  )}
                </div>
                <div className="md:col-span-1">
                  <CInput
                    name="stockQuantity"
                    label="Stock Quantity"
                    placeholder="Enter Stock Quantity"
                  />
                </div>
                <div className="md:col-span-1">
                  <CSelect
                    name="status"
                    label="Status"
                    options={[
                      { value: "active", label: "Active" },
                      { value: "inactive", label: "Inactive" },
                    ]}
                  />
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="tags">Tags</label>
                  <input
                    name="tags"
                    id="tags"
                    onBlur={(e) => setTags(e.target.value)}
                    placeholder="Enter Tags (comma-separated)"
                    className={cn(
                      "w-full h-[45px] px-3 py-2 rounded-md border border-gray-300",
                      "focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-teal-500 mt-1"
                    )}
                  />
                </div>
              </div>
              {/* Description Section */}
              <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <SunEditor
                  onBlur={handleBlur}
                  setDefaultStyle="height: 300px"
                />
              </div>
              {/* Upload Buttons */}
              <div className="mt-4 ">
                <Button
                  type="submit"
                  className="h-[42px] bg-[#08a892] text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Create Product
                </Button>
              </div>
            </div>
          </div>
        </CForm>
      )}
    </>
  );
};

export default CreateProduct;

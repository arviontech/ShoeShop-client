/* eslint-disable prefer-const */
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import Loading from "@/components/loading/Loading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateCategoryForProductMutation } from "@/redux/features/category/category.api";
import { SquarePen } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const UpdateCategory = ({ id }: { id: string }) => {
  const [imageFile, setImageFile] = useState<File[] | []>([]);
  const [updateCategoryForProduct, { isLoading }] =
    useUpdateCategoryForProductMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { categoryName, categoryMetaKey, subCategories } = data;

    const subCategoryforProduct = subCategories
      .split(",")
      .map((item: string) => item.trim());
    const metaKey = categoryMetaKey
      .split(",")
      .map((item: string) => item.trim());

    const categoryData = {
      ...(categoryName !== "" && { categoryName: categoryName }),
      ...(subCategories !== "" && { subCategory: subCategoryforProduct }),
      ...(categoryMetaKey !== "" && { categoryMetaKey: metaKey }),
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(categoryData));
    if (imageFile.length > 0) {
      for (let image of imageFile) {
        formData.append("itemImage", image); // Append each file
      }
    }

    try {
      const res = await updateCategoryForProduct({ id, formData });
      console.log(res);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  // Handle file input change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files); // Convert FileList to array
      setImageFile(newFiles); // Update state with the new files
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-600  w-[20px] rounded">
            <SquarePen />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>
              Both are optional fields. You can changes them at any time.
            </DialogDescription>
          </DialogHeader>
          <CForm onSubmit={onSubmit}>
            <div className="flex flex-col gap-4 py-4">
              <div className="col-span-3 relative">
                <label htmlFor="image">Upload Category Image</label>
                <input
                  onChange={handleImageChange}
                  className="mt-2"
                  multiple // Allow multiple files
                  type="file"
                  id="image"
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-3 w-full">
                <div className="grid grid-cols-1 items-center gap-1">
                  <CInput name="categoryName" label="Category Name" />
                </div>
                <div className="grid grid-cols-1 items-center gap-1">
                  <CInput name="subCategories" label="Sub Category" />
                </div>
                <div className="grid grid-cols-1 items-center gap-1">
                  <CInput name="categoryMetaKey" label="Category Meta Key" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button className="bg-teal-500" type="submit">
                  {isLoading ? <Loading /> : "Save changes"}
                </Button>
              </DialogClose>
            </DialogFooter>
          </CForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateCategory;

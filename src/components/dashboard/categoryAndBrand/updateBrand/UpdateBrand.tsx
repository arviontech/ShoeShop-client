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
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const UpdateBrand = ({ id }: { id: string }) => {
  const [updateCategoryForProduct, { isLoading }] =
    useUpdateCategoryForProductMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { categoryMetaKey, subCategories } = data;

    const subCategoryforProduct = subCategories
      .split(",")
      .map((item: string) => item.trim());
    const metaKey = categoryMetaKey
      .split(",")
      .map((item: string) => item.trim());

    const categoryData = {
      id: id,
      option: {
        ...(subCategories !== "" && { subCategory: subCategoryforProduct }),
        ...(categoryMetaKey !== "" && { categoryMetaKey: metaKey }),
      },
    };
    try {
      const res = await updateCategoryForProduct(categoryData).unwrap();
      if (res?.statusCode === 200) {
        toast?.success(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-600">
            <SquarePen />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>
              Both are optional fields. You can changes them at any time.
            </DialogDescription>
          </DialogHeader>
          <CForm onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 items-center gap-1">
                <CInput name="subCategories" label="Sub Category" />
              </div>
              <div className="grid grid-cols-1 items-center gap-1">
                <CInput name="categoryMetaKey" label="Category Meta Key" />
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

export default UpdateBrand;

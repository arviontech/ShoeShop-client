import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateCategoryHeadMutation } from "@/redux/features/category/category.api";
import { SquarePen } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const UpdateCategoryHead = ({ id }: { id: string }) => {
  const [updateCategoryHead, { isLoading }] = useUpdateCategoryHeadMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await updateCategoryHead({ id, data });
      console.log(res);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-500 w-[20px] hover:bg-blue-600">
            <SquarePen className=" h-8 w-8 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Category Head</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>
            <CForm onSubmit={onSubmit}>
              <div>
                <CInput
                  label="Category Head"
                  name="categoryFieldName"
                  placeholder="Category Head"
                  type="text"
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 w-[50px] rounded h-[30px] mt-2"
                >
                  {isLoading ? (
                    <span className="loading loading-spinner text-white"></span>
                  ) : (
                    "Edit"
                  )}
                </Button>
              </DialogFooter>
            </CForm>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateCategoryHead;

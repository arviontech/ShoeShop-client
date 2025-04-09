import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import { Button } from "@/components/ui/button";
import { useCreateCategoryHeadMutation } from "@/redux/features/category/category.api";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CategoryHead = () => {
  const [createCategoryHead, { isLoading }] = useCreateCategoryHeadMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await createCategoryHead(data).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md border border-gray-200 my-5">
      <CForm onSubmit={onSubmit}>
        <div>
          <CInput
            name="categoryFieldName"
            label="Category Field Name"
            placeholder="Category Field Name"
          />
        </div>
        <div className="mt-5">
          <Button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 w-[70px] rounded"
          >
            {isLoading ? (
              <span className="loading loading-spinner text-white"></span>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </CForm>
    </div>
  );
};

export default CategoryHead;

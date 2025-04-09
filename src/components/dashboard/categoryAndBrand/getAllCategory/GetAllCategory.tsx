/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteCategoryMutation,
  useGetAllCategoryHeadQuery,
  useGetAllCategoryQuery,
} from "@/redux/features/category/category.api";
import { TableCell, TableRow } from "@/components/ui/table";
import TableForDashboard from "@/components/table/TableForDashboard";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Loading from "@/components/loading/Loading";
import { Badge } from "@/components/ui/badge";
import UpdateCategory from "../updateCategory/UpdateCategory";
import { toast } from "sonner";

const GetAllCategory = () => {
  const { data: categoryData, isLoading } = useGetAllCategoryQuery({});
  const [deleteCategory, { isLoading: isDeleteLoading }] =
    useDeleteCategoryMutation();

  const { data: categoryHeadData } = useGetAllCategoryHeadQuery({});

  const handleSoftDelete = async (id: string) => {
    try {
      const res = await deleteCategory(id).unwrap();
      if (res?.statusCode === 200) {
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Delete Failed");
      console.log(error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {categoryData?.data?.result?.length > 0 ? (
            <TableForDashboard tableHead={categoryHeadData?.data}>
              {categoryData?.data?.result?.map((item: any, index: number) => (
                <TableRow key={item._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={item?.categoryImage[0]}
                      alt={item?.categoryName}
                      className="w-10 h-10 rounded-full"
                    />
                  </TableCell>
                  <TableCell>{item?.categoryName}</TableCell>
                  <TableCell>{item?.categoryMetaKey.join(",")}</TableCell>
                  <TableCell>{item?.subCategory.join(", ")}</TableCell>
                  <TableCell>
                    {item?.isDeleted === false ? (
                      <Badge className="bg-green-500">Active</Badge>
                    ) : (
                      <Badge className="bg-rose-500">Inactive</Badge>
                    )}
                  </TableCell>
                  <TableCell className="flex items-center gap-4">
                    <UpdateCategory id={item?._id} />
                    <Button
                      onClick={() => handleSoftDelete(item?._id)}
                      className="bg-rose-600  w-[20px] rounded"
                    >
                      {isDeleteLoading ? <Loading /> : <Trash2 />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableForDashboard>
          ) : (
            <p className="text-center text-rose-400">No Category Found</p>
          )}
        </>
      )}
    </div>
  );
};

export default GetAllCategory;

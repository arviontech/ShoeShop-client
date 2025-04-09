import {
  useDeleteCategoryHeadMutation,
  useGetAllCategoryHeadQuery,
} from "@/redux/features/category/category.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ICategoryHead } from "@/types";
import UpdateCategoryHead from "../updateCategoryHead/UpdateCategoryHead";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const GetAllCategoryHead = () => {
  const [deletingId, setDeletingId] = useState<string | null>(null); // Track the ID of the item being deleted
  const { data: categoryHeadData, isLoading: isCategoryHeadLoading } =
    useGetAllCategoryHeadQuery({});

  const [deleteCategoryHead] = useDeleteCategoryHeadMutation();

  const hasData = categoryHeadData?.data?.length > 0;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id); // Set the ID of the item being deleted
      const res = await deleteCategoryHead(id);
      if (res?.data?.statusCode === 200) {
        toast.success(res.data?.message);
      }
    } catch (error) {
      toast.error("Delete Failed");
      console.log(error);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      {isCategoryHeadLoading ? (
        <div className="flex justify-center p-4">
          <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <div className="bg-white rounded-sm p-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SL NO.</TableHead>
                <TableHead>Category Field Name</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hasData ? (
                categoryHeadData?.data?.map(
                  (item: ICategoryHead, index: number) => (
                    <TableRow key={item._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.categoryFieldName}</TableCell>
                      <TableCell>{formatDate(item.createdAt)}</TableCell>
                      <TableCell className="flex justify-end gap-3">
                        <UpdateCategoryHead id={item._id} />
                        <Button
                          onClick={() => handleDelete(item._id)}
                          className="bg-rose-500 w-[20px] hover:bg-rose-600"
                          disabled={deletingId === item._id} // Disable the button if this item is being deleted
                        >
                          {deletingId === item._id ? (
                            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                          ) : (
                            <Trash2 className="h-8 w-8 text-white" />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center py-6 text-gray-500"
                  >
                    No category data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default GetAllCategoryHead;

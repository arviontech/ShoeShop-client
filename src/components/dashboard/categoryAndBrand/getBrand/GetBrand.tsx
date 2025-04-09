/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/loading/Loading";
import TableForDashboard from "@/components/table/TableForDashboard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  useDeleteBrandMutation,
  useGetAllBrandQuery,
} from "@/redux/features/brand/brand.api";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import UpdateBrand from "../updateBrand/UpdateBrand";

const tableHead = [
  "SL NO",
  "Brand Image",
  "Brand Name",
  "Brand Type",
  "Status",
  "Action",
];

const GetBrand = () => {
  const { data: brandData, isLoading } = useGetAllBrandQuery({});
  const [deleteBrand, { isLoading: isDeleteLoading }] =
    useDeleteBrandMutation();

  const handleDeleted = async (id: string) => {
    try {
      const res = await deleteBrand(id).unwrap();
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
          {brandData?.data?.length > 0 ? (
            <TableForDashboard tableHead={tableHead}>
              {brandData?.data?.map((item: any, index: number) => (
                <TableRow key={item._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={item?.brandImage[0]}
                      alt={item?.brandName}
                      className="w-10 h-10 rounded-full"
                    />
                  </TableCell>
                  <TableCell>{item?.brandName}</TableCell>
                  <TableCell>{item?.brandType}</TableCell>
                  <TableCell>
                    {item?.isDeleted === false ? (
                      <Badge className="bg-green-500">Active</Badge>
                    ) : (
                      <Badge className="bg-rose-500">Inactive</Badge>
                    )}
                  </TableCell>
                  <TableCell className="flex items-center gap-4">
                    <UpdateBrand id={item?._id} />
                    <Button
                      onClick={() => handleDeleted(item?._id)}
                      className="bg-rose-600"
                    >
                      {isDeleteLoading ? <Loading /> : <Trash />}
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

export default GetBrand;

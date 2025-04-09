/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { TableCell, TableRow } from "@/components/ui/table";
import TableForDashboard from "@/components/table/TableForDashboard";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Loading from "@/components/loading/Loading";
import { Badge } from "@/components/ui/badge";
// Assuming you have UpdateProduct component
import { toast } from "sonner";

const tableHead = [
  "SL NO",
  "Product Image",
  "Product Name",
  "SKU",
  "Category",
  "Price",
  "Stock Quantity",
  "Status",
  "Action",
];

const GetAllProduct = () => {
  const { data: productData, isLoading } = useGetAllProductsQuery({});
  const [deleteProduct, { isLoading: isDeleteLoading }] =
    useDeleteProductMutation(); // Assuming you have a delete product mutation

  console.log(productData?.data);

  const handleSoftDelete = async (id: string) => {
    try {
      const res = await deleteProduct(id).unwrap();
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
          {productData?.data?.length > 0 ? (
            <TableForDashboard tableHead={tableHead}>
              {productData?.data?.map((item: any, index: number) => (
                <TableRow key={item._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={item?.productImages[0]} // Show the first image from productImages array
                      alt={item?.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </TableCell>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>{item?.sku}</TableCell>
                  <TableCell>{item?.category}</TableCell>{" "}
                  {/* You can map category ID to name if needed */}
                  <TableCell>{item?.price}</TableCell>
                  <TableCell>{item?.stockQuantity}</TableCell>
                  <TableCell>
                    {item?.status === "active" ? (
                      <Badge className="bg-green-500">Active</Badge>
                    ) : (
                      <Badge className="bg-rose-500">Inactive</Badge>
                    )}
                  </TableCell>
                  <TableCell className="flex items-center gap-4">
                    {/* <UpdateProduct id={item?._id} /> */}
                    <Button
                      onClick={() => handleSoftDelete(item?._id)}
                      className="bg-rose-600"
                    >
                      {isDeleteLoading ? <Loading /> : <Trash />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableForDashboard>
          ) : (
            <p className="text-center text-rose-400">No Product Found</p>
          )}
        </>
      )}
    </div>
  );
};

export default GetAllProduct;

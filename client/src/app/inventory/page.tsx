"use client"

import { useGetProductsQuery } from "../../state/api";
import Header from "../(components)/Header";
import { DataGrid } from "@mui/x-data-grid";


const Inventory=()=>{
    const {data:products,isError,isLoading}=useGetProductsQuery();
    if(isError || !products) return <div>Error fetching products</div>;
    if(isLoading) return <div>Loading...</div>;
    return (
        <div className="flex flex-col">
             <Header name="Inventory"/>
             <DataGrid
             rows={products}
             columns={columns}/>
        </div>)
};
export default Inventory;
import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apislices";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getProducts:builder.query({
            query:() =>({
                url: PRODUCT_URL,

            }),
            keepUnusedDataFor: 5
        })
    })
})

export const {useGetProductsQuery} = productsApiSlice

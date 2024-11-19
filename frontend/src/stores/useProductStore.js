import axios from "../lib/axios.js";
import toast from 'react-hot-toast';
import {create} from 'zustand';

export const useProductStore = create((set)=>({
    products: [],
    loading: false,

    setProducts:(products)=>set({products}),

    createProduct : async(productData)=>{
        set({loading:true});

        try{
            const res= await axios.post("/products",productData);
            set((prevState)=>({
                products :[...prevState.products, res.data],
                loading: false,
            }));
            toast.success('Product created successfully');
        }catch(error){
            toast.error(error.response.data.error);
            set({loading:false});
        }
    },
    fetchAllProducts: async()=>{
        set({loading: true});
        try{
            const response= await axios.get("/products");
            set({products: response.data.products, loading: false});
        }catch(error){
            set({error:"Failed to fetch products", loading:false});
            toast.error(error.response.data.error || "Failed to fetch products");
        }
    },
    fetchProductsByCategory : async(category) =>{
        set({loading: false});
        try{
            const response= await axios.get(`/products/category/${category}`);
            set({products: response.data.products, loading: false});
        }catch(error){
            set({error:"Failed to fetch products", loading: false});
            toast.error(error.response.data.error || "Failed to fetch products");
        }
    },
    deleteProduct: async(productId)=>{
        set({loading: false});
        try {
            await axios.delete(`/products/${productId}`);
            set((state)=>({
                products: state.products.filter((product)=>product._id!==productId),
                loading: false
            }));
            toast.success('Product deleted successfully');
        } catch (error) {
            set({loading: false});
            toast.error(error.response.data.error || "Failed to delete product");
        }
    },
    toggleFeaturedProduct: async(productId)=>{
        set({loading: false});
        try {
            const response= await axios.patch(`/products/${productId}`);
            //this will update isFeatured prop of the product
            set((prevProducts)=>({
                products: prevProducts.products.map((product)=>
                    product._id === productId ? {...product, isFeatured: response.data.isFeatured} : product
                ),
                loading: false,
            }));
        } catch (error) {
            set({loading: false});
            toast.error(error.response.data.error || "Failed to toogle product");
        }
    },
    fetchFeaturedProducts: async()=>{
        set({ loading: false});
        try {
            const response = await axios.get("/products/featured");
            set({ products: response.data, loading: false});
        } catch (error) {
            set({error: "Failed to fetch products", loading: false});
            console.log("Error fetching featured products", error);
        }
    }
}));
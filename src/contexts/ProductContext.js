import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducers/productReducer';

const ProductContext = createContext();
const API_URL = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: false,
    singleProduct: {},
};

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING"});
        try {
            const response = await axios.get(url);
            const products = await response.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({type: "API_ERROR" });
        };
    };

    const getSingleProduct = async (url) => {
        dispatch({type: "SET_LOADING" });
        try {
            const response = await axios.get(url);
            const product = await response.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: product});
        } catch (error) {
            dispatch({type: "SET_SINGLE_ERROR" });
        };
    };

    useEffect(() => {
        getProducts(API_URL);
    },[]);

    return (
        <ProductContext.Provider value={{...state, getSingleProduct}}>
            {children}
        </ProductContext.Provider>
    );
};

const useProductContext = () => {
    return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };
const filterReducer = (state, action) => {
  const { all_products } = state;
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            };
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            };
        case "SORTING_PRODUCTS":
            let newSortData;
            const { sorting_value } = state;
            console.log("filter product before sort = " + all_products);
            let tempSortedProducts = [...all_products];
            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                  return a.price - b.price;
                }
        
                if (sorting_value === "highest") {
                  return b.price - a.price;
                }
        
                if (sorting_value === "a-z") {
                  return a.name.localeCompare(b.name);
                }
        
                if (sorting_value === "z-a") {
                  return b.name.localeCompare(a.name);
                }
              };
              newSortData = tempSortedProducts.sort(sortingProducts);
              return {
                ...state,
                filter_products: newSortData,
              };
        case "UPDATE_FILTERS_VALUE": 
              const { name, value } = action.payload;
              return {
                ...state,
                filters: {
                  ...state.filters,
                  [name]: value,
                }
              };
        case "FILTER_PRODUCTS":
          let temp_filtered_products = [...all_products];
          const { text, category, price } = state.filters;
          if (text) {
            temp_filtered_products = temp_filtered_products.filter (item => {
              return item.name.toLowerCase().includes(text);
            });
          }

          if (category !== "all") {
            temp_filtered_products = temp_filtered_products.filter (item => {
              return item.category === category;
            });
          }
          if (price === 0) {
            temp_filtered_products = temp_filtered_products.filter(item => item.price === price);
          } else {
            temp_filtered_products = temp_filtered_products.filter(
              (item) => item.price <= price
            );
          }
          return {
            ...state,
            filter_products: temp_filtered_products,
          };
        default:
            return state; 
    };
};

export default filterReducer;
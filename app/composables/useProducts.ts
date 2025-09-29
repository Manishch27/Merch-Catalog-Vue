// Products

export const useProducts = () => {
    const config = useRuntimeConfig().public.apiUrl;

    const {data: products, error: productsError, refresh: productsRefresh, pending: productsPending} = useFetch<Product[]>(`${config}/products`, {
        key: 'products',
        transform: (value) => {
            return value || [];
        },
        server: true,
    })

    return {
        products,
        productsError,
        productsRefresh,
        productsPending
    }
}



// Individual Product

export const useProduct = (id: number) => {

    const config = useRuntimeConfig().public.apiUrl;
    const {data: product, error: productError, refresh: productRefresh, pending: productPending} = useFetch<Product>(`${config}/products/${id}`, {
        key: `product-${id}`,
        transform: (value) => {
            return value || null;
        },
        server: true,
    })

    return {
        product,
        productError,
        productRefresh,
        productPending
    }
}
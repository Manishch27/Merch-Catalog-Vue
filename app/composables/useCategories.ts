export const useCategories = () => {

  const config = useRuntimeConfig().public.apiUrl;

  const {data: categories, error: categoriesError, refresh: categoriesRefresh, pending: categoriesPending} = useFetch<string[]>(`${config}/products/categories`, {
    key: 'categories',
    transform: (value) => {
      return Array.isArray(value) ? value : [];
    },
    server: true,
  })

  return { categories, categoriesError, categoriesRefresh, categoriesPending }

}
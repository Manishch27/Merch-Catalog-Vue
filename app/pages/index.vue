<script setup lang="ts">

// Handle categories

const {categories, categoriesPending, categoriesError, categoriesRefresh} = useCategories()


// Fetch products using useFetch

const {products: data, productsError: error, productsPending: pending, productsRefresh} = useProducts();

// search

import { ref, watch } from 'vue'

const filteredProducts = ref<Product[] | undefined>([])

// Update filteredProducts whenever data changes
watch(() => data.value, (newData) => {
  filteredProducts.value = newData
}, { immediate: true })

const handleSearch = (searchTerm: string) => {
  if (!data.value) {
    filteredProducts.value = []
    return
  }

  if (!searchTerm) {
    filteredProducts.value = data.value
    return
  }

  filteredProducts.value = data.value?.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

// Category filter function with emit

const handleCategoryFilter = (category: string) => {

  if(!data.value) {
    filteredProducts.value = []
    return
  }

  if(!category || category.toLowerCase() === 'all'){
    filteredProducts.value = data.value
    return
  }

  filteredProducts.value = data.value?.filter(product => product.category.toLowerCase() === category.toLowerCase());
}

// const handleSortBy = (sortBy: string) => {
//   if(!data.value) {
//     filteredProducts.value = []
//     return
//   }

//   if(!sortBy){
//     filteredProducts.value = data.value
//     return
//   }
//   // Add sorting logic here based on the sortBy value
// }


 // Get query parameter from URL

  const route = useRoute();

  const selectedCategory = ref(route.query.category as string || 'All');

</script>

<template>
  <div>
    <UContainer>
      <!-- Hero Section -->
      <section v-if="!pending">
        <div class="container mx-auto px-4 py-16 text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-primary mb-4 text-balance">
            Find your Perfect Product
          </h1>
          <p class="text-xl text-black max-w-2xl mx-auto text-pretty dark:text-white">
            Discover amazing products from our curated collection. Quality merchandise for every need.
          </p>
        </div>
      </section>

      <USeparator v-if="!pending" color="primary" type="solid" />

      <!-- Search and Filter Section -->
      <section class="px-4 py-8" v-if="!categoriesPending && !categoriesError && !pending">
        <SearchAndFilter @search="handleSearch" @category-filter="handleCategoryFilter" :filteredProducts="filteredProducts?.length" :categories="categories" :queryCategory="selectedCategory" />
      </section>
      <!-- Loading State -->
      <div v-if="pending || categoriesPending" class="text-center py-20">
        <div class="flex flex-col gap-8 items-center">
          <USkeleton class="h-12 w-3/4 max-w-xl rounded-xl mb-4" />
          <USkeleton class="h-6 w-1/2 max-w-md rounded-xl mb-12" />
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        <USkeleton v-for="i in 8" :key="i" class="h-80 rounded-xl" />
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-red-500 text-center py-20">
        <UIcon name="i-lucide-alert-triangle" class="text-4xl mb-4" />
        <p class="text-xl">{{ error }}</p>
        <UButton class="mt-6" @click="()=>{
          productsRefresh()
          categoriesRefresh()
        }">Try Again</UButton>
      </div>

      <!-- Product Listing -->
      <section v-else-if="!pending" class="px-4 py-8">
        <ClientOnly>

        <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <USkeleton v-for="i in 8" :key="i" class="h-80 rounded-xl" />
  </div>
        <!-- Product Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :products="product"
          />
        </div>
      </ClientOnly>
      </section>
    </UContainer>
  </div>
</template>
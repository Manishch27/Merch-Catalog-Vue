<script setup lang="ts">

// Handle categories
const {categories, categoriesError, categoriesRefresh, categoriesPending} = useCategories()

// Send category to the homepage as a query parameter when clicking "View Products" button
const handleViewProducts = (category: string) => {
  // Navigate to the homepage with the selected category as a query parameter
  navigateTo({ path: '/', query: { category } });
};

</script>

<template>
    <UContainer class="min-h-screen py-10">
        <h1 class="text-5xl md:text-5xl font-extrabold text-center mb-12">Browse by Category</h1>
        
        <!-- Skeleton Loader -->
        <div v-if="categoriesPending" class="container mx-auto px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <USkeleton v-for="i in 4" :key="i" class="h-[200px] rounded-2xl" />
            </div>
        </div>
        
        <!-- Error State -->
        <div v-else-if="categoriesError" class="text-red-500 text-center py-10">
            {{ categoriesError }}
            <div class="mt-4">
                <UButton @click="categoriesRefresh as () => void">Try Again</UButton>
            </div>
        </div>
        
        <!-- Categories Display -->
        <div v-else class="container mx-auto px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <UCard
                    v-for="category in categories"
                    :key="category"
                    class="flex flex-col items-center justify-center border border-gray-800/40 rounded-2xl py-12 px-6 hover:shadow-lg hover:scale-[1.03] transition-all duration-200 min-h-[200px]"
                >
                    <div class="flex flex-col items-center justify-center h-full w-full">
                        <div class="text-2xl font-bold mb-4 text-center">{{ capitalizeFirstChar(category) }}</div>
                        <UButton class="mt-4 cursor-pointer" @click="handleViewProducts(category)">View Products</UButton>
                    </div>
                </UCard>
            </div>
        </div>
    </UContainer>
</template>
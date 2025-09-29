
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute();
const productId = route.params.id;

// Use the composable to fetch product details
const { product, productError, productPending } = useProduct(Number(productId));

</script>


<template>
    <UContainer class="py-10">
        <NuxtLink to="/" class="text-blue-500 hover:underline mb-8 inline-block text-lg">← Back to Products</NuxtLink>

        <!-- Skeleton Loader -->
        <div v-if="productPending" class="flex flex-col md:flex-row gap-20 p-8 items-center md:items-start min-h-[400px]">
            <div class="flex-1 flex justify-center items-center">
                <USkeleton class="h-[400px] w-[400px] rounded-xl" />
            </div>
            <div class="flex-1 flex flex-col gap-4">
                <USkeleton class="w-24 h-6 rounded-full" />
                <USkeleton class="w-full h-10 mb-2" />
                <USkeleton class="w-32 h-6" />
                <USkeleton class="w-24 h-8 mb-2" />
                <USkeleton class="w-full h-32 mb-4" />
                <div class="flex gap-4">
                    <USkeleton class="flex-1 h-12" />
                    <USkeleton class="flex-1 h-12" />
                </div>
            </div>
        </div>


        <div v-else-if="productError" class="text-red-500 text-center py-10">{{ productError }}</div>
        <div v-else-if="product" class="flex flex-col md:flex-row gap-20 rounded-2xl p-8 items-center md:items-start">
            <div class="flex-1 flex justify-center items-center">
                <NuxtImg :src="product.image" :alt="product.title" class="rounded-xl object-contain border border-gray-300/40 dark:border-gray-700/40" style="max-width: 500px; max-height: 600px; width: 100%;" />
            </div>
            <div class="flex-1 flex flex-col justify-center">
                <div class="mb-2">
                    <UBadge color="primary" variant="solid" class="text-black text-sm px-3 py-1">{{ capitalizeFirstChar(product.category) }}</UBadge>
                </div>
                <h1 class="text-4xl font-bold mb-2">{{ product.title }}</h1>
                <div class="flex items-center gap-2 mb-4">
                    <UIcon name="i-lucide-star" class="text-yellow-400" />
                    <span class="text-lg font-medium">{{ product.rating?.rate }}</span>
                    <span class="text-gray-400 text-base">({{ product.rating?.count }} reviews)</span>
                </div>
                <div class="text-3xl font-bold mb-4">{{ formatPrice(product.price) }}</div>
                <div class="text-base text-gray-500 dark:text-gray-300 mb-8 max-w-2xl">{{ product.description }}</div>
                <div class="flex gap-4">
                    <UButton size="xl" color="primary" class="text-black font-semibold flex-1">
                        <UIcon name="i-lucide-shopping-cart" class="mr-2" /> Add to Cart
                    </UButton>
                    <UButton size="xl" color="primary" variant="outline" class="flex-1">
                        Buy Now
                    </UButton>
                </div>
            </div>
        </div>
        <div v-else class="text-red-500">Product ID not found in the URL.</div>
       
    </UContainer>
</template>


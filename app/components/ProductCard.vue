<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps<{
  products: Product
}>();

</script>

<template>
  
    <UCard class="rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
      <template #header>
        <div class="relative">
          <UBadge>{{ capitalizeFirstChar(props.products.category) }}</UBadge>
          <NuxtImg :src="props?.products?.image" alt="Product image" class="w-full h-64 object-contain rounded-lg" />
        </div>
      </template>

      <div class="px-4 pt-2 pb-0">
        <div class="flex items-center gap-1 text-base mb-1">
          <Icon name="i-lucide-star" class="inline-block" />
          <span class="text-sm font-medium">{{ props.products.rating.rate }}</span>
          <span class="text-xs">({{ props.products.rating.count }})</span>
        </div>
        <NuxtLink :to="`/products/${props.products.id}`" class="block cursor-pointer">
          <div class="font-bold text-lg leading-tight mb-1 transition-all duration-300 hover:text-blue-500">{{ props.products.title }}</div>
        </NuxtLink>
        <div class="text-xs mb-3 truncate">{{ props.products.description }}</div>
      </div>

      <template #footer>
        <div class="flex items-center justify-between px-4 pb-3 pt-0">
          <span class="font-bold text-xl">{{ formatPrice(props.products.price) }}</span>
          <button
            class="flex items-center gap-2 font-medium px-4 py-2 rounded-lg transition"
            @click.prevent="$emit('add-to-cart', props.products)">
            <Icon name="i-lucide-shopping-cart" />
            Add
          </button>
        </div>
      </template>
    </UCard>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const SearchValue = ref('');

const CategoryFilterValue = ref('All');

// define props

const props = defineProps<{
  filteredProducts?: number
  categories?: string[]
  queryCategory?: string
}>()

// emit
const emit = defineEmits<{
  (e: 'search', searchTerm: string): void
  (e: 'category-filter', category: string): void
}>()

// watch search value
watch(SearchValue, (newValue) => {
  emit('search', newValue);
},
 {
  deep: true,
 }
)

// watch category filter value
watch(CategoryFilterValue, (newValue) => {
  emit('category-filter', newValue);
}, {
  deep: true
});

 const newCategories: string[] = ['All', ...(props.categories || [])];

// Set initial category filter value based on queryCategory prop
if (props.queryCategory && newCategories.includes(props.queryCategory)) {
  CategoryFilterValue.value = props.queryCategory;
} else {
  CategoryFilterValue.value = 'All';
}

</script>

<template>
<UInput
    v-model="SearchValue"
    placeholder="Type something..."
    class="w-full max-w-[500px]"
    :ui="{ trailing: 'pe-2' }"
>
    <template v-if="SearchValue?.length" #trailing>
      <UButton
        color="neutral"
        variant="link"
        size="sm"
        icon="i-lucide-circle-x"
        aria-label="Clear input"
        @click="SearchValue = ''"
      />
    </template>

    <template #leading>
        <UIcon name="i-lucide-search" size="sm" class="text-black dark:text-white" />
    </template>
</UInput>
<div class="mt-4 flex items-center gap-4 w-full flex-wrap">
        <USelect v-model="CategoryFilterValue" :items="newCategories" class="w-48">
        <template #leading>
            <UIcon name="i-lucide-filter" size="sm" class="text-black dark:text-white" />
        </template>
        </USelect>
        
        <ClientOnly>
          <span class="text-sm text-muted-foreground align-self-end">
           {{ props.filteredProducts }} Products found
          </span>
          </ClientOnly>
</div>
</template>
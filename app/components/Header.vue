<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Products',
  to: '/',
  icon: 'i-lucide-shopping-bag',
  active: route.path === '/'
}, {
  label: 'Categories',
  to: '/categories',
  icon: 'i-lucide-tags',
  active: route.path.startsWith('/categories')
}])
</script>

<template>
  <UHeader
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  >
    <template #title>
      <h1>
      <span class="inline-block align-middle mr-2">
        <Icon name="i-lucide-store" size="1.5em" />
      </span>
      Merch Catlog
      </h1>
    </template>

    <UNavigationMenu :items="items"/>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>

    <template #right>
      <UColorModeButton class="cursor-pointer" />
    </template>
  </UHeader>
</template>
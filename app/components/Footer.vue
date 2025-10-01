<template>
    <UFooter class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Company Info -->
                <div>
                    <h3 class="text-lg font-bold mb-4">Merch Catalog</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">Your one-stop shop for quality merchandise and promotional products.</p>
                    <div class="flex space-x-4">
                        <UButton icon="i-mdi-facebook" color="primary" variant="ghost" />
                        <UButton icon="i-mdi-twitter" color="primary" variant="ghost" />
                        <UButton icon="i-mdi-instagram" color="primary" variant="ghost" />
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-500">Home</NuxtLink></li>
                        <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-500">Products</NuxtLink></li>
                        <li><NuxtLink to="/categories" class="text-gray-600 dark:text-gray-400 hover:text-primary-500">Categories</NuxtLink></li>
                        <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-500">About Us</NuxtLink></li>
                    </ul>
                </div>
                
                <!-- Contact Info -->
                <div>
                    <h3 class="text-lg font-bold mb-4">Contact Us</h3>
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2">
                            <UIcon name="i-mdi-map-marker" class="text-primary-500" />
                            <span class="text-gray-600 dark:text-gray-400">123 Merch Street, City, Country</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <UIcon name="i-mdi-phone" class="text-primary-500" />
                            <span class="text-gray-600 dark:text-gray-400">+1 234 567 890</span>
                        </li>
                        <li class="flex items-center gap-2">
                            <UIcon name="i-mdi-email" class="text-primary-500" />
                            <span class="text-gray-600 dark:text-gray-400">contact@merchcatalog.com</span>
                        </li>
                    </ul>
                </div>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        © {{ new Date().getFullYear() }} Merch Catalog. All rights reserved.
                    </p>
                    <div class="flex gap-4 mt-4 md:mt-0">
                        <NuxtLink to="/privacy" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500">Privacy Policy</NuxtLink>
                        <NuxtLink to="/terms" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500">Terms of Service</NuxtLink>
                    </div>
                </div>
            </div>
    </div>
    </UFooter>
</template>
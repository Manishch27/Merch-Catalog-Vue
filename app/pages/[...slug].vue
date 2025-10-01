<script setup lang="ts">
const route = useRoute();
const slug = computed(() => route.params.slug);

// Determine if it's a valid route or a 404
const isValidRoute = ref(false);

// You can customize this function to check if the route is valid based on your app's needs
const checkValidRoute = async () => {
    // Example: Check against known routes or API
    // This is a placeholder - implement your logic
    const path = Array.isArray(slug.value) ? slug.value.join('/') : slug.value;
    isValidRoute.value = false; // Assume 404 for demo purposes
};

onMounted(() => {
    checkValidRoute();
});
</script>

<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <UContainer class="py-6 flex-grow">
            <UButton 
                icon="i-heroicons-arrow-left" 
                to="/" 
                variant="ghost"
                class="mb-4"
            >
                Back to Home
            </UButton>
            
            <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                    {{ isValidRoute ? 'Dynamic Page' : 'Page Not Found' }}
                </h1>
                <p class="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                    {{ isValidRoute 
                        ? `You're viewing the dynamic route: ${Array.isArray(slug) ? slug.join('/') : slug}`
                        : "We couldn't find the page you're looking for." }}
                </p>
            </div>

            <!-- Main content -->
            <div class="flex flex-col items-center justify-center py-12">
                <div v-if="isValidRoute" class="w-full max-w-3xl">
                    <UCard class="border border-gray-200 dark:border-gray-800 shadow-xl">
                        <template #header>
                            <div class="flex items-center justify-between">
                                <h2 class="text-xl font-semibold">Dynamic Route Details</h2>
                                <UBadge color="primary" variant="soft">{{ Array.isArray(slug) ? slug.length : 1 }} Segment(s)</UBadge>
                            </div>
                        </template>
                        
                        <div class="space-y-4">
                            <UAlert 
                                title="Route Information" 
                                color="info" 
                                variant="soft"
                                icon="i-heroicons-information-circle"
                            >
                                This is a dynamic page that captures any URL segment after the base URL.
                            </UAlert>
                            
                            <div class="space-y-2">
                                <h3 class="font-medium text-gray-700 dark:text-gray-300">Route parameters:</h3>
                                <UCard class="bg-gray-50 dark:bg-gray-800 border-none">
                                    <pre class="language-json"><code>{{ JSON.stringify(route.params, null, 2) }}</code></pre>
                                </UCard>
                            </div>
                        </div>
                        
                        <template #footer>
                            <div class="flex justify-end">
                                <UButton color="primary" to="/">Return Home</UButton>
                            </div>
                        </template>
                    </UCard>
                </div>
                
                <!-- 404 Not Found Content -->
                <div v-else class="w-full max-w-3xl text-center">
                    <div class="w-64 h-64 mx-auto mb-8">
                        <client-only>
                            <UIcon name="i-heroicons-exclamation-triangle" class="w-32 h-32 text-orange-500 mx-auto" />
                        </client-only>
                    </div>
                    
                    <h2 class="text-2xl font-bold mb-4">Oops! Page not found</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <UButton 
                            color="primary" 
                            to="/" 
                            icon="i-heroicons-home"
                        >
                            Back to Home
                        </UButton>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<style scoped>
/* Any additional custom styles */
</style>

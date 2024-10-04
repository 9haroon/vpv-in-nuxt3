<template>
    <div class="w-2/5 h-full border-r border-gray-300">
      <div class="h-full flex flex-col">
        <div class="bg-white p-4 flex justify-between items-center h-16">
          <h2 class="text-xl font-semibold">
            {{ fileName }}
          </h2>
          <div class="flex items-center space-x-2">
            <button
              @click="onPrevPage"
              :disabled="currentPage === 1"
              class="px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              <
            </button>
            <span>{{ currentPage }} of {{ totalPages }}</span>
            <button
              @click="onNextPage"
              :disabled="currentPage === totalPages"
              class="px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              >
            </button>
          </div>
        </div>
        <div class="flex-grow overflow-auto">
          <div class="h-full bg-gray-300 flex items-center justify-center">
            <div class="w-full h-full px-0 mx-0">
              <div
                v-if="pdfUrl"
                id="pdfview"
                class="flex flex-col z-index-5 py-2 w-full h-full"
              >
                <div :style="{ width: '640px', height: '900px' }">
                  <AppPdfViewer :pdf-url="pdfUrl" :license-key="licenseKey" :current-page="currentPage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const { data } = await useFetch<{ licenseKey: string }>("/api/vpv-license-key");
  
  const licenseKey = computed(
    () => {
        return data.value?.licenseKey ?? null
    }
);
  
  const props = defineProps<{
    fileName: string;
    pdfUrl: string;
    currentPage: number;
    totalPages: number;
  }>();
  
  const emit = defineEmits<{
    (e: "prevPage"): void;
    (e: "nextPage"): void;
  }>();
  
  const onPrevPage = () => emit("prevPage");
  const onNextPage = () => emit("nextPage");
  
  
  </script>
  
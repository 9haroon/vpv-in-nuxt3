<template>
    <VPdfViewer :src="pdfUrl" ref="vpvRef" :worker-url="pdfWorker">
      <template #pageNavigationTool="{
        total,
        current,
        onNext,
        onPrev,
        onChangePage,
      }">
        <button @click="handlePrevPage(onPrev, current, total)">
          < 
        </button>
        <span>{{ current }} of {{ total }}</span>
        <button @click="handleNextPage(onNext, current, total)">
          >
        </button>
      </template>
    </VPdfViewer>
  </template>
  <script lang="ts" setup>
  import { VPdfViewer, useLicense } from "@vue-pdf-viewer/viewer";
  import pdfWorker from 'pdfjs-dist/build/pdf.worker?url'
  
  const props = defineProps<{
    licenseKey: string|null;
    pdfUrl: string;
    currentPage: number;
  }>();
  
  const emit = defineEmits<{
    (e: "prevPage"): void;
    (e: "nextPage"): void;
  }>();
  
  useLicense({ licenseKey: props.licenseKey });
  
  const { pdfUrl } = toRefs(props)
  const vpvRef = ref(null);
  
  const handlePrevPage = (onPrev, current, total) => {
    if (current > 1) {
      onPrev();
      emit("prevPage");
    }
  };
  
  const handleNextPage = (onNext, current, total) => {
    if (current < total) {
      onNext();
      emit("nextPage");
    }
  };
  
  watch(
    () => props.currentPage,
    (newPage) => {
      if (vpvRef.value) {
        vpvRef.value.goToPage(newPage);
      }
    }
  );
  
  
  </script>
  
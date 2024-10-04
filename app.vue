<script setup lang="ts">
import PdfViewer from './components/PdfViewer.vue';
const pdfUrl = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <PdfViewer file-name="Test" :current-page="1" :total-pages="14" :pdf-url="pdfUrl" />
  </div>
</template>

<template>
  <div id="ExplorerDiv">
    <div v-for="file in files" :key="file.webkitRelativePath" class="File">
    <div>{{ file.name }}</div></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GrepPage',
  props: {
    files: {
      type: Array as () => File[],
      required: true,
    },
  },
});
</script>

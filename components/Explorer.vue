<template>
  <div id="ExplorerDiv">
    <div v-for="file in files" :key="file.webkitRelativePath" class="File">{{ file.name }}</div>
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

<style scoped>
#ExplorerDiv {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1rem 0;
  padding: 0;
  max-width: 250px;
  overflow-x: auto;
  border: 3px double gray;
}
.File {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.File:hover {
  background-color: lightgray;
}
</style>

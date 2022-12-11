<template>
  <div id="ExplorerDiv">
    <div v-for="file in files" :key="file.file.webkitRelativePath" :class="[((file.flag) ? 'on' : 'off') + ' File']" @click="go_viewer(file)">{{ file.file.name }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FileWrapper } from '@/src/interface';

export default Vue.extend({
  name: 'GrepPage',
  props: {
    files: {
      type: Array as () => FileWrapper[],
      required: true,
    },
  },
  methods: {
    go_viewer(file: FileWrapper): void {
      this.$emit('go_viewer', {
        file: file.file,
        flag: file.flag,
      } as FileWrapper);
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
}
.File {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.File.on::before {
  content: '✔';
  color: red;
  font-weight: bold;
  margin-right: 0.5rem;
}
.File.off::before {
  content: ' ';
  margin-right: 1.5rem;
}
.File:hover {
  background-color: lightgray;
}
</style>

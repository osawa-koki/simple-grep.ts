<template>
  <div>
    <input type="file" webkitdirectory @change="handleDirSelect" />
    <Explorer :files="files" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GrepPage',
  data() {
    return {
      files: [] as File[],
    };
  },
  methods: {
    handleDirSelect(event: any): void {
      const files = event.target.files;
      this.files = [] as File[];
      for (let i = 0; i < files.length; i++) {
        this.files.push(files[i]);
      }
      this.files.sort((a, b) => a.webkitRelativePath.localeCompare(b.webkitRelativePath));
    },
  },
});
</script>

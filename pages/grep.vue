<template>
  <div>
    <input type="file" webkitdirectory @change="handleDirSelect" />
    <Explorer name="AAA" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DirFile from '~/src/DirFile';

export default Vue.extend({
  name: 'GrepPage',
  data() {
    return {
      dir_files: [] as DirFile[],
    };
  },
  methods: {
    handleDirSelect(event: any): void {
      const files = event.target.files;
      this.dir_files = [] as DirFile[];
      for (let i = 0; i < files.length; i++) {
        // const file = files[i];
        // const path = file.webkitRelativePath.replace(/^\//, '');
        // const dirs = path.split('/');
        // console.log(path);
      };
    },
  },
});
</script>

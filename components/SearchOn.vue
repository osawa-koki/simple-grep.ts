<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>検索対象文字列</th>
          <td><input v-model="target_string" type="text" /></td>
        </tr>
        <tr>
          <th>正規表現を使用</th>
          <td><input v-model="is_regex" type="checkbox" /></td>
        </tr>
        <tr>
          <th>検索対象ファイル拡張子</th>
          <td>
            <v-select :options="options" :value="selected_values" taggable multiple @input="setSelected" />
          </td>
        </tr>
      </tbody>
    </table>
    <div id="GrepButtonDiv">
      <b-button variant="success" @click="grep_start">GREP開始</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import { initialExtentionList, extentionList } from '@/src/data/extextions';

export default Vue.extend({
  name: 'SearchOn',
  components: {
    vSelect,
  },
  data() {
    return {
      options: extentionList,
      selected_values: initialExtentionList,
      target_string: "",
      is_regex: true,
    };
  },
  methods: {
    setSelected(value: string[]) {
      this.selected_values = value;
    },
    grep_start(): void {
      const TargetExtentions = [...this.selected_values];
      this.$emit('grep_start', this.target_string, this.is_regex, TargetExtentions);
    },
  },
});
</script>

<style scoped>
table {
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 0.5rem;
}
td {
  width: 500px;
}
#GrepButtonDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
}
</style>

<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>検索対象文字列</th>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <th>正規表現を使用</th>
          <td><input type="checkbox" checked /></td>
        </tr>
        <tr>
          <th>検索対象ファイル拡張子</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'; 

export default Vue.extend({
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
</style>

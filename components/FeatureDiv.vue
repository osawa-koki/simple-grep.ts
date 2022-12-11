<template>
  <div id="FeatureContainer">
    <NuxtLink v-for="feature in features" :key="feature.path" class="FeatureBox" :to="feature.path">
      <div class="title">{{ feature.title }}</div>
      <p class="description">{{ feature.description }}</p>
    </NuxtLink>
  </div>
</template>

<script>
import { features } from '~/src/data/features';

export default {
  name: 'FeatureDiv',
  data() {
    return {
      features,
    };
  },
  async mounted() {
  },
}
</script>

<style scoped>
#FeatureContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1rem 0;
}
.FeatureBox {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
.FeatureBox .title {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
}
.FeatureBox .description {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px lightgray solid;
}
</style>

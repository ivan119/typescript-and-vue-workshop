<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <navbar />
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:  opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

</style>

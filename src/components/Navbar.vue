<script>
export default {
  props: ['tagline'],
  data: () => ({
    navList: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Restaurants',
        path: '/restaurants'
      },
      {
        name: 'Dishes',
        path: '/dishes'
      }
    ]
  })
}
</script>

<style scoped>
.navbar {
  @apply flex flex-row justify-between bg-transparent border-b-2 border-amber-500 py-4
}
.navbar-end {
  @apply flex flex-row space-x-2 items-center h-full pr-4
}
.navbar-item {
  @apply text-green-400 font-bold text-xl hover:text-blue-400 transition-colors ease-linear duration-200 cursor-pointer active:text-blue-400
}
</style>


<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <img src="@/assets/logo.svg" alt="" width="100" style="height: 54px" />
      </RouterLink>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <small>{{ tagline }}</small>
        </div>
      </div>
      <div class="navbar-end">
        <div v-for="navItem in navList" class="navbar-item" :key="`nav-${navItem.name}`">
          <router-link :to="navItem.path">{{ navItem.name }} </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<template>
  <div>
    <main class="main">
      <h1 class="h1">Dish Page</h1>
    </main>
    <section class="w-full flex justify-center items-center h-screen">
      <h1 class="h1">Section</h1>
    </section>
    <section class="w-full flex flex-col justify-center items-center h-screen">
      <a href="#section"> <h1 id="section" class="h1">Section 2</h1></a>
    </section>
  </div>
</template>

<style scoped>
.main {
  height: calc(100vh - 88px);
  @apply w-full flex flex-col justify-center items-center border-b border-amber-500;
}
.h1 {
  @apply text-green-400 from-green-500 to-blue-300 text-4xl;
}
section {
  @apply border-b border-amber-500;
}
</style>

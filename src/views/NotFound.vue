<template>
  <div
    class="min-h-screen min-w-screen max-h-conten bg-blue-200 flex flex-col justify-center items-center"
  >
    <div class="w-1/3">
      <img src="@/assets/images/not-found.jpg" alt="" />
    </div>
    <h1 class="text-emerald-900 font-bold text-4xl mb-4">Page not found</h1>
    <p>
      <RouterLink to="/" class="text-blue-700 text-lg underline mt-8"
        >Back to home</RouterLink
      >
    </p>
  </div>
</template>

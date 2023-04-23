<template>
  <div
    class="h-full min-w-screen max-h-conten bg-green-100 flex flex-col justify-center items-center p-11"
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

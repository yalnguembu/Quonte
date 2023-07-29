<template>
  <div
    class="h-screen min-w-screen max-h-conten bg-green-100 dark:bg-gray-800 flex flex-col justify-center items-center p-14"
  >
    <div class="w-1/3">
      <img src="@/assets/images/not-found.jpg" alt="" />
    </div>
    <h1 class="text-emerald-900 dark:text-gray-100 font-bold text-4xl mb-4">
      Page not found
    </h1>
    <p>
      <RouterLink to="/" class="text-blue-500 text-lg underline mt-8"
        >Back to home</RouterLink
      >
    </p>
  </div>
</template>

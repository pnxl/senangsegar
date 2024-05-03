<template class="">
  <div class="bg-neutral-100 dark:bg-neutral-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  scale: 0.95;
}

.swipe-enter-active {
  animation: acrossIn 0.15s ease-out both;
}

.swipe-leave-active {
  animation: acrossOut 0.15s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-2%, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(2%, 0, 0);
    opacity: 0;
  }
}
</style>

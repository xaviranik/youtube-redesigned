<template>
  <router-link :to="{ name: 'Watch', query: { v: 'jO2viLEW-1A' } }">
    <div class="col-span-1 bg-white shadow rounded-lg overflow-hidden cursor-pointer h-full">
    <div class="relative pb-2/3">
      <img class="absolute top-0 object-cover w-full h-full" loading="lazy" :src="video.thumbnail" alt="img" />
    </div>

    <div class="p-4">
      <div class="flex items-center">
        <img class="w-14 rounded-full" loading="lazy" :src="video.avatar" alt="avatar" />
        <div class="ml-3">
          <h4 class="font-semibold text-base text-gray-900 line-2">
            {{ video.title }}
          </h4>
        </div>
      </div>
      <div class="mt-4 text-gray-500">
        <div class="flex items-center text-base">
          <div>{{ video.user }}</div>
          <span class="material-icons text-sm ml-1">check_circle</span>
        </div>
        <div class="mt-1">
          <div class="text-sm text-gray-400">
            {{ video.view }} views &bull; {{ video.dateCreated }}
          </div>
        </div>
      </div>
    </div>
  </div>
  </router-link>
</template>

<script>
  export default {
    name: "VideoCard",
    props: {
      video: Object,
    },
  };

</script>

<style>
</style>

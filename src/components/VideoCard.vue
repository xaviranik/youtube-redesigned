<template>
  <div
    class="col-span-1 bg-white border rounded-lg overflow-hidden cursor-pointer"
  >
    <div class="relative bg-red-500 pb-2/3">
      <img
        class="absolute top-0 object-cover w-full h-full"
        loading="lazy"
        :src="video.thumbnail"
        alt="img"
      />
    </div>

    <div class="flex items-start p-4">
      <img class="w-10 rounded-full" :src="video.avatar" alt="avatar" />
      <div class="ml-4">
        <h4 class="font-semibold text-base h-12 text-gray-900">
          {{ video.title }}
        </h4>
        <div class="mt-2 text-gray-500">
          <div class="flex items-center text-sm">
            <div>{{ video.user }}</div>
            <span class="material-icons text-sm ml-1">check_circle</span>
          </div>
          <div class="mt-1">
            <div class="text-sm">
              {{ video.view }} views &bull; {{ video.dateCreated }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

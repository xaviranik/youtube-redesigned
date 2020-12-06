<template>
  <div id="main" class="grid grid-cols-12 gap-4">
    <div id="sidebar" class="col-span-2 py-20 bg-white shadow min-h-screen">
      <!-- Top Section -->
      <div class="pb-2 border-b">
        <div class="bg-gray-100 rounded-lg mx-4 mb-2">
          <button class="flex focus:outline-none px-6 py-3">
            <div class="flex items-center text-gray-600">
              <span class="material-icons text-red-600">home</span>
              <span class="font-bold ml-6">Home</span>
            </div>
          </button>
        </div>
        <div class="hover:bg-gray-100 rounded-lg mx-4 mb-2">
          <button class="flex focus:outline-none px-6 py-3">
            <div class="flex items-center text-gray-600">
              <span class="material-icons text-gray-600"
                >local_fire_department</span
              >
              <span class="ml-6">Trending</span>
            </div>
          </button>
        </div>
        <div class="hover:bg-gray-100 rounded-lg mx-4">
          <button class="flex focus:outline-none px-6 py-3">
            <div class="flex items-center text-gray-600">
              <span class="material-icons text-gray-600">subscriptions</span>
              <span class="ml-6">Subscriptions</span>
            </div>
          </button>
        </div>
      </div>
      <!-- Middle Section -->
      <div class="py-2 border-b">
        <div class="hover:bg-gray-100 rounded-lg mx-4 mb-2">
          <button class="flex focus:outline-none px-6 py-3">
            <div class="flex items-center text-gray-600">
              <span class="material-icons text-gray-600">video_library</span>
              <span class="ml-6">Library</span>
            </div>
          </button>
        </div>
        <div class="hover:bg-gray-100 rounded-lg mx-4 mb-2">
          <button class="flex focus:outline-none px-6 py-3">
            <div class="flex items-center text-gray-600">
              <span class="material-icons text-gray-600">history</span>
              <span class="ml-6">History</span>
            </div>
          </button>
        </div>
        <div class="hover:bg-gray-100 rounded-lg mx-4 mb-2">
          <button class="flex focus:outline-none px-6 py-3">
            <div class="flex items-center text-gray-600">
              <span class="material-icons text-gray-600">slideshow</span>
              <span class="ml-6">Your videos</span>
            </div>
          </button>
        </div>
        <div class="hover:bg-gray-100 rounded-lg mx-4 mb-2">
          <button class="flex focus:outline-none px-6 py-3">
            <div class="flex items-center text-gray-600">
              <span class="material-icons text-gray-600">watch_later</span>
              <span class="ml-6">Watch later</span>
            </div>
          </button>
        </div>
        <div class="hover:bg-gray-100 rounded-lg mx-4 mb-2">
          <button class="flex focus:outline-none px-6 py-3">
            <div class="flex items-center text-gray-600">
              <span class="material-icons text-gray-600">playlist_play</span>
              <span class="ml-6">Chill songs</span>
            </div>
          </button>
        </div>
        <div class="hover:bg-gray-100 rounded-lg mx-4">
          <button class="flex focus:outline-none px-6 py-3">
            <div class="flex items-center text-gray-600">
              <span class="material-icons text-gray-600">expand_more</span>
              <span class="ml-6">Show more</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style>
</style>

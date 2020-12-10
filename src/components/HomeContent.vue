<template>
  <div
    class="col-span-10 py-24 overflow-y-auto"
    :class="sidebarIsOpen ? 'col-span-10' : 'col-span-12'"
  >
    <div
      class="grid grid-cols-4 gap-6 px-6"
      :class="sidebarIsOpen ? 'grid-cols-4' : 'grid-cols-5'"
    >
      <div v-for="video in videos" :key="video.index">
        <VideoCard :video="video" />
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from "@/components/VideoCard";
import { mapGetters } from "vuex";

export default {
  name: "HomeContent",
  components: {
    VideoCard,
  },
  computed: {
    ...mapGetters(["sidebarIsOpen", "videos"]),
  },
};
</script>

<style>
</style>

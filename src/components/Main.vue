<template>
  <div
    id="main"
    class="grid grid-cols-12 gap-4 min-h-screen h-screen overflow-y-hidden"
  >
    <Sidebar />
    <HomeContent />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import HomeContent from "@/components/HomeContent";

export default {
  name: "Main",
  components: {
    Sidebar,
    HomeContent,
  },
};
</script>

<style>
</style>

<template>
  <div class="col-span-10 py-24 overflow-y-auto">
    <div class="grid grid-cols-4 gap-6 px-6">
      <div v-for="video in videos" :key="video.index">
        <VideoCard :video="video" />
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from "@/components/VideoCard";

export default {
  name: "HomeContent",
  components: {
    VideoCard,
  },
  data() {
    return {
      videos: [
        {
          title: "Designing with Tailwind CSS: Structuring a Basic Card",
          thumbnail:
            "https://i.pinimg.com/originals/3c/9e/50/3c9e50020395f447932c74788293bc2a.jpg",
          avatar: "https://i.pravatar.cc/300?id=52",
          user: "Adam Wathan",
          view: "2.4M",
          dateCreated: "2 years ago",
        },
        {
          title:
            "What If Earth got Kicked Out of the Solar System? Rogue Earth",
          thumbnail:
            "https://i.pinimg.com/originals/3c/9e/50/3c9e50020395f447932c74788293bc2a.jpg",
          avatar: "https://i.pravatar.cc/300?id=1",
          user: "Kurzgesagt – In a Nutshell",
          view: "1.2M",
          dateCreated: "1 month ago",
        },
        {
          title: "TIMELAPSE OF THE FUTURE: A Journey to the End of Time (4K)",
          thumbnail:
            "https://i.pinimg.com/originals/3c/9e/50/3c9e50020395f447932c74788293bc2a.jpg",
          avatar: "https://i.pravatar.cc/300?id=57",
          user: "melodysheep",
          view: "7.1M",
          dateCreated: "7 months ago",
        },
        {
          title: "Maroon 5 - Sugar (Official Music Video)",
          thumbnail:
            "https://i.pinimg.com/originals/3c/9e/50/3c9e50020395f447932c74788293bc2a.jpg",
          avatar: "https://i.pravatar.cc/300?id=11",
          user: "Maroon 5",
          view: "3.3B",
          dateCreated: "3 years ago",
        },
        {
          title:
            "What If Earth got Kicked Out of the Solar System? Rogue Earth",
          thumbnail:
            "https://i.pinimg.com/originals/3c/9e/50/3c9e50020395f447932c74788293bc2a.jpg",
          avatar: "https://i.pravatar.cc/300?id=18",
          user: "Kurzgesagt – In a Nutshell",
          view: "1.2M",
          dateCreated: "1 month ago",
        },
        {
          title: "Winter Chicken Recipes To Keep You Warm | Gordon Ramsay",
          thumbnail:
            "https://i.pinimg.com/originals/3c/9e/50/3c9e50020395f447932c74788293bc2a.jpg",
          avatar: "https://i.pravatar.cc/300?id=22",
          user: "Gordon Ramsay",
          view: "741k",
          dateCreated: "9 months ago",
        },
        {
          title:
            "Cat Vibing To Ievan Polkka (Official Video HD) Cat Vibing To Music",
          thumbnail:
            "https://i.pinimg.com/originals/3c/9e/50/3c9e50020395f447932c74788293bc2a.jpg",
          avatar: "https://i.pravatar.cc/300?id=32",
          user: "Bilal Göregen",
          view: "1.9M",
          dateCreated: "11 months ago",
        },
        {
          title: "Marshmello ft. Bastille - Happier (Official Music Video)",
          thumbnail:
            "https://i.pinimg.com/originals/3c/9e/50/3c9e50020395f447932c74788293bc2a.jpg",
          avatar: "https://i.pravatar.cc/300?id=32",
          user: "Marshmello",
          view: "7.1M",
          dateCreated: "1 months ago",
        },
      ],
    };
  },
};
</script>

<style>
</style>

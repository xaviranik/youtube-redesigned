import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarIsOpen: true,
    videos: [{
        title: "Designing with Tailwind CSS: Structuring a Basic Card",
        thumbnail: "https://images.unsplash.com/photo-1452697620382-f6543ead73b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://i.pravatar.cc/300?id=52",
        user: "Adam Wathan",
        view: "2.4M",
        dateCreated: "2 years ago",
      },
      {
        title: "What If Earth got Kicked Out of the Solar System? Rogue Earth What If Earth got Kicked Out of the Solar System? Rogue Earth",
        thumbnail: "https://images.unsplash.com/photo-1607140110438-7a17d182deee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        avatar: "https://i.pravatar.cc/300?id=1",
        user: "Kurzgesagt – In a Nutshell",
        view: "1.2M",
        dateCreated: "1 month ago",
      },
      {
        title: "TIMELAPSE OF THE FUTURE: A Journey to the End of Time (4K)",
        thumbnail: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://i.pravatar.cc/300?id=57",
        user: "melodysheep",
        view: "7.1M",
        dateCreated: "7 months ago",
      },
      {
        title: "Maroon 5 - Sugar (Official Music Video)",
        thumbnail: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://i.pravatar.cc/300?id=11",
        user: "Maroon 5",
        view: "3.3B",
        dateCreated: "3 years ago",
      },
      {
        title: "What If Earth got Kicked Out of the Solar System? Rogue Earth",
        thumbnail: "https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        avatar: "https://i.pravatar.cc/300?id=18",
        user: "Kurzgesagt – In a Nutshell",
        view: "1.2M",
        dateCreated: "1 month ago",
      },
      {
        title: "Winter Chicken Recipes To Keep You Warm | Gordon Ramsay",
        thumbnail: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1323&q=80",
        avatar: "https://i.pravatar.cc/300?id=22",
        user: "Gordon Ramsay",
        view: "741k",
        dateCreated: "9 months ago",
      },
      {
        title: "Cat Vibing To Ievan Polkka (Official Video HD) Cat Vibing To Music",
        thumbnail: "https://images.unsplash.com/photo-1466193341027-56e68017ee2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://i.pravatar.cc/300?id=32",
        user: "Bilal Göregen",
        view: "1.9M",
        dateCreated: "11 months ago",
      },
      {
        title: "Marshmello ft. Bastille - Happier (Official Music Video)",
        thumbnail: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        avatar: "https://i.pravatar.cc/300?id=48",
        user: "Marshmello",
        view: "7.1M",
        dateCreated: "1 months ago",
      },
      {
        title: "Designing with Tailwind CSS: Structuring a Basic Card",
        thumbnail: "https://images.unsplash.com/photo-1452697620382-f6543ead73b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://i.pravatar.cc/300?id=52",
        user: "Adam Wathan",
        view: "2.4M",
        dateCreated: "2 years ago",
      },
      {
        title: "What If Earth got Kicked Out of the Solar System? Rogue Earth What If Earth got Kicked Out of the Solar System? Rogue Earth",
        thumbnail: "https://images.unsplash.com/photo-1607140110438-7a17d182deee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        avatar: "https://i.pravatar.cc/300?id=1",
        user: "Kurzgesagt – In a Nutshell",
        view: "1.2M",
        dateCreated: "1 month ago",
      },
      {
        title: "TIMELAPSE OF THE FUTURE: A Journey to the End of Time (4K)",
        thumbnail: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://i.pravatar.cc/300?id=57",
        user: "melodysheep",
        view: "7.1M",
        dateCreated: "7 months ago",
      },
      {
        title: "Maroon 5 - Sugar (Official Music Video)",
        thumbnail: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://i.pravatar.cc/300?id=11",
        user: "Maroon 5",
        view: "3.3B",
        dateCreated: "3 years ago",
      },
      {
        title: "What If Earth got Kicked Out of the Solar System? Rogue Earth",
        thumbnail: "https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        avatar: "https://i.pravatar.cc/300?id=18",
        user: "Kurzgesagt – In a Nutshell",
        view: "1.2M",
        dateCreated: "1 month ago",
      },
    ],
  },
  getters: {
    sidebarIsOpen: state => {
      return state.sidebarIsOpen
    },
    videos: state => {
      return state.videos
    },
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebarIsOpen = !state.sidebarIsOpen
    },
  },
  actions: {
    toggleSidebar: (context) => {
      context.commit('TOGGLE_SIDEBAR')
    },
  }
});

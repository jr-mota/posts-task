<template>
  <div class="posts-wrapper">
    <the-posts-search v-model="searchText" />
    <the-posts
      :search-text="searchText"
      :page="page"
      :max-view-elems="maxViewElems"
      @update-posts-length="updatePostsLength"
    />
    <the-posts-pagination
      :posts-length="postsLength"
      @update-page="updatePage"
      @update-max-view-elems="updateMaxViewElems"
    />
  </div>
</template>

<script>
import ThePostsSearch from "./ThePostsSearch.vue";
import ThePosts from "./ThePosts.vue";
import ThePostsPagination from "./ThePostsPagination.vue";

import PostsService from "../services/PostsService.js";

export default {
  components: {
    ThePostsSearch,
    ThePosts,
    ThePostsPagination,
  },

  data: () => ({
    searchText: "",
    page: 1,
    maxViewElems: 10,
    postsLength: 0,
  }),

  async mounted() {
    try {
      this.$store.commit("posts/setPosts", await PostsService.findAllPosts());
    } catch (e) {
      console.warn("Api error");
    }
  },

  methods: {
    updateSearchText(searchText) {
      this.searchText = searchText;
    },
    updatePage(page) {
      this.page = page;
    },
    updateMaxViewElems(maxViewElems) {
      this.maxViewElems = maxViewElems;
    },
    updatePostsLength(postsLength) {
      this.postsLength = postsLength;
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-wrapper {
  width: 100%;
  max-width: 1232px;

  padding: 23px 78px 12px 78px;
  margin: 186px auto 24px auto;

  box-shadow: 0px 4px 27px rgba(230, 231, 234, 0.78);
}
</style>
<template>
  <div class="posts-wrapper">
    <the-posts-search />
    <the-posts />
    <the-posts-pagination />
  </div>
</template>

<script>
import ThePostsSearch from "./components/ThePostsSearch.vue";
import ThePosts from "./components/ThePosts.vue";
import ThePostsPagination from "./components/ThePostsPagination.vue";

export default {
  name: "App",

  components: {
    ThePostsSearch,
    ThePosts,
    ThePostsPagination,
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
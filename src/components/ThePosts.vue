<template>
  <div class="posts">
    <div class="posts__header">
      <div class="posts__header-item posts__header-item-1">
        ID
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 330 330"
          style="enable-background: new 0 0 330 330"
          xml:space="preserve"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </div>
      <div class="posts__header-item posts__header-item-2">
        Заголовок
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 330 330"
          style="enable-background: new 0 0 330 330"
          xml:space="preserve"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </div>
      <div class="posts__header-item posts__header-item-3">
        Описание
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 330 330"
          style="enable-background: new 0 0 330 330"
          xml:space="preserve"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </div>
    </div>
    <div class="posts__list">
      <post-item
        v-for="(post, idx) of posts"
        :key="idx"
        :id="post.id"
        :header="post.title"
        :description="post.body"
      />
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";

import PostsService from "../services/PostsService.js";

export default {
  components: {
    PostItem,
  },

  async mounted() {
    try {
      this.$store.commit("posts/setPosts", await PostsService.findAllPosts());
    } catch (e) {
      console.warn("Api error");
    }
  },

  computed: {
    posts() {
      return this.$store.getters["posts/getPosts"];
    },
  },
};
</script>

<style lang="scss" scoped>
.posts {
  &__header {
    display: flex;

    height: 54px;

    background-color: #474955;
  }

  &__header-item {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;

    color: #fff;

    cursor: pointer;

    svg {
      width: 12px;
      height: 12px;

      margin-top: 3px;

      margin-left: 34px;

      path {
        fill: #fff;
      }
    }
  }

  &__header-item-1 {
    flex: 1;
  }
  &__header-item-2 {
    flex: 4;
  }
  &__header-item-3 {
    flex: 5;
  }

  margin-top: 15px;
}
</style>
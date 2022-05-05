<template>
  <div class="posts">
    <div class="posts__header">
      <posts-sort-item
        v-for="(sortElem, idx) of sortItems"
        :key="idx"
        :postKey="sortElem.key"
        :name="sortElem.name"
        :svgToDown="sortElem.key === sortBy && sortUp"
        @click="changeSortBy(sortElem.key)"
      />
    </div>
    <div class="posts__list">
      <post-item
        v-for="(post, idx) of sortedPosts"
        :key="idx"
        :id="post.id"
        :title="post.title"
        :body="post.body"
      />
    </div>
  </div>
</template>

<script>
import PostsSortItem from "./PostsSortItem.vue";
import PostItem from "./PostItem.vue";

import postSort from "../helpers/postSort.js";
import postIncludesText from "../helpers/postIncludesText.js";

export default {
  props: {
    searchText: {
      type: String,
      default: "",
    },
    page: {
      type: Number,
      default: 1,
    },
    maxViewElems: {
      type: Number,
      default: 10,
    },
  },

  emits: {
    "update-posts-length": (postsLength) => typeof postsLength === "number",
  },

  components: {
    PostsSortItem,
    PostItem,
  },

  data: () => ({
    sortItems: [
      { name: "ID", key: "id" },
      { name: "Заголовок", key: "title" },
      { name: "Описание", key: "body" },
    ],

    sortBy: "",
    sortUp: false,
  }),

  methods: {
    changeSortBy(sortBy) {
      this.changeSortUp(this.sortBy, sortBy);

      this.sortBy = sortBy;
    },
    changeSortUp(oldSortBy, newSortBy) {
      if (oldSortBy !== newSortBy && this.sortUp) {
        this.sortUp = true;

        return;
      }

      this.sortUp = !this.sortUp;
    },
  },

  computed: {
    allPosts() {
      return this.$store.getters["posts/getPosts"];
    },
    postsWithSearchedText() {
      if (this.searchText) {
        return this.allPosts.filter((post) =>
          postIncludesText(post, this.searchText)
        );
      } else {
        return this.allPosts;
      }
    },
    paginatedPosts() {
      const start = (this.page - 1) * this.maxViewElems;

      return this.postsWithSearchedText.slice(start, start + this.maxViewElems);
    },
    postsWithFilling() {
      // Если для текущей страницы нет всех 10 (или другого количества) постов,
      // заполняем пустыми, чтобы таблица не прыгала, ну или чтобы было как в макете )

      const paginatedPosts = this.paginatedPosts;

      if (paginatedPosts.length < this.maxViewElems) {
        for (let i = paginatedPosts.length; i < this.maxViewElems; ++i) {
          paginatedPosts.push({});
        }
      }

      return paginatedPosts;
    },
    sortedPosts() {
      if (this.sortBy === "") return this.postsWithFilling;

      return [...this.postsWithFilling].sort((prev, next) =>
        postSort(prev, next, this.sortBy, this.sortUp)
      );
    },
  },

  watch: {
    postsWithSearchedText(newPosts) {
      this.$emit("update-posts-length", newPosts.length);
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

  margin-top: 15px;
}
</style>
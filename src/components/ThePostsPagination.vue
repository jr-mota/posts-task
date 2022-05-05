<template>
  <div class="posts-pagination">
    <button class="posts-pagination__btn" @click="toPrev">Назад</button>
    <div class="posts-pagination__pages">
      <a
        v-for="paginationPage of pagesQuanity"
        :key="paginationPage"
        class="posts-pagination__a"
        :class="{ 'posts-pagination__a_active': paginationPage === page }"
      >
        {{ paginationPage }}
      </a>
    </div>
    <button class="posts-pagination__btn" @click="toNext">Далее</button>
  </div>
</template>

<script>
export default {
  props: {
    postsLength: {
      type: Number,
      default: 0,
    },
  },

  emits: {
    "update-page": (page) => typeof page === "number",
    "update-max-view-elems": (max) => typeof max === "number",
  },

  data: () => ({
    page: 1,
    maxViewElems: 10,
    maxViewPagantionPages: 5,
  }),

  mounted() {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has("page")) {
      this.page = Number(searchParams.get("page"));
    }

    this.$emit("update-page", this.page);
    this.$emit("update-max-view-elems", this.maxViewElems);
  },

  methods: {
    toPrev() {
      if (this.page - 1 > 0) {
        this.page--;

        this.updateQueryParams();

        this.$emit("update-page", this.page);
      }
    },
    toNext() {
      if (this.page + 1 <= this.pagesQuanity) {
        this.page++;

        this.updateQueryParams();

        this.$emit("update-page", this.page);
      }
    },
    updateQueryParams() {
      window.history.pushState(0, 0, "?page=" + this.page);
    },
  },

  computed: {
    pagesQuanity() {
      return Math.ceil(this.postsLength / this.maxViewElems);
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
  padding: 0 41px;

  &__btn {
    font-weight: 500;
    font-size: 24px;

    border: none;
    outline: none;

    background: none;

    cursor: pointer;
  }

  &__a {
    margin-right: 8px;

    font-style: italic;
    font-weight: 700;
    font-size: 18px;
    line-height: 33px;

    &_active {
      color: #7EBC3C;
    }
  }
}
</style>
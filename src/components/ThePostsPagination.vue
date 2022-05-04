<template>
  <div class="posts-pagination">
    <button class="posts-pagination__btn">Назад</button>
    <div class="posts-pagination__pages">
      <a class="posts-pagination__a posts-pagination__a">1</a>
      <a class="posts-pagination__a">2</a>
      <a class="posts-pagination__a">3</a>
      <a class="posts-pagination__a">4</a>
      <a class="posts-pagination__a">5</a>
    </div>
    <button class="posts-pagination__btn">Далее</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1,
  }),

  mounted() {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has("page")) {
      this.page = Number(searchParams.get("page"));
    }
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

    cursor: pointer;

    &_active {
      color: #7EBC3C;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
<template>
  <div class="posts-sort-item" :class="'posts-sort-item_' + postKey">
    <span class="posts-sort-item__name">{{ name }}</span>
    <svg
      class="posts-sort-item__svg"
      :class="{
        'posts-sort-item__svg_down': svgToDown,
      }"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
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
</template>

<script>
export default {
  props: {
    postKey: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    svgToDown: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-sort-item {
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;

  color: #fff;

  padding: 15px 11px 11px 11px;

  cursor: pointer;

  &__name::selection {
    background: transparent;
  }

  &_id {
    flex: 1;
  }

  &_title {
    flex: 5;
  }

  &_body {
    flex: 4;
  }

  &__svg {
    width: 12px;
    height: 12px;

    margin-top: 3px;

    margin-left: 34px;

    &_down {
      transform: rotate(180deg);
    }

    path {
      fill: #fff;
    }
  }
}
</style>
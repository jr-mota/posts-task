<template>
  <article class="post-item">
    <div class="post-item__cell post-item__id">{{ id || "" }}</div>
    <div class="post-item__cell post-item__title">{{ title }}</div>
    <div class="post-item__cell post-item__body">
      {{ body }}
    </div>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.post-item {
  display: flex;
  justify-content: center;

  user-select: red;

  font-weight: 600;

  min-height: 87px;

  &__cell {
    display: flex;
    justify-content: center;

    border: 1px solid #E3E6EC;

    font-weight: 500;
    font-size: 13px;

    padding: 15px 11px 11px 11px;

    color: #474955;
  }

  &__id {
    flex: 1;

    align-items: center;

    border-top: none;
  }

  &__title {
    flex: 5;

    justify-content: flex-start;
    align-items: center;

    border-left: none;
    border-top: none;

    word-break: break-word;
    overflow: hidden;
  }

  &__body {
    flex: 4;

    justify-content: flex-start;

    border-left: none;
    border-top: none;

    word-break: break-word;
    overflow: hidden;
  }
}
</style>
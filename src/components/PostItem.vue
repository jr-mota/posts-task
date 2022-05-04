<template>
  <article class="post-item" :class="{ 'post-item_empty': !id }">
    <div class="post-item__cell post-item__id">{{ id || "" }}</div>
    <div class="post-item__cell post-item__head">{{ header }}</div>
    <div class="post-item__cell post-item__description">
      {{ description }}
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
    header: {
      type: String,
      default: "",
    },
    description: {
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
  align-items: center;

  font-weight: 600;

  height: 87px;

  &_empty {
    height: 56px;
  }

  &__cell {
    min-width: 0;
    height: 100%;

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

  &__head {
    flex: 5;

    justify-content: flex-start;

    border-left: none;
    border-top: none;

    word-break: break-word;
    overflow: hidden;
  }

  &__description {
    flex: 4;

    justify-content: flex-start;

    border-left: none;
    border-top: none;

    word-break: break-word;
    overflow: hidden;
  }
}
</style>
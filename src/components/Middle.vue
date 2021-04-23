<template>
  <div class="middle">
    <div class="middle__top">
      <Focus @category-hover="handleCategoryHover" />
    </div>
    <div class="middle__bottom">
      <text-display :text="displayText" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Focus from '@/components/Focus.vue';
// import Widget from '@/components/Widget.vue';
// import Core from '@/components/Core.vue';
import TextDisplay from '@/components/TextDisplay.vue';

export default defineComponent({
  components: {
    // Widget,
    // Core,
    Focus,
    TextDisplay,
  },
  data() {
    return {
      displayText: 'Good Morning, Sir.',
    };
  },
  methods: {
    handleCategoryHover(category) {
      this.displayText = category;
    },
  },
});
</script>

<style lang="scss" scoped>
.middle {
  display: flex;
  flex-direction: column;

  &__bottom {
    width: 100%;
  }
}
</style>

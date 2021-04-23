<template>
  <div class="core">
    <dashed-circle
      :is-working="working"
      :is-active="active"
    />
    <category-buttons @hover="$emit('category-hover', $event)" />
    <!-- <background :is-active="active" /> -->
    <!-- <rotating-circles :is-active="active" /> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import DashedCircle from '@/components/Core/DashedCircle.vue';
import CategoryButtons from '@/components/Core/CategoryButtons.vue';
// import Widget from '@/components/FocusWidget.vue';
// import Background from '@/components/Core/Background.vue';
// import RotatingCircles from '@/components/Core/RotatingCircles.vue';

export default defineComponent({
  components: {
    DashedCircle,
    CategoryButtons,
    // Widget,
    // Background,
    // RotatingCircles,
  },
  emits: ['category-hover'],
  data() {
    return {
      active: false,
      working: true,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.core {
    height: $core-size + 0px;
    width: $core-size + 0px;
    border-radius: 100%;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
</style>

<template>
  <div class="middle">
    <div class="middle__top">
      <div class="focus">
        <core
          @category-hover="handleCategoryHover"
          @category-click="handleCategoryClick"
        />
        <widget
          :position="{x: -100, y: 100}"
        >
          <span>Upper Left</span>
        </widget>
        <widget
          :position="{x: 100, y: 100}"
        >
          <span>Upper Right</span>
        </widget>
        <widget
          :position="{x: 100, y: -100}"
        >
          <span>Lower Right</span>
        </widget>
        <widget
          :position="{x: -100, y: -150}"
        >
          <span>Lower Left</span>
        </widget>
      </div>
    </div>
    <div class="middle__bottom">
      <text-display :text="displayText" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Widget from '@/components/FocusWidget.vue';
import Core from '@/components/Core.vue';
import TextDisplay from '@/components/TextDisplay.vue';
import { mapState } from 'vuex';

export default defineComponent({
  components: {
    Widget,
    Core,
    TextDisplay,
  },
  data() {
    return {
      displayText: 'Good Morning, Sir.',
      selectedCategory: undefined,
    };
  },
  computed: mapState({
    categories: 'categories',
  }),
  methods: {
    handleCategoryHover(category: any) {
      const defaultDisplayText = 'Good Morning, Sir';
      this.displayText = category ?? this.selectedCategory ?? defaultDisplayText;
    },
    handleCategoryClick(category: any) {
      this.selectedCategory = category;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.middle {
  display: flex;
  flex-direction: column;

  &__bottom {
    width: 100%;
  }
}

.focus {
  position: relative;
  height: $core-size + 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
}
</style>

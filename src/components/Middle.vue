<template>
  <div class="middle">
    <div class="middle__top">
      <div class="focus">
        <core
          @category-hover="handleCategoryHover"
          @category-click="handleCategoryClick"
        />
        <widget
          v-for="widget in selectedCategory?.widgets"
          :key="widget.id"
          :position="widget.position"
        >
          <span>{{ widget.text }}</span>
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
import { Category } from '@/store/interfaces';
import { Guid } from '@/libs/types';

type Data = {
  displayText: string;
  selectedCategory: Category | undefined;
}

export default defineComponent({
  components: {
    Widget,
    Core,
    TextDisplay,
  },
  data(): Data {
    return {
      displayText: 'Good Morning, Sir.',
      selectedCategory: undefined,
    };
  },
  computed: mapState({
    categories: 'categories',
  }),
  methods: {
    handleCategoryHover(text: string) {
      const defaultDisplayText = 'Good Morning, Sir';
      this.displayText = text ?? this.selectedCategory?.name ?? defaultDisplayText;
    },
    handleCategoryClick(id: Guid) {
      this.selectedCategory = this.$store.getters.getCategoryById(id);
      if (this.selectedCategory) {
        this.selectedCategory.widgets[0].position = { x: 0, y: 1 };
      }
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

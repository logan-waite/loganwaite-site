<template>
  <div class="middle">
    <core />
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
      :position="{x: -100, y: -100}"
    >
      <span>Lower Left</span>
    </widget>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Widget from '@/components/Widget.vue';
import Core from '@/components/Core.vue';

export default defineComponent({
  components: {
    Widget,
    Core,
  },
});
</script>

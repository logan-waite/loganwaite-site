<template>
  <div class="category-buttons">
    <icon-button
      v-for="button in buttons"
      :key="button.name"
      :icon="button.icon"
      class="button"
      @mouseenter="$emit('hover', button.name)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconButton from '@/components/UI/IconButton.vue';

type CategoryButton = {
  name: string;
  icon: string;
}

export default defineComponent({
  components: {
    IconButton,
  },
  emits: ['hover'],
  data(): {buttons: CategoryButton[]} {
    return {
      buttons: [
        {
          name: 'Languages',
          icon: 'code',
        },
        {
          name: 'Frameworks',
          icon: 'sitemap',
        },
        {
          name: 'Jobs',
          icon: 'terminal',
        },
        {
          name: 'Overview',
          icon: 'eye',
        },
        {
          name: 'Random',
          icon: 'gamepad-alt',
        },
      ],
    };
  },

});
</script>

<style lang="scss" scoped>
@use 'sass:math' as math;
@import '@/scss/variables';

$radius: ($core-size / 2.5);
$buttons: 5;
$division: 360 / $buttons;

.category-buttons {
  position: absolute;
  height: 100%;
  width: 100%;
}
.button {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -23px;
  margin-top: -23px;
  opacity: 0;

  @for $i from 0 to $buttons {
    $angle: $division * $i + 0deg;
    &:nth-child(#{$i + 1}) {
      animation: power-on .25s linear #{$i / $buttons}s forwards;
      transform: translate(#{$radius * math.sin($angle)}px, #{-($radius * math.cos($angle))}px);
    }
  }
}

@keyframes power-on {
  0% {
    opacity: 0;
    transform: translate(0px,0px)
  }
  50% {
    opacity: 1;
    transform: translate(0px,0px)
  }
  100% {
    opacity: 1;
  }
}
</style>

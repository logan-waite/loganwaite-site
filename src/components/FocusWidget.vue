<template>
  <div
    class="widget-container"
    :style="containerStyles"
  >
    <svg :style="svgStyles">
      <polyline :points="points" />
    </svg>
    <div
      ref="widget"
      class="widget"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, toRefs, ref, onMounted, onUpdated,
} from 'vue';
import { findLinePoints, getSvgDimensions } from '@/libs/widget';
import type { Coords } from '@/libs/widget';
import { clampMin } from '@/libs/helpers';

interface ContainerStyles {
  marginLeft: string;
  marginTop: string;
}

interface SvgStyles {
  height: string;
  width: string;
  bottom?: string;
  top?: string;
  left: string;
}

export default defineComponent({
  props: {
    position: {
      type: Object as PropType<Coords>,
      required: true,
    },
  },
  setup(props) {
    const { position } = toRefs(props);
    const widget = ref<HTMLDivElement | null>(null);
    const distance = {
      x: Math.abs(position.value.x),
      y: Math.abs(position.value.y),
    };

    const containerStyles = ref<ContainerStyles>({ marginTop: '0px', marginLeft: '0px' });
    const svgStyles = ref<SvgStyles>({ height: '0px', width: '0px', left: '0px' });
    const points = ref<string>('');

    onMounted(() => {
      if (widget.value) {
        const svgDimensions = getSvgDimensions(
          distance,
          { x: -position.value.x, y: position.value.y },
          widget.value,
        );

        const line = findLinePoints(
          position.value,
          distance,
          svgDimensions,
          { width: widget.value.offsetWidth + 5, height: widget.value.offsetHeight },
        );

        // Container Styles
        containerStyles.value.marginLeft = `${position.value.x > 0
          ? position.value.x
          : -(widget.value.offsetWidth - position.value.x)}px`;
        containerStyles.value.marginTop = `${-(widget.value.offsetHeight + position.value.y)}px`;

        // SVG Styles
        svgStyles.value.height = `${clampMin(2, svgDimensions.height)}px`;
        svgStyles.value.width = `${svgDimensions.width}px`;
        svgStyles.value.left = `${position.value.x < 0 ? 0 : svgDimensions.left}px`;
        if (position.value.y < 0) {
          svgStyles.value.bottom = `${-widget.value.offsetHeight}px`;
        } else {
          svgStyles.value.top = `${widget.value.offsetHeight}px`;
        }

        // Line points
        points.value = `${line.start.x},${line.start.y} ${line.mid.x},${line.mid.y} ${line.end.x},${line.end.y}`;
      }
    });

    onUpdated(() => {
      if (widget.value) {
        // const svgDimensions = getSvgDimensions(
        //   distance,
        //   { x: position.value.x, y: position.value.y },
        //   widget.value,
        // );
        // const line = findLinePoints(
        //   position.value,
        //   distance,
        //   svgDimensions,
        //   { width: widget.value.offsetWidth, height: widget.value.offsetHeight },
        // );

        // SVG Styles
        // svgStyles.value.height = `${clampMin(2, svgDimensions.height)}px`;
        // svgStyles.value.width = `${svgDimensions.width}px`;
        // svgStyles.value.left = `${svgDimensions.left}px`;
        // if (position.value.y < 0) {
        //   svgStyles.value.bottom = `${-widget.value.offsetHeight}px`;
        // } else {
        //   svgStyles.value.top = `${widget.value.offsetHeight}px`;
        // }

        //     // Line points
        //     points.value =
      // `${line.start.x},${line.start.y} ${line.mid.x},${line.mid.y} ${line.end.x},${line.end.y}`;
      }
    });

    return {
      widget,
      containerStyles,
      svgStyles,
      points,
    };
  },
});
</script>

<style lang="scss" scoped>
  .widget-container {
    position: absolute;
    top: 50%;
    left: 50%;
  }
   polyline {
    stroke-width: 2px;
    fill: none;
    stroke: aqua;
  }
  .widget {
    color: white;
    position: absolute;
    top: 0;
    width: max-content;
  }
   svg {
    position: absolute;
    width: 0px;
    height: 100px;
    // border: 1px solid red;
    pointer-events: none;
  }

</style>

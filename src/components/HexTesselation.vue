<template>
  <div class="hex-tesselation">
    <div class="hex-row">
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
    </div>
    <div class="hex-row">
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
    </div>
    <div class="hex-row">
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
    </div>
    <div class="hex-row">
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
    </div>
    <div class="hex-row">
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
    </div>
    <div class="hex-row">
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
      <hex-tile />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HexTile from '@/components/HexTile.vue';

export default defineComponent({
  components: {
    HexTile,
  },
});
</script>

<style scoped>
  .hex-tesselation {
    /* display: flex; */
    /* flex-wrap: wrap; */
    display: block;
    height: 120%;
    width: 120%;
    margin-left: -10%;
    margin-top: -10%;
  }
  .hex-row {
    width: 100%;
    display: flex;
    margin-bottom: -114px;
  }
  .hex-row:nth-of-type(2n) {
    margin-left: 136px;
  }
</style>

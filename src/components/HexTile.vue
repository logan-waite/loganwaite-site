<template>
  <div class="hex-tile">
    <svg
      class="hexagon"
      viewBox="-1 -1 22 26"
    >
      <!-- <polygon
        points="0,10 6,0 18,0 24,10 18,20 6,20 0,10"
      /> -->
      <polygon
        points="10,0 0,6 0,18 10,24 20,18 20,6 10,0"
      />
    </svg>
  </div>
</template>

<style scoped>
.hex-tile {
  /* border: 1px solid lightblue; */
  height: 360px;
  width: 300px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -27px;
}
.hexagon {
  height: auto;
  width: 100%;
}
.hexagon polygon {
  stroke: rgb(0, 225, 255);
  fill: none;
  stroke-width: .25px;
}
</style>

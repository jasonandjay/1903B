<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<script>
import Viewer from "viewerjs";

export default {
  mounted() {
    let container = this.$refs.container;
    console.log('container...', container);
    const viewer = new Viewer(container, {
    });
    var observer = new MutationObserver(function () {
      viewer.update();
    });
    observer.observe(container, { subtree: true, childList: true });
  },
};
</script>

<style>
</style>
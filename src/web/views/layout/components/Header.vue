<!-- Header -->
<template>
  <div class="app-header">
    <div class="app-header-brand">
      <span>手写JS练习</span>
    </div>
    <div class="app-header-main">
      <span>welcome my lord! :)</span>
    </div>
  </div>
</template>

<script>

export default {
}

</script>

<style lang="scss">
.app-header {
  // background-color: $color-primary;
  color: $color-primary;
  display: flex;
  justify-content: space-between;
  // box-shadow: 1px 1px 6px rgba(0, 0, 0, .4);
}
.app-header-brand {
  font-size: 20px;
  font-weight: 600;
  width: 200px;
  padding: 0 20px;
}
.app-header-main {
  padding: 0 20px;
}
</style>

<template>
  <div class="view-container">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          Sidebar
        </div>
        <div class="col-md-9">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout"
};
</script>

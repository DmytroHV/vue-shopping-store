<template>
  <div class="col-sm-4 col-lg-4 col-md-4 book-list">
    <div class="thumbnail">
      <img :src="phone.image" :alt="phone.name" class="img-thumbnaiil">
      <div class="caption">
        <h4 class="pull-right">{{ phone.price }}</h4>
        <h4>
          {{ phone.name }}
        </h4>
        <p>{{ shortDescription }}</p>
        <p class="itemButton">
          <button class="btn btn-primary">
            Buy Now!
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as R from "ramda";

export default {
  name: "Phone",
  props: {
    phone: {
      type: Object,
      required: true
    }
  },
  computed: {
    shortDescription() {
      return `${R.take(60, this.phone.description)}...`;
    }
  }
};
</script>


<template>
  <div>
    <div class="books row">
      <phone v-for="phone in phones"
        :key="phone.id"
        :phone="phone"
      />
    </div>
  </div>
</template>

<script>
import { store } from "@/store.js";
import Phone from "@/components/Phone.vue";

export default {
  name: "phones",
  components: {
    phone: Phone
  },
  data() {
    return {
      phones: store.state.phones
    };
  },
  methods: {
    loadMorePhones() {}
  },
  mounted() {
    store.fetchPhones();
  }
};
</script>


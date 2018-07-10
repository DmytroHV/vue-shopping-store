import { fetchPhones } from "@/api";
import * as R from "ramda";

export const store = {
  state: {
    phones: {}
  },
  fetchPhones() {
    fetchPhones().then(response => {
      console.log(response);
      const newPhones = R.indexBy(R.prop("id"), response);

      this.state.phones = R.merge(this.state.phones, newPhones);
      console.log(this.state.phones);
    });
  }
};

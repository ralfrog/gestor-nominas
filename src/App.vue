<template>
  {{ user }}
  <router-view />
</template>

<script>
import { onMounted } from "vue";
import { auth } from "./utils/firebase";
import { useStore } from "vuex";

export default {
  name: "App",
  setup() {
    const store = useStore();
    const user = store.state.user;

    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        store.commit("setUser", "Hola");
      });
    });

    return {
      user,
    };
  },
};
</script>

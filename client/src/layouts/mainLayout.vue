<template>
  <div class="app-main-layout">
    <navbar @click="isOpen = !isOpen"/>
    <sidebar v-model="isOpen"/>



    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import navbar from "@/views/app/navbar";
import sidebar from "@/views/app/sidebar";
export default {
  name: "mainLayout",
  data: () => ({
    isOpen: true
  }),
  components: {navbar, sidebar}
}
</script>

<style scoped>

</style>

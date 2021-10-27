<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand> Actors </b-navbar-brand>
      </div>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BNavbar } from "bootstrap-vue";

@Component({
  components: {
    BNavbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>

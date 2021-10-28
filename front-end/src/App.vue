<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand> Actors </b-navbar-brand>
      </div>
    </b-navbar>
    <actor-table />
  </div>
</template>

<script lang="ts">
import ActorTable from "./components/ActorTable.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    ActorTable,
  },
})
export default class App extends Vue {}
</script>

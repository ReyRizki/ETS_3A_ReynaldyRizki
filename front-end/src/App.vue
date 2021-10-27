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

<style lang="scss">
#pagination {
  .page-item {
    .page-link {
      color: #212529;
    }
    &.active {
      .page-link {
        color: white;
        background-color: #212529;
        border-color: #212529;
      }
    }
  }
}
</style>

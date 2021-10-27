<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand> Actors </b-navbar-brand>
      </div>
    </b-navbar>
    <div class="container mt-3">
      <div class="d-flex justify-content-end">
        <b-button variant="dark"> Add Actor </b-button>
      </div>
      <b-table
        id="actor-table"
        striped
        hover
        :fields="fields"
        :items="actors"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #cell(no)="data">
          {{ data.index + 1 }}
        </template>
        <template #cell(actions)="row">
          <div class="d-flex gap-1">
            <b-button size="sm" @click="() => console.log(row)" variant="outline-dark">
              Update
            </b-button>
            <b-button size="sm" @click="() => console.log(row)" variant="dark">
              Delete
            </b-button>
          </div>
        </template>
      </b-table>
      <div class="d-flex justify-content-center">
        <b-pagination
          id="pagination"
          v-model="currentPage"
          :total-rows="actors.length"
          :per-page="perPage"
          aria-controls="actor-table"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BNavbar, BTable, BButton } from "bootstrap-vue";

@Component({
  components: {
    BNavbar,
    BTable,
    BButton,
  },
  data: function () {
    return {
      perPage: 10,
      currentPage: 1,
      fields: ["no", "first_name", "last_name", "actions"],
      actors: [
        { id: 1, first_name: "Dickerson", last_name: "Macdonald" },
        { id: 2, first_name: "Reina", last_name: "Rizka" },
      ],
    };
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

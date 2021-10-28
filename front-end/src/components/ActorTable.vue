<template>
  <div id="table">
    <actor-modal
      title="Add Actor"
      :showModal="showAddModal"
      @toggle-modal="toggleModal('add')"
      @action="addActor"
    />
    <actor-modal
      title="Update Actor"
      :showModal="showUpdateModal"
      :actor="currentActor"
      @action="updateActor"
      @toggle-modal="toggleModal('update')"
    />
    <div class="container mt-3">
      <div class="d-flex justify-content-end">
        <b-button variant="dark" @click="toggleModal('add')"> Add Actor </b-button>
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
            <b-button
              size="sm"
              variant="outline-dark"
              @click="openUpdateModal(row.index)"
            >
              Update
            </b-button>
            <b-button size="sm" @click="deleteActor(row.index)" variant="dark">
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
import ActorModal from "./ActorModal.vue";

@Component({
  components: {
    BNavbar,
    BTable,
    BButton,
    ActorModal,
  },
})
export default class ActorTable extends Vue {
  private perPage = 10;
  private currentPage = 1;
  private fields = ["no", "first_name", "last_name", "actions"];
  private actors = [
    { id: 1, first_name: "Dickerson", last_name: "Macdonald" },
    { id: 2, first_name: "Reina", last_name: "Rizka" },
  ];
  private showAddModal = false;
  private showUpdateModal = false;
  private updateIndex = 0;
  private lastId = 3;

  public deleteActor(index: number): void {
    this.actors.splice(index, 1);
  }

  public toggleModal(name: string): void {
    if (name === "add") {
      this.showAddModal = !this.showAddModal;
    } else if (name === "update") {
      this.showUpdateModal = !this.showUpdateModal;
    }
  }

  public openUpdateModal(index: number) {
    this.updateIndex = index;

    this.toggleModal("update");
  }

  public addActor(firstName: string, lastName: string) {
    this.actors.push({
      id: this.lastId,
      first_name: firstName,
      last_name: lastName,
    });

    this.lastId++;
  }

  public updateActor(firstName: string, lastName: string) {
    const newData = {
      id: this.actors[this.updateIndex].id,
      first_name: firstName,
      last_name: lastName,
    };

    this.actors.splice(this.updateIndex, 1, newData);
  }

  get currentActor(): any {
    return this.actors[this.updateIndex];
  }
}
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

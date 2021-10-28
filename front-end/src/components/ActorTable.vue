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

import axios from "axios";

interface Actor {
  actor_id: number;
  first_name: string;
  last_name: string;
}

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
  private actors : Array<Actor> = [];
  private showAddModal = false;
  private showUpdateModal = false;
  private updateIndex = 0;
  private lastId = 3;

  public deleteActor(index: number): void {
    const deleteIndex = (this.currentPage - 1) * this.perPage + index;
    const actor_id = this.actors[deleteIndex].actor_id;

    axios.delete("http://localhost:3000/actor/" + actor_id).then((response) => {
      console.log(response);
      this.actors.splice(deleteIndex, 1);
    });
  }

  public toggleModal(name: string): void {
    if (name === "add") {
      this.showAddModal = !this.showAddModal;
    } else if (name === "update") {
      this.showUpdateModal = !this.showUpdateModal;
    }
  }

  public openUpdateModal(index: number) {
    this.updateIndex = (this.currentPage - 1) * this.perPage + index;

    this.toggleModal("update");
  }

  public addActor(firstName: string, lastName: string) {
    const newData = {
      first_name: firstName,
      last_name: lastName,
    }

    axios.post("http://localhost:3000/actor/", newData).then((response) => {
      this.actors.push(response.data);
    });
  }

  public updateActor(firstName: string, lastName: string) {
    const actor_id = this.actors[this.updateIndex].actor_id;
    const newData = {
      actor_id: actor_id,
      first_name: firstName,
      last_name: lastName,
    };

    axios.put("http://localhost:3000/actor/" + actor_id, newData).then((response) => {
      this.actors.splice(this.updateIndex, 1, newData);
    });
  }

  get currentActor(): any {
    return this.actors[this.updateIndex];
  }

  beforeMount() {
    axios.get("http://localhost:3000/actor").then((response) => {
      this.actors = response.data;
    });
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

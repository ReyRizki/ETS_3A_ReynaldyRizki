<template>
  <b-modal v-model="showModal" size="lg" centered static>
    <template #modal-header="">
      <h4>{{ title }}</h4>
      <b-button size="sm" variant="outline-dark" @click="hideModal()">
        X
      </b-button>
    </template>
    <template>
      <b-input-group prepend="Name" class="mb-2">
        <b-form-input aria-label="First name" v-model="firstName" />
        <b-form-input aria-label="Last name" v-model="lastName" />
      </b-input-group>
    </template>
    <template #modal-footer="">
      <b-button size="sm" variant="outline-dark" @click="hideModal()">
        Cancel
      </b-button>
      <b-button size="sm" variant="dark" @click="okAction()"> OK </b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { BModal, BButton, BInputGroup, BFormInput } from "bootstrap-vue";

import Actor from "../interfaces/Actor";

@Component({
  components: { BModal, BButton, BInputGroup, BFormInput },
})
export default class ActorModal extends Vue {
  @Prop({ required: true, default: true }) showModal!: boolean;
  @Prop({ required: true }) readonly title!: string;
  @Prop() readonly actor!: Actor;

  private firstName = "";
  private lastName = "";

  hideModal(): void {
    this.$emit("toggle-modal");
  }

  okAction(): void {
    this.$emit("action", this.firstName, this.lastName);

    this.hideModal();
  }

  @Watch("actor")
  actorChanged(newVal: Actor): void {
    if (this.actor) {
      this.firstName = newVal.first_name;
      this.lastName = newVal.last_name;
    }
  }
}
</script>

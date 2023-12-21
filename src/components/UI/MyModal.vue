<template>
  <div class="modal" v-if="isOpen" @click="closeModal">
    <div class="modal__content" @click.stop><slot></slot></div>
  </div>
</template>

<script>
import togglemixin from '@/mixins/togglemixin';
export default {
  name: 'my-modal',
  mixins: [togglemixin],
  // props: {
  //   isOpen: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // methods: {
  //   closeModal() {
  //     this.$emit('close-modal', !this.isOpen);
  //   },
  // },
};
</script>

<style scoped>
.modal {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal__content {
  margin: auto;
  background-color: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>

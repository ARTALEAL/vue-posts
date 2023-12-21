export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close-modal', !this.isOpen);
    },
  },
  mounted() {},
};

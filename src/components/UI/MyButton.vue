<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'MyButton',
};
</script>

<style>
.btn {
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid teal;
  color: teal;
  transition: 0.4s ease;
}
.btn:hover {
  cursor: pointer;
  background-color: teal;
  color: white;
}
</style>

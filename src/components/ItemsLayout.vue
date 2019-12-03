<template>
  <div id="items-layout">
    <div class="row">
      <Items v-for="(item,index) in items" :key="index">
        <h5 class="card-title">{{ item }}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </Items>
    </div>
  </div>
</template>

<script>
import Items from './Items';
export default {
  props: ['items'],
  components: {
    Items,
  }
}
</script>

<style>

</style>

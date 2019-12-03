<template>
  <div id="search">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Search</label>
        <input type="email" class="form-control" v-model="text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
      </div>
    </form>
    <ul>
      <li v-for="(pet, index) in petsArr" :key="index">{{ pet }}</li>
    </ul>
  </div>
</template>

<script>
import { PetMixin } from '../PetMixin.ts';
export default {
  data() {
    return {
      text: '',
    }
  },
  mixins: [PetMixin],
}
</script>

<style>

</style>

<template>
  <div id="create">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Add Text</label>
        <input type="email" class="form-control" v-model="item" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add Text">
        day la : {{item}}
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addLang()">Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      item: '',
    }
  },
  methods: {
    addLang() {
      if(this.item !== '') {
        this.$emit('addItem', this.item);
        this.item = '';
      }
    }
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    Day la result: {{ result}} <br/>
     Day la name result: {{ nameResult}}
     <button @click="abc">clik</button>
    <Create @addItem="addItem"></Create>
    <div class="progress">
      <div class="progress-bar progress-bar-striped bg-info" 
        role="progressbar"
        :style="{width:  (items.length/maxItems)*100 + '%'}" 
        aria-valuenow="50"
        aria-valuemin="0" 
        aria-valuemax="100"></div>
    </div>
    <p v-abc:background.delayed.thuong="'blue'">Xin xhao</p>
    {{((items.length/maxItems)*100) + '%'}}
    {{ abcc | toLowCase }}
    <ItemsLayout :items="items"></ItemsLayout>
    <Search></Search>
    <TestMixin></TestMixin>
  </div>
</template>

<script>
import ItemsLayout from './components/ItemsLayout';
import TestMixin from './components/TestMixin';
import Create from './components/Create';
import Search from './components/Search';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
export default {
  name: 'app',
  data() {
    return {
      items: [],
      maxItems: 10,
      abcc: 'THuong',
    };
  },
  components: {
    ItemsLayout,
    Create,
    Search,
    TestMixin,
  },
  methods: {
    addItem(item) {
      this.items.push(item);      
    },
    ...mapActions(['abc']),

  },
  directives: {
    'abc': {
      bind(el, binding) {
        let delay = 0;
        if(binding.modifiers['thuong']) {
          delay = 3000;
        }

        setTimeout(() => {
          if(binding.arg === 'background') {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      }
    }
  },
  filters: {
    toLowCase(text) {
      return text.toLowerCase();
    }
  },
  computed: {
    ...mapGetters([
      'tenResult',
      'nameResult',
    ]),
    ...mapState([
      'result'
    ]),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

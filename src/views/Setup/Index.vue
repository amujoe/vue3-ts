<template>
  <div class="home">
    <h4>setup 熟悉</h4>
    <SetupOne></SetupOne>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SetupOne from './SetupOne.vue';

@Options({
  components: {
    SetupOne
  },
})

// SetupOne 将在 beforeCreate 之前被调用

export default class Home extends Vue {

    beforeCreate() {
        console.log('beforeCreate');
    }
    

    created() {
        console.log('created');
    }

    beforeMount() {
        console.log('beforeMount');
    }

    mounted() {
        console.log('mounted');
    }

    onBeforeMount() {
        console.log('onBeforeMount');
    }

    onMounted() {
        console.log('onMounted');
    }
}
</script>

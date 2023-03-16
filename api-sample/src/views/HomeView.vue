<script>
import Card from "@/components/Card.vue"
import { useCounterStore }  from '../stores/counter'
import { mapActions, mapWritableState } from "pinia";

export default {
  components: {
    Card
  },

  computed: {
    ...mapWritableState(useCounterStore, ['jobs'])
  },

  methods: {
    ...mapActions(useCounterStore, ['fetchJob'])
  },

  created(){
    this.fetchJob()
  }
}
</script>

<template>
  <div class="container my-4">
    <h1>List Job</h1>
    <div class="row g-3">
      <Card v-for="job in jobs" :key="job.id" :job="job"/>
    </div>
  </div>
</template>

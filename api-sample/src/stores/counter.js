import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // baseUrl: "https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth",
    baseUrl: "http://localhost:3000/jobs",
    jobs: [],
    job: {}
  }),

  actions: {
    async fetchJob() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl
        })

        this.jobs = data
        // console.log(this.jobs, '<<<<<');
      } catch (error) {
        console.log(error);
      }
    },

    async fetchJobById(id){
      try {
        const { data } = await axios({
          method: 'get',
          url: `${this.baseUrl}/${id}`
        })

        this.job = data
        console.log(this.job, '<<<<');
      } catch (error) {
        console.log(error);
      }
    }
  }
})

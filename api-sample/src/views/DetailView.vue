<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default{
    computed: {
        ...mapWritableState(useCounterStore, ['job'])
    },

    methods: {
        ...mapActions(useCounterStore, ['fetchJobById'])
    },

    created(){
        this.fetchJobById(this.$route.params.id)
    }
}
</script>

<template>
    <div class="container" id="login-gate-section">
        <div class="col">
          <div class="text-center mt-5">
            <div>
                {{ job.description.txt }}
            </div>
            <div>
                <p>Skill:</p>
                <ul>
                    <li v-for="skil in job.ptJobSkills" :key="job.ptJobSkills.id">{{ job.ptJobSkills.name }}</li>
                </ul>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-evenly mb-3">
            <div class="col-lg-5 col-md-8 col-sm-12">
                <form id="login-form">
                    <div class="form-floating">
                        <input v-model="name" type="text" class="form-control" id="floatingEmailLog" placeholder="Name" required>
                        <label for="floatingNameLog">Your Name</label>
                    </div>
                    <div class="form-floating mt-4">
                        <input v-model="email" type="email" class="form-control" id="floatingEmailLog" placeholder="name@example.com" required>
                        <label for="floatingEmailLog">Email address</label>
                    </div>
                    <div class="form-floating mt-4">
                        <input v-model="phone" type="number" class="form-control" id="floatingPasswordLog" placeholder="Phone" required>
                        <label for="floatingPhoneLog">Mobile Number</label>
                    </div>
                    <div class="form-floating mt-4">
                        <input v-model="message" type="text" class="form-control" id="floatingPasswordLog" placeholder="Number" required>
                        <label for="floatingMessageLog">Message</label>
                    </div>
        
                    <button class="btn w-100 btn-lg btn-outline-light mt-4">Send</button>
        
                </form>
            </div>
          </div>
        </div>
    </div>
</template>

<style>
    .form-floating:focus-within {
        z-index: 2;
    }
</style>
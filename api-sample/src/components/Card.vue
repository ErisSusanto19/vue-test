<script>
export default{
    props: {
        job: Object
    },

    methods: {
        clickDetail(){
            this.$router.push('/detail/' + this.job.id)
        }
    }

}
</script>

<template>
    <div class="col-6 mb-3">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between mb-3">
                    <p class="text-success">{{ job.title }}</p>
                    <a @click.prevent="clickDetail" class="btn btn-warning">See Job</a>
                </div>
            </div>
        </div>
    </div>
</template>
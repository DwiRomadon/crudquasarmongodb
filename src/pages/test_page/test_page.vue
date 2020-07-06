<template>
  <div></div>
</template>

<script>
export default {
  name: 'test_page',
  methods: {
    onSubmit () {
      delete this.$axios.defaults.headers.common['X-Requested-With']
      this.$axios.get('/integrasiSETWANLAMPUNG.php', {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.onSubmit()
  }
}
</script>

<style scoped>

</style>

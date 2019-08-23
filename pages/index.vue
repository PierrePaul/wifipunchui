<template>
  <section class="container">
    <div class="card">
      <div class="header-img"></div>
      <div class="content">
        <h1>Hi</h1>
        <p>Are you {{user.name}} ?</p>
        <div class="action">
          <nuxt-link to="/help" class="button no">No</nuxt-link>
          <nuxt-link to="/thanks" class="button yes">Yes</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: false
    }
  },
  asyncData({ error, redirect }) {
    return axios
      .get('/mac/mine')
      .then(response => {
        if (!response.data.user) redirect('/help')
        return axios
          .get('/user/' + response.data.user)
          .then(response => {
            return { user: response.data[0] }
          })
          .catch(e => {
            error({
              statusCode: 503,
              message: 'Error getting the user : ' + e
            })
          })
      })
      .catch(e => {
        error({
          statusCode: 503,
          message: 'Error getting my mac address : ' + e
        })
      })
  }
}
</script>

<style scoped>
.header-img {
  background-image: url('~assets/img/hello.jpg');
  background-size: 350%;
  background-position: center center;
}
</style>

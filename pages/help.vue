<template>
  <section class="container">
    <div class="card">
      <div class="header-img"></div>
      <div class="content">
        <h1>Sorry</h1>
        <p>I can't find you. I need a little help</p>
        <div class="action">
          <label id="UserList">User list</label>

          <autocomplete
            class="punchauto"
            :items="userListName"
            aria-labelled-by="UserList"
            v-on:input="setUser( $event )"
            v-on:sendUser="setUser( $event )"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
import autocomplete from '~/components/autocomplete.vue'
export default {
  components: {
    autocomplete
  },
  data() {
    return {
      userList: []
    }
  },
  asyncData({ $axios, redirect }) {
    return $axios.get('http://localhost:5000/user').then(response => {
      return {
        userList: response.data
      }
    })
  },
  methods: {
    async setUser(id) {
      const username = await this.$axios.$post('http://localhost:5000/link', {
        username: id
      })
      this.$router.push({ path: '/thanks' })
    }
  },
  computed: {
    userListName() {
      return this.userList
        .filter(data => {
          return data.name != null && data.name !== undefined
        })
        .map(data => {
          return data.name
        })
    }
  }
}
</script>

<style >
.header-img {
  background-image: url('~assets/img/lost.jpg');
  background-size: 175%;
  background-position: 75% center;
}

label {
  display: none;
}
.punchauto {
  width: 100%;
}
.punchauto input {
  width: 100%;
  display: block;
  height: 40px;
}
</style>

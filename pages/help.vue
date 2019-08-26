<template>
  <section class="container">
    <div class="card">
      <div class="header-img"></div>
      <div class="content">
        <h1>Sorry</h1>
        <p>I can't find you.</p>
        <p>I need a little help.</p>
        <p>What's your e-mail?</p>
        <div class="action">
          <label id="UserList">User list</label>

          <autocomplete
            class="punchauto"
            :items="userListName"
            aria-labelled-by="UserList"
            v-on:input="setUser( $event )"
            v-on:sendUser="setUser( $event )"
            v-on:searchChanged="search = $event"
          />
        </div>
        <button class="send" v-bind:disabled="this.search === ''" v-on:click="setUser(this.search)">Send</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import autocomplete from '~/components/autocomplete.vue'
export default {
  components: {
    autocomplete
  },
  data() {
    return {
        userList: [],
        search: ''
    }
  },
  asyncData({ $axios, redirect }) {
    return axios.get('/user').then(response => {
      return {
        userList: response.data
      }
    }).catch(e => console.error(e))
  },
  methods: {
    async setUser(id) {
      await axios.post('/link', {
        username: id
      });
      this.$router.push({ path: '/thanks' })
    },
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
.send:disabled {
  opacity: 0.5
}
.send {
  background-color: #5cb85c;
  border: 0px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  color: white;
  font-family: 'Open Sans';
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

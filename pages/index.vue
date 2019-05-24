<template>
  <section class="container">
    <div v-if="user" class="card">
      <div class="header-img hello"></div>
      <div class="content">
        <h1>Bonjour</h1>
        <p>Etes-vous bien {{user.name}}</p>
        <div class="action">
          <button class="button no">NON</button>
          <button class="button yes">OUI</button>
        </div>
      </div>
    </div>
    <div v-else class="card">
      <div class="header-img lost"></div>
      <div class="content">
        <h1>Bonjour</h1>
        <p>Désoler mais je n’arrive pas à vous trouver. Aidez-moi s'il vous plaît</p>
        <div class="action">
          <autocomplete
            :items="[ 'Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Peach', 'Grape', 'Tangerine', 'Pineapple']"
            aria-labelled-by="fruitlabel"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserServices from '~/services/UserServices'
import autocomplete from '~/components/autocomplete.vue'
export default {
  components: {
    autocomplete
  },
  data() {
    return {
      user: false
    }
  },
  asyncData() {
    return UserServices.getMe().then(response => {
      return UserServices.getUser(response.data.mine.user).then(response => {
        return { user: response.data[0] }
      })
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}
.card {
  width: 100%;
  min-height: 300px;
  height: auto;
  background: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.header-img {
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  height: 250px;
  background-position: center center;
}
.header-img.hello {
  background-image: url('~assets/img/hello.jpg');
  background-size: 350%;
}
.header-img.lost {
  background-image: url('~assets/img/lost.jpg');
  background-size: 175%;
  background-position: 75% center;
}
.content {
  padding: 20px;
  text-align: left;
}
.card .action {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>

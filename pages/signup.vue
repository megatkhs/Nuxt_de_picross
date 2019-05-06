<template>
  <div>
    <h2>ユーザー登録</h2>
    <form @submit.prevent="addUser">
      <p>
        <label for="name">メールアドレス</label>
        <input id="name" v-model="username" type="email" />
      </p>
      <p>
        <label for="pass">パスワード</label>
        <input id="pass" v-model="password" type="password" />
      </p>
      <p>
        <button type="submit">登録</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    addUser() {
      this.$firebase.auth
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(data => {
          console.log('Creating user is success!')
        })
        .catch(error => {
          console.error(error.message)
        })
    }
  }
}
</script>

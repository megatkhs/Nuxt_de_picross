<template>
  <div>
    <h1>ログインします</h1>
    <form @submit.prevent="addUser">
      <label for="new_username">
        ユーザー名
      </label>
      <input id="new_username" v-model="new_username" type="text" />
    </form>
    <nuxt-link to="/signup">ユーザー登録しよう</nuxt-link>
  </div>
</template>

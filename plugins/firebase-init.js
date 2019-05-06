import Vue from 'vue'

// firebase読み込み
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseui from 'firebaseui'

// firebase設定
const config = {
  apiKey: 'AIzaSyBbg0EJE8X5N7qV-SVEjFeWlcy0j37IHMk',
  authDomain: 'reiwa-doc-firebase.firebaseapp.com',
  databaseURL: 'https://reiwa-doc-firebase.firebaseio.com',
  projectId: 'reiwa-doc-firebase',
  storageBucket: 'reiwa-doc-firebase.appspot.com',
  messagingSenderId: '33311097412',
  appId: '1:33311097412:web:4695fe743a0b770c'
}

// firebase初期化
firebase.initializeApp(config)

Object.defineProperty(Vue.prototype, '$firebase', {
  get() {
    return {
      ui: firebaseui,
      auth: firebase.auth()
    }
  }
})

<template>
  <div>
    <h2 class="text-2xl">新規利用者登録</h2>
    <input
      type="text"
      placeholder="名前を入力"
      v-model="name"
    >
    
    <input
      type="number"
      placeholder="年齢を入力"
      v-model="age"
    >

    <input
      type="number"
      placeholder="性別を入力"
      v-model="gender"
    >

    <button
      class="focus:outline-none"
      @click="publish"
    >
      登録する
    </button>
  </div>
</template>

<script>
import { db } from '@/main'

export default {
  data() {
    return {
      name: '',
      age: '',
      gender: ''
    }
  },
  methods: {
    publish() {
      db.collection('customers').add({
        name: this.name,
        age: this.age,
        gender: this.gender,
      })
      .then((customer) =>
        this.$router.push('/customer/' + this.customer.id),
        alert('利用者新規登録完了'),
        this.name = '',
        this.age = '',
        this.gender = ''
      )
    }
  }
}
</script>
<template>
  <div>
    <h2 class="text-2xl">利用者情報編集</h2>
    <input
      type="text"
      placeholder="名前を入力"
      v-model="customer.name"
    >
    
    <input
      type="number"
      placeholder="年齢を入力"
      v-model="customer.age"
    >

    <input
      type="number"
      placeholder="性別を入力"
      v-model="customer.gender"
    >

    <button
      @click="update"
    >
      編集する
    </button>
  </div>
</template>

<script>
import { db } from '@/main'

export default {
　data() {
    return {
    customer: {}
   }
 },
 firestore() {
   return {
     customer: db.collection('customers').doc(this.$route.params.id)
   }
 },
 methods: {
   update() {
     db.collection('customers').doc(this.customer.id).set({
       name: this.customer.name,
       age: this.customer.age,
       gender: this.customer.gender
     }, {merge: true} )
     .then((customer) =>
       this.$router.push('/customer/' + this.customer.id),
       alert('利用者情報編集しました')
     )
   }
 }
}
</script>
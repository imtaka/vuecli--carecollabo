<template>
  <div>
    <h2>氏名：{{ customer.name }}様</h2>
    <p>年齢：{{ customer.age }}才</p>
    <p>性別：{{ customer.gender }}</p>
  <div>
    <router-link :to=" '/update/' + customer.id ">
           <button>編集する</button>
    </router-link>
  </div>
  <div>
    <button
         @click="remove"
       >利用者を削除する</button>
  </div>
      <router-link :to=" '/customer/' + customer.id +'/careplanhome/'">ケアプラン一覧へ</router-link>

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
      customer: db.collection('customers').doc(this.$route.params.id),
    }
  },
  methods: {
    remove() {
      if (window.confirm('この利用者を削除しますか？')) {
        db.collection('customers').doc(this.$route.params.id).delete()
        .then(
          this.$router.push('/'),
          alert('利用者を削除しました')
        )
      }
    }
  }
}
</script>
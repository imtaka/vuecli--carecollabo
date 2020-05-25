<template>
  <div>
    <h2>{{ customer.name }}様ケアプラン詳細</h2>
      <h2>{{ careplan.create_plan_day }}</h2>
      <h2>{{ careplan.update_plan_day }}</h2>
      <h2>{{ careplan.long_term_goal }}</h2>
      <h2>{{ careplan.short_term_goal }}</h2>
      <h2>{{ careplan.customer_wants }}</h2>
      <h2>{{ careplan.familiy_wants }}</h2>

<div>
    <button
         @click="remove"
       >ケアプランを削除する</button>
  </div>
  </div>
</template>

<script>
import { db } from '@/main'
export default {
data() {
    return {
      careplan: {},
      customer: {}
    }
  },
  firestore() {
    return {
      careplan: db.collection('customers').doc(this.$route.params.id).collection('careplans').doc(this.$route.params.idd),
      customer: db.collection('customers').doc(this.$route.params.id)
    }
  },
  methods: {
    remove() {
      if (window.confirm('このケアプランを削除しますか？')) {
        db.collection('customers').doc(this.$route.params.id).collection('careplans').doc(this.$route.params.idd).delete()
        .then(
          this.$router.push('/customer/:id/careplanhome'),
          alert('ケアプランを削除しました')
        )
      }
    }
  }

}

</script>
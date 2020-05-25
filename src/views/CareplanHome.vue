<template>
  <div class="home">
  <h2>{{ customer.name }}様ケアプラン一覧</h2>
  <ul>
    <li v-for="careplan in careplans" :key="careplan.id">
      <router-link :to=" '/customer/'+ customer.id + '/careplan/' + careplan.id">
      {{ careplan.update_plan_day }}
      </router-link>
      </li>
</ul>

  </div>
</template>

<script>
import { db } from '@/main'

export default{
data() {
    return {
      careplans: [],
      customer: {}
    }
},
firestore(){
  return{
    careplans: db.collection('customers').doc(this.$route.params.id).collection('careplans'),
    customer: db.collection('customers').doc(this.$route.params.id)

  }
}
}
</script>
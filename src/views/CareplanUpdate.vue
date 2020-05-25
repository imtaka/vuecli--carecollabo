<template>
  <div>
    <h2 class="text-2xl">ケアプラン編集</h2>
    <input
      type="date"
      placeholder="ケアプラン作成日を入力"
      v-model="careplan.create_plan_day"
    >
    
    <input
      type="date"
      placeholder="ケアプラン更新日を入力"
      v-model="careplan.update_plan_day"
    >

    <input
      type="text"
      placeholder="長期目標を入力"
      v-model="careplan.long_term_goal"
    >

     <input
      type="text"
      placeholder="短期目標を入力"
      v-model="careplan.short_term_goal"
    >

    <input
      type="text"
      placeholder="本人希望を入力"
      v-model="careplan.customer_wants"
    >

    <input
      type="text"
      placeholder="家族希望を入力"
      v-model="careplan.familiy_wants"
    >

    <input
      type="text"
      placeholder="介護への課題を入力"
      v-model="careplan.care_task"
    >

    <input
      type="text"
      placeholder="介護目標に対する達成状態を入力"
      v-model="careplan.achieved_care_goal"
    >

    <button
      @click="updatecareplan"
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
    careplan: {}
   }
 },
 firestore() {
    return {
    careplan: db.collection('customers').doc(this.$route.params.id).collection('careplans').doc(this.$route.params.idd)
   }
 },
 methods: {
   updatecareplan() {
     db.collection('customers').doc(this.$route.params.id).collection('careplans').doc(this.$route.params.idd).set({
       create_plan_day: this.careplan.create_plan_day,
       update_plan_day: this.careplan.update_plan_day,
       long_term_goal: this.careplan.long_term_goal,
       short_term_goal: this.careplan.short_term_goal,
       customer_wants: this.careplan.customer_wants,
       familiy_wants: this.careplan.familiy_wants,
       care_task: this.careplan.care_task,
       achieved_care_goal: this.careplan.achieved_care_goal
     }, {merge: true} )
     .then((careplan) =>
       this.$router.push('/customer/' + this.customer.id +'/careplan/' + this.careplan.idd),
       alert('ケアプラン編集しました')
     )
   }
 }
}
</script>
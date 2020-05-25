<template>
  <div>
    <h2 class="text-2xl">ケアプラン作成</h2>
    <input
      type="date"
      placeholder="ケアプラン作成日を入力"
      v-model="create_plan_day"
    >
    
    <input
      type="date"
      placeholder="ケアプラン更新日を入力"
      v-model="update_plan_day"
    >

    <input
      type="text"
      placeholder="長期目標を入力"
      v-model="long_term_goal"
    >

     <input
      type="text"
      placeholder="短期目標を入力"
      v-model="short_term_goal"
    >

    <input
      type="text"
      placeholder="本人希望を入力"
      v-model="customer_wants"
    >

    <input
      type="text"
      placeholder="家族希望を入力"
      v-model="familiy_wants"
    >

    <input
      type="text"
      placeholder="介護への課題を入力"
      v-model="care_task"
    >

    <input
      type="text"
      placeholder="介護目標に対する達成状態を入力"
      v-model="achieved_care_goal"
    >

    <button
      @click="publish"
    >
      作成する
    </button>
  </div>
</template>

<script>
import { db } from '@/main'

export default {
  data() {
    return {
    create_plan_day:'',
    update_plan_day:'',
    long_term_goal:'',
    short_term_goal:'',
    customer_wants:'',
    familiy_wants:'',
    care_task:'',
    achieved_care_goal:'',
    }
  },
  methods: {
    publish() {
      let id = String(id)
      db.collection('customers').doc(this.$route.params.id).collection('careplans').add({
        create_plan_day: this.create_plan_day,
        update_plan_day: this.update_plan_day,
        long_term_goal: this.long_term_goal,
        short_term_goal: this.short_term_goal,
        customer_wants: this.customer_wants,
        familiy_wants: this.familiy_wants,
        care_task: this.care_task,
        achieved_care_goal: this.achieved_care_goal
      })
      .then((careplan) =>
        this.$router.push('/customer/' + this.customer.id + '/careplan/' + this.careplan.id),
        alert('ケアプラン作成完了'),
        this.create_plan_day = '',
        this.long_term_goal = '',
        this.short_term_goal = '',
        this.customer_wants = '',
        this.familiy_wants = '',
        this.care_task = '',
        this.achieved_care_goal = '',
      )
    }
  }
}
</script>
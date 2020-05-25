<template>
   <div>
    <router-link :to="'/customer/' + customer.id + '/careplan/ ' + careplan.id">
      <h2>{{ careplan.create_plan_day }}</h2>
      <h2>{{ careplan.update_plan_day }}</h2>
      <h2>{{ careplan.long_term_goal }}</h2>
      <h2>{{ careplan.short_term_goal }}</h2>
      <h2>{{ careplan.customer_wants }}</h2>
      <h2>{{ careplan.familiy_wants }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['careplan']

}
</script>

<style>

</style>
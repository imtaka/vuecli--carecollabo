<template>
  <div>
    <router-link :to=" '/customer/' + customer.id">
      <h2>{{ customer.name }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['customer']
}
</script>
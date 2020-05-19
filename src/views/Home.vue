<template>
  <div class="home">

    <CustomerList v-for="customer in customers"
      :key="customer.id"
      :customer="customer"
    />

  </div>
</template>

<script>
import CustomerList from '@/components/CustomerList'
import { db } from '@/main'
export default {
  name: 'home',
  components: {
    CustomerList
  },
  data() {
    return {
      customers: []
    }
  },
  firestore() {
    return {
      customers: db.collection('customers')
    }
  }
}
</script>

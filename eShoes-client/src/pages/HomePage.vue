<template>
<q-card clickable v-for="product in products" :key="product.id">
    <q-img src="product.imageSrc" />
    <q-card-section>
      {{ product.brand }} {{ product.name }}
    </q-card-section>
</q-card>
</template>

<script>
import { products } from '../produkt'
export default {
    data () {
   return {
       products
   }
},

methods: {
   onClick (product) {
     this.$router.push(`/products/${product.id}`)
   }
}
}
</script>

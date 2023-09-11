<template>
<div class="q-pa-md">
<q-card>
<q-img :src="selectedProduct.imageSrc" />
<q-card-section>
<h3>{{selectedProduct.brand}} {{selectedProduct.name}}</h3>
<p>{{selectedProduct.description}}</p>
<p>Price:</p><h4>{{selectedProduct.price}}</h4>
Size:
<div v-for="(option,index) in selectedSizeOptions" :key=index>
<input type='radio' v-model="selectedIndex" :value='index' >
<label>{{option.size}}</label>
</div>

<button @click="purchaseItem()" class="q-mt-md">Purchase</button>
</q-card-section>

<q-separator />
<h2>Reviews:</h2>
<div v-for="(review,index) in selectedProduct.rating" :key=index >
<h3>{{ review.name }}</h3>
{{ review.reviewText }}
<div v-if='review.rating >= 1'>&#9733;</div>
<div v-if='review.rating >= 2'>&#9733;</div>
<div v-if='review.rating >= 3'>&#9733;</div>
<div v-if='review.rating >= 4'>&#9733;</div>
<div v-if='review.rating ==5 '>&#9733;</div><br/>
</div>
</q-card>
</div>
</template>

<script>
import { products } from '../produkt'
export default {
data () {
return {
selectedSizeOptions: [],
selectedIndex: '',
products
}
},

methods: {
purchaseItem () {
alert('Thank you for your purchase!')
}
},
computed: {
selectedProduct () {
const productId = this.$route.params.id
return this.products.find(p => p.id === productId)
},
getSizeOptions () {
return [...this.selectedProduct.sizeOptions]
},
getSelectedOption () {
return this.selectedIndex || null
}
}
}
</script>

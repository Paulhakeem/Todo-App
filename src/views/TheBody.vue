 <script setup>
import { ref, watch, onMounted } from "vue"

const items = ref([])
   
const newItem = ref("")
const hideCompleteItems = ref(false)
function addItem() {
 items.value.push({id: items.value.length + 1, label: newItem.value})
  
  newItem.value = ""
}
function removeItem(index) {
 items.value.splice(index, 1)
}

watch(items, newItem => {
    localStorage.setItem('items', JSON.stringify(newItem))
  }, {deep: true})

  watch(items, newItem => {
    localStorage.setItem('items', newItem)
  })



  onMounted(() => {
    newItem.value = localStorage.getItem('newItem') || ''
    items.value = JSON.parse(localStorage.getItem('items')) || []
  })

   
</script>

<template>

  <section class="grid md:grid-cols-2 my-6 gap-2 pt-20 ml-6 mr-6 md:grid-cols-2 bg-blend-darken space-x-48 items-center">
  <div class="p-3 pt-36">
    <h2 class="tracking-wide text-4xl font-bold px-3 text-green-400 text-italic tracking-wide prose-slate uppercase dark:tex-green-200">welcome to my todo <span>app</span></h2>

    <div class="p-2 space-y-3">
    <p class="p-2 text-black-300 prose-slate dark:text-white">You can use my app to create any list you want by typing anyword in the input space below and click add.</p>
    </div>
    <div class="text-green-400 pt-2 pb-2 pl-4">
         <button class=" p-2 rounded-full font-semibold w-36 tracking-wide dark:tex-green-200">****</button>
       </div>
  </div>
    <div class="flex-wrap max-w-md md:items-center md:justify-center">
      <img class="rotate-12 " src="../assets/3d.png"/>
    </div>
  </section>
  
  <hr class="text-green-500 font-bold">

  <header>
    <form @submit.prevent="addItem" class="pt-16 justify-center items-center text-center ml-6 mr-6">
      <div class="text-center p-2 m-auto">
        <h2 class="text-green-500 uppercase text-bold text-lg tracking-wide subpixel-antialiased leading-normal">Prepare your list</h2>
        <p class="font-medium tracking-wide subpixel-antialiased leading-relaxed ">Make your own todolist below</p>
      </div>
      <div class="flex pt-4">
        <input v-model="newItem" type="text" class="outline-green-500 w-full border border-1 rounded-md border-gray-300 pl-4 text-gray-400" placeholder="Add your item here..." required>
        <div class="ml-4">
          <button :disabale="items === 0" class="bg-green-400 text-medium appercase text-white rounded-md tracking-wide leading-relaxed">ADD ITEM</button>
        </div>
      </div>
    </form>
    <ul class="p-4 m-4 ml-6 mr-6">
    <li 
      v-for="({id, label}, index) in items" 
      :key="id" 
      class="p-2 m-auto border border-x-1 boder-x-white rounded bg-green-500 text-white font-medium divide-y-2 place-items-start w-full">
       <font-awesome-icon :icon="['fas', 'circle-check']" class="pr-4"/>
      {{label}}
      <button @click="removeItem"><font-awesome-icon :icon="['fas', 'trash-can']" class="pl-4" /></button>
    </li>
  </ul>
    <div class="text-center ml-6 mr-6">
       <p v-if="!items.length" class="italic font-medium text-green-500 tracking-wide">You have empty List!</p>
    </div>
    
  </header>
  
</template>
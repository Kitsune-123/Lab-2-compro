<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const router = useRouter()

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const hasNexPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 3)
  return page.value < totalPages
})
const props = defineProps({
  page: {
    type: Number,
    required: true,
  }
})
const page = computed(() => props.page)
onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(3, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
      .catch(() => {
        router.push({ name: 'network-error-view' })
      })
  })
})
</script>

<template>
  <h1 class="text-xl font-bold mb-4">Events For Good</h1>
  <!-- new element-->
   
  <div class="flex flex-col items-center space-y-4">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="flex w-72 justify-between mt-4">
      <RouterLink 
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        class="text-blue-600 hover:underline text-left"
      >
        &#60; Prev Page
      </RouterLink>

      <RouterLink 
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNexPage"
        class="text-blue-600 hover:underline text-right"
      >
        Next Page >
      </RouterLink>
    </div> 
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Student } from '@/types'

defineProps<{
 student: Student
}>()
</script>

<template>
  <div class="student-class">
    <div class="student-card p-5 w-64 cursor-pointer border border-gray-600 mb-4 hover:scale-105 transform transition-shadow duration-300 shadow-lg">
      <h2 class="text-xl font-bold">{{ student.title }} {{ student.surname }}</h2>
      <p class="text-lg text-gray-700">{{ student.gpa }}</p>
    </div>
  </div>
</template>

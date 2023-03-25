<template>
  <BasePage pageTitle="All Memories">
    <IonList>
      <template
        v-for="memory in memories"
        :key="memory.id"
      >
        <IonItem :router-link="`/memories/${memory.id}`">
          {{ memory.title }}
        </IonItem>
      </template>
    </IonList>
  </BasePage>
</template>

<script setup lang="ts">
import { IonList, IonItem } from '@ionic/vue';
const memories = [
  { id: 1, title: 'A trip to the mountains' },
  { id: 2, title: 'Surfing in the Algarve' },
  { id: 3, title: 'Good Lebanese food' },
  { id: 4, title: 'Summer rave' },
];
</script>

<style scoped></style>

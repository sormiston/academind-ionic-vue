<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle class="ion-padding">{{ pageTitle }}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <slot />
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar } from '@ionic/vue';

const props = defineProps<{ pageTitle: string }>();
</script>

<style scoped></style>

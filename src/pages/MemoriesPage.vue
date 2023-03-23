<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle class="ion-padding">All Memories</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>Jared</IonItem>
        <IonItem>Aleksa</IonItem>
        <IonItem>Kate</IonItem>
        <IonItem>Ana</IonItem>
      </IonList> 
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonList,
  IonItem,
} from "@ionic/vue";
</script>

<style scoped></style>

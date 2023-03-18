<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import SmallCompanyIcon from './icons/IconWave.vue'
import MediumCompanyIcon from './icons/IconTide.vue'
import SkyWhaleIcon from './icons/IconSkyWhale.vue'
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <SmallCompanyIcon />
        </template>
        <template #heading>Helmsman BI Standard: </template>

        <ul>
            <li>Customizable dashboard</li>
            <li>Data integration capabilities</li>
            <li>Reporting and analytics tools</li>
        </ul>
    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <MediumCompanyIcon />
        </template>
        <template #heading>Helmsman BI Premium:</template>

      <ul>
        <li>All features of HelmsmanBI Standard</li>
        <li>Advanced predictive analytics capabilities</li>
        <li>Machine learning algorithms</li>
        <li>Customizable alerts and notifications</li>
      </ul>
    </WelcomeItem>


    <WelcomeItem>
        <template #icon>
            <SkyWhaleIcon />
        </template>
        <template #heading>Sky Whale:</template>

        <ul>
        <li>All features of HelmsmanBI Premium</li>
        <li>Trend identification and analysis</li>
        <li>Market forecasting tools</li>
        <li>Competitor analysis</li>
      </ul>

    </WelcomeItem>
</template>

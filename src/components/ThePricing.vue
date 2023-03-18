<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import SmallCompanyIcon from './icons/SmallCompany.vue'
import MediumCompanyIcon from './icons/MediumCompany.vue'
import LargeCompanyIcon from './icons/LargeCompany.vue'
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <SmallCompanyIcon />
        </template>
        <template #heading>Small Business:</template>

        <ul>
            <li> HelmsmanBI Standard: $99/month for up to 5 users</li>
            <li> HelmsmanBI Premium: $199/month for up to 5 users</li>
            <li> SkyWhale: $299/month for up to 5 users</li>
        </ul>


    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <MediumCompanyIcon />
        </template>
        <template #heading>Medium Business:</template>


        <ul>
            <li> HelmsmanBI Standard: $399/month for up to 20 users</li>
            <li> HelmsmanBI Premium: $799/month for up to 20 users</li>
            <li> SkyWhale: $1,199/month for up to 20 users</li>
        </ul>

    </WelcomeItem>


    <WelcomeItem>
        <template #icon>
            <LargeCompanyIcon />
        </template>
        <template #heading>Large Business:</template>

        <ul>
            <li> HelmsmanBI Standard: $999/month for up to 50 users</li>
            <li> HelmsmanBI Premium: $1,999/month for up to 50 users</li>
            <li> SkyWhale: $2,999/month for up to 50 users</li>
        </ul>


    </WelcomeItem>
</template>

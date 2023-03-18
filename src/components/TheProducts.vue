<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconCompass.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSkyWhale.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Compass View</template>

    A suite of data visualization tools that help you navigate your data and gain insights at a glance.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Sky Whale</template>

    A predictive analytics tool that helps businesses identify emerging trends and anticipate future market shifts. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Helm Dash</template>

    A customizable dashboard that allows you to monitor KPIs and track performance in real-time.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Insight IQ</template>

    A powerful reporting and analytics tool that provides deep insights into your business performance and customer behavior.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Predict Pro</template>

    A predictive analytics tool that helps you forecast trends, identify opportunities, and make data-driven decisions with confidence.
  </WelcomeItem>


</template>

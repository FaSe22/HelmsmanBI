<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconCompass.vue'
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>Welcome</template>
        <br>

        Welcome to Helmsman BI, the leading business intelligence platform for companies of all sizes. <br>

        We are a team of data-driven professionals who are passionate about helping businesses harness the power of data to
        make better decisions and achieve their goals.
        <br><br>
        At Helmsman BI, we believe that data should be accessible and understandable to everyone, regardless of technical
        expertise.
        That's why we've developed a suite of user-friendly products that empower our customers to extract insights from
        their data and use them to drive growth and innovation.

        Our team is comprised of experts in data science, business analytics, and software engineering, who work together to
        create products that are reliable, scalable, and intuitive.
        We're dedicated to staying on the cutting edge of industry trends and using the latest technology to help our
        customers stay ahead of the competition.

        We pride ourselves on our customer service and support, and we're committed to helping our customers succeed.
        Whether you're a small startup or a large enterprise, we have the products and expertise you need to take your
        business to the next level.

        <br><br>
        Thank you for considering Helmsman BI for your business intelligence needs. We look forward to helping you achieve
        your goals and succeed in the digital age.
    </WelcomeItem>


</template>
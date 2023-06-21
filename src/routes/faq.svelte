<script lang="ts">
    import { Faq, FaqItem } from 'flowbite-svelte-blocks';
</script>
  
<h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
Frequently asked questions
</h2>
<Faq>
<div>
    <FaqItem>
    <svelte:fragment slot="h3">What programming languages are you proficient in?</svelte:fragment>
    <p class="text-gray-500 dark:text-gray-400">
        I am proficient in Python, JavaScript, HTML/CSS, 
        and have experience with frameworks such as Vue.js and Flask.
    </p>
    </FaqItem>
    <FaqItem>
    <svelte:fragment slot="h3">Are you experienced in both front-end and back-end development?</svelte:fragment>
    <p class="text-gray-500 dark:text-gray-400">
        Yes, I have experience in both front-end and back-end development.
         I have worked on website design, CSS theming, and JavaScript widgets
        on the front-end, and have handled business logic and database operations
        on the back-end using Python and Postgres.
    </p>
    </FaqItem>
    <FaqItem>
    <svelte:fragment slot="h3">What is your preferred software development methodology?</svelte:fragment>
    <p class="text-gray-500 dark:text-gray-400">
        I am experienced in Agile development methodologies, particularly Scrum, which promotes 
        iterative development and collaboration.
    </p>
    </FaqItem>
</div>
<div>
    <FaqItem>
    <svelte:fragment slot="h3">
        How do you approach problem-solving and debugging?
    </svelte:fragment>
    <p class="text-gray-500 dark:text-gray-400">
        I approach problem-solving and debugging by systematically analyzing the issue,
         utilizing debugging tools, and leveraging my strong analytical skills to identify
          and resolve the root cause of the problem.
    </p>
    </FaqItem>
    <FaqItem>
    <svelte:fragment slot="h3">Have you collaborated with cross-functional teams?</svelte:fragment>
    <p class="text-gray-500 dark:text-gray-400">
        Yes, as a Full Stack Developer, I have collaborated with analysts, designers, and clients to 
        understand project requirements and deliver effective solutions.
    </p>
    </FaqItem>
</div>
</Faq>
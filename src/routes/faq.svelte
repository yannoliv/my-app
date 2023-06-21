<script lang="ts">
import { Faq, FaqItem, Section } from "flowbite-svelte-blocks";

let faqs = [
    {
        "question": "What programming languages are you proficient in?",
        "answer": "I am proficient in Python, JavaScript, HTML/CSS, and have experience with frameworks such as Vue.js and Flask."
    },
    {
        "question": "Are you experienced in both front-end and back-end development?",
        "answer": "Yes, I have experience in both front-end and back-end development. I have experience with front-end frameworks such as Vue.js and React, and back-end frameworks such as Flask and Express.js."
    }

]
</script>


<Section>
    <h2
        class="mb-8 text-4xl font-extrabold text-gray-900 dark:text-white"
    >
        Frequently asked questions
    </h2>

    <div id="accordion-collapse" data-accordion="collapse">

        {#each faqs as { question, answer}, i}

            <h2 id="accordion-collapse-heading-{i}">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span>{question}</span>
                    <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>

            <div id="accordion-collapse-body-{i}" class="hidden" aria-labelledby="accordion-collapse-heading-{1}">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                        {answer}
                    </p>
                </div>
            </div>

        {/each}
    </div>
  
    
</Section>

<Section>
    <Faq>
        <div>
            <FaqItem>
                <svelte:fragment slot="h3"
                    ></svelte:fragment
                >
                <p class="text-gray-500 dark:text-gray-400">
                    
                </p>
            </FaqItem>
            <FaqItem>
                <svelte:fragment slot="h3"
                    ></svelte:fragment
                >
                <p class="text-gray-500 dark:text-gray-400">
                    Yes, I have experience in both front-end and back-end
                    development. I have worked on website design, CSS theming,
                    and JavaScript widgets on the front-end, and have handled
                    business logic and database operations on the back-end using
                    Python and Postgres.
                </p>
            </FaqItem>
            <FaqItem>
                <svelte:fragment slot="h3"
                    >What is your preferred software development methodology?</svelte:fragment
                >
                <p class="text-gray-500 dark:text-gray-400">
                    I am experienced in Agile development methodologies,
                    particularly Scrum, which promotes iterative development and
                    collaboration.
                </p>
            </FaqItem>
        </div>
        <div>
            <FaqItem>
                <svelte:fragment slot="h3">
                    How do you approach problem-solving and debugging?
                </svelte:fragment>
                <p class="text-gray-500 dark:text-gray-400">
                    I approach problem-solving and debugging by systematically
                    analyzing the issue, utilizing debugging tools, and
                    leveraging my strong analytical skills to identify and
                    resolve the root cause of the problem.
                </p>
            </FaqItem>
            <FaqItem>
                <svelte:fragment slot="h3"
                    >Have you collaborated with cross-functional teams?</svelte:fragment
                >
                <p class="text-gray-500 dark:text-gray-400">
                    Yes, as a Full Stack Developer, I have collaborated with
                    analysts, designers, and clients to understand project
                    requirements and deliver effective solutions.
                </p>
            </FaqItem>
        </div>
    </Faq>
</Section>

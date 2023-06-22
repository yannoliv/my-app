<script lang="ts">
import { AccordionItem, Accordion } from 'flowbite-svelte'
import { Faq, FaqItem, Section } from "flowbite-svelte-blocks";

let faqs = [
    {
        "question": "What programming languages are you proficient in?",
        "answer": "I am proficient in Python, JavaScript, HTML/CSS, and have experience with frameworks such as Vue.js and Flask."
    }, {
        "question": "Are you experienced in both front-end and back-end development?",
        "answer": "Yes, I have experience in both front-end and back-end \
                    development. I have worked on website design, CSS theming, \
                    and JavaScript widgets on the front-end, and have handled \
                    business logic and database operations on the back-end using \
                    Python and Postgres."
    }, {
        "question": "What is your preferred software development methodology?",
        "answer": "I am experienced in Agile development methodologies, \
                    particularly Scrum, which promotes iterative development and \
                    collaboration."
    }, {
        "question": "How do you approach problem-solving and debugging?",
        "answer": "I approach problem-solving and debugging by systematically \
                    analyzing the issue, utilizing debugging tools, and \
                    leveraging my strong analytical skills to identify and \
                    resolve the root cause of the problem."
    }, {
        "question": "Have you collaborated with cross-functional teams?",
        "answer": "Yes, as a Full Stack Developer, I have collaborated with \
                    analysts, designers, and clients to understand project \
                    requirements and deliver effective solutions."
    }

]
</script>


<Section>
    <h2
        class="mb-8 text-4xl font-extrabold text-gray-900 dark:text-white"
    >
        Frequently asked questions
    </h2>

    <Accordion>

        {#each faqs as { question, answer}, i}
            <AccordionItem open={i===0}>
                <span slot="header">
                    {question}
                </span>
                <p class="text-gray-500 dark:text-gray-400">
                   {answer}
                </p>
            </AccordionItem>

        {/each}
    </Accordion>
  
    
</Section>

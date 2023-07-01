<script lang="ts">
  import { Section } from "flowbite-svelte-blocks";
  import { Badge, Heading, P } from "flowbite-svelte";
  import Skills from "./skills.svelte";
</script>

<!-- <Section sectionClass="bg-gradient-to-r from-blue-600 to-blue-700 text-white"> -->
<Section>
  <div class="mx-auto container">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2">
      <div class="my-6 lg:mx-12 lg:my-0">
        <Heading tag="h3" customSize="text-xl mb-4">
          Get to know me 👋
        </Heading>
        <P color="text-gray-500 dark:text-gray-400">
          With a broad range of interests, I am a quick learner who approaches
          work with enthusiasm and positivity. My persistence and determination
          in development make me a no-quitter. I value collaboration and open
          communication, and I am always willing to support my colleagues.
          Receptive to feedback, I strive to improve my skills and knowledge. I
          am proactive, analytical, and able to think critically to solve
          problems.
        </P>
      </div>
      <div class="my-6 lg:mx-12 lg:my-0">
        <Heading tag="h3" customSize="text-xl mb-4">
          My favorite skills 💖
        </Heading>
        <Skills />
      </div>
    </div>
  </div>
</Section>

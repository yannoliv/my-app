<script>
  import { GradientButton } from "flowbite-svelte";
  import { HeroHeader, Section } from "flowbite-svelte-blocks";
  import { ArrowRight } from "svelte-heros";
  import HeroSide from "./hero_side.svelte";
  import UndrawCodeThinking from "./undraw_code_thinking.svelte";
</script>

<Section sectionClass="bg-white dark:bg-gray-900 mx-auto container">
  <div class="w-52 md:w-96 mx-auto mb-16">
    <UndrawCodeThinking />
  </div>
  <HeroHeader
    h1Class="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
    pClass="text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
  >
    <svelte:fragment slot="h1">Full stack software developer</svelte:fragment>
    <svelte:fragment slot="paragraph">
      Enthousiastic software engineer with a passion for web development.
    </svelte:fragment>
  </HeroHeader>
</Section>
<!-- Hi, I'm Yannick 😁 -->

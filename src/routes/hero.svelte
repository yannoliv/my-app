<script>
    import { GradientButton } from "flowbite-svelte";
    import { HeroHeader, Section } from "flowbite-svelte-blocks";
    import { ArrowRight } from "svelte-heros";
    import HeroSide from "./hero_side.svelte";
</script>

<Section name="heroVisual">
    <div class="mr-auto place-self-center lg:col-span-7">
        <HeroHeader
            h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
            <svelte:fragment slot="h1">Hi, I'm Yannick 😁</svelte:fragment>
            <svelte:fragment slot="paragraph">
                Enthousiastic software engineer with a passion for web
                development.
            </svelte:fragment>
            <a href="/#contact"
                ><GradientButton
                    size="xl"
                    color="cyanToBlue"
                    class="inline-flex items-center justify-center mr-3"
                    >Let's talk
                    <ArrowRight size="18" class="ml-2 -mr-1" />
                </GradientButton>
            </a>
        </HeroHeader>
    </div>
    <div class="mt-10 lg:mt-0 lg:col-span-5 flex">
        <HeroSide />
    </div>
</Section>

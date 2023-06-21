<script lang="ts">
    import { Banner } from "flowbite-svelte-blocks";
    import { CloseButton } from "flowbite-svelte";
    export let visible = true;
</script>

{#if visible}
    <Banner>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Passively Open for New Challenges! 
            Enthousiast software developer Yannick Olivier welcomes intriguing career prospects.
            <a
                class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                href="/">Reach out</a
            >
            to explore potential collaborations and leverage my skills in full stack development.
        </p>
        <CloseButton
            on:click={() => (visible = false)}
            class="text-gray-400 hover:bg-gray-200
    hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
        />
    </Banner>
{/if}

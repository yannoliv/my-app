<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import anime from "animejs";

    onMount(() => {
        anime({
            targets: ".squares .rounded-lg",
            scale: [
                { value: 0.1, easing: "easeOutSine", duration: 500 },
                { value: 1, easing: "easeInOutQuad", duration: 1200 },
            ],
            delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
        });
    });
</script>
    
<div class="grid grid-cols-12 gap-2 squares">
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg" />
</div>

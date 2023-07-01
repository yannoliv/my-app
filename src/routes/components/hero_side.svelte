<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import anime from "animejs";

  onMount(() => {
      anime({
          targets: ".squares .rounded",
          scale: [
              { value: 0.1, easing: "easeOutSine", duration: 500 },
              { value: 1, easing: "easeInOutQuad", duration: 1200 },
          ],
          delay: anime.stagger(200, { grid: [12, 4], from: "center" }),
      });
  });
</script>
  
<div class="grid grid-cols-12 gap-2 squares h-min">

  <!-- First name -->
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>Y</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>A</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>N</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>N</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>I</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>C</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>K</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>
  
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>

    <!-- Last name-->
    
  <!-- First name -->
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>O</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>L</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>I</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>V</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>I</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>E</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg">
    <b>R</b>
  </div>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>
  
  <div class="w-5 h-5 rounded flex items-center justify-center bg-primary-500 shadow-lg"/>


</div>

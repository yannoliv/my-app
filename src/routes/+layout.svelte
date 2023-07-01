<!-- Homepage framework -->
<script>
  import "../app.css";
  import Footer from "./components/footer.svelte";
  import Navbar from "./components/navbar.svelte";
</script>

<main class="font-mono">
  <div
    class="flex flex-col min-h-screen bg-white dark:bg-gray-900 justify-between"
  >
    <Navbar />
      <div class="sm:py-16 flex space-y-[1em] flex-col">
        <slot />
      </div>
    <Footer />
  </div>
</main>

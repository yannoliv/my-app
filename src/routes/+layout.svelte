<!-- Homepage framework -->
<script>
    import "../app.css";
    import {
        Navbar,
        DarkMode,
    } from "flowbite-svelte";
    import Footer from "./footer.svelte";   
</script>



<main>
    <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <header
            class="sticky top-0 z-40 flex-none mx-auto w-full bg-white dark:bg-gray-900"
        >
            <Navbar >
                <DarkMode initialTheme='dark'/>
            </Navbar>
        </header>

        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <slot />
        </div>
        <Footer/>
    </div>
</main>

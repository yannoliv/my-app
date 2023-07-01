<script>
  import {
    Navbar,
    DarkMode,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    GradientButton,
  } from "flowbite-svelte";
  import { ArrowRight } from "svelte-heros";
  import { page } from "$app/stores";
  //   https://stackoverflow.com/questions/70935314/how-to-add-an-active-class-to-navbar-in-sveltekit
  let activeUrl = "";
  $: activeUrl = $page.url.pathname;
</script>

<header
  class="sticky top-0 z-40 flex-none mx-auto w-full bg-white dark:bg-gray-900"
>
  <Navbar let:hidden let:toggle>
    <NavBrand>
      <DarkMode initialTheme="dark" />
    </NavBrand>
    <div class="flex md:order-2">
      <GradientButton href="/#contact" color="cyanToBlue"
        >Let's talk
        <ArrowRight size="14" class="ml-2" />
      </GradientButton>
      <NavHamburger on:click={toggle} />
    </div>

    <NavUl {hidden} class="order-1">
      <NavLi href="/" active={"/" === activeUrl}>Home</NavLi>
      <NavLi href="/blog" active={"/blog" == activeUrl}>Blog</NavLi>
      <NavLi href="/projects" active={"/projects" == activeUrl}>Projects</NavLi>
    </NavUl>
  </Navbar>
</header>

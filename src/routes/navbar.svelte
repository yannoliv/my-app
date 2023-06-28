<script>
  import {
    Navbar,
      DarkMode,
      NavBrand, 
      NavLi, 
      NavUl, 
      NavHamburger, 
      GradientButton
  } from "flowbite-svelte";
  import { ArrowRight } from "svelte-heros";

</script>


<header
class="sticky top-0 z-40 flex-none mx-auto w-full bg-white dark:bg-gray-900"
>
<Navbar let:hidden let:toggle>
    <NavBrand>
        <DarkMode initialTheme='dark'/>
    </NavBrand>
    <div class="flex md:order-2">
        <GradientButton
            href="/#contact"
            color="cyanToBlue"
            >Let's talk
            <ArrowRight size=14 class="ml-2"/>
        </GradientButton>
        <NavHamburger on:click={toggle} />
    </div>

    <NavUl {hidden} class="order-1">
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/blog">Blog</NavLi>
    </NavUl>
</Navbar>
</header>
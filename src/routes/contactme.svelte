<script lang="ts">
  import { Section, Contact } from "flowbite-svelte-blocks";
  import { Label, Input, Textarea, Button } from "flowbite-svelte";

  let header = "Let's talk 🤝";
  let paragraph =
    "I'd love to hear from you and discuss how we can collaborate.";

  /* TODO: Email sturen laten werken */
</script>

<Section name="contact">
  <div id="contact" />
  <Contact>
    <svelte:fragment slot="h2">
      {header}
    </svelte:fragment>
    <svelte:fragment slot="paragraph">
      {paragraph}
    </svelte:fragment>
    <form class="space-y-8">
      <div>
        <Label for="email" class="block mb-2">Your email</Label>
        <Input
          id="email"
          name="email"
          placeholder="name@placeholder.com"
          required
        />
      </div>
      <div>
        <Textarea
          id="subject"
          name="subject"
          placeholder="Leave a comment..."
          label="Your message"
        />
      </div>
      <Button>Send message</Button>
    </form>
  </Contact>
</Section>

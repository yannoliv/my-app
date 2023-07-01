<script lang="ts">
  import { Section, Contact } from "flowbite-svelte-blocks";
  import { Label, Input, Textarea, Button, Modal } from "flowbite-svelte";
  import { addDoc, serverTimestamp } from "Firebase/firestore/lite";
  import { contactCollection } from "../+server";

  let header = "Let's talk 🤝";
  let paragraph =
    "I'd love to hear from you and discuss how we can collaborate.";

  let emailAddress = "";
  let comment = "";
  let showModal = false;
  let showModalError = false;

  async function createNewEmail() {
    try {
      // TODO: document can not have empty fields.
      if (emailAddress === "" || comment === "") {
        throw new Error("Email address or comment can not be empty");
      }
      await addDoc(contactCollection, {
        email: emailAddress,
        comment: comment,
        timestamp: serverTimestamp(),
      });
      showModal = true;
    } catch (error) {
      console.log(error)
      showModalError = true
    }
  }
</script>

<Section
  name="contact"
  sectionClass="bg-white dark:bg-gray-900 mx-auto container"
>
  <div id="contact" />
  <Contact>
    <svelte:fragment slot="h2">
      {header}
    </svelte:fragment>
    <svelte:fragment slot="paragraph">
      {paragraph}
    </svelte:fragment>
    <form class="space-y-8" on:submit={createNewEmail}>
      <div>
        <Label for="email" class="block mb-2">Your email</Label>
        <Input
          id="email"
          name="email"
          placeholder="name@placeholder.com"
          required
          type="email"
          bind:value={emailAddress}
        />
      </div>
      <div>
        <Textarea
          id="subject"
          name="subject"
          placeholder="Leave a comment..."
          label="Your message"
          required
          bind:value={comment}
        />
      </div>
      <Button type="submit">Send message</Button>
    </form>
  </Contact>
</Section>

<Modal title="Thanks for reaching out!" bind:open={showModal} autoclose outsideclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    I will get back to you as soon as possible.
  </p>
</Modal>
<Modal title="Oops, something went wrong!" bind:open={showModalError} autoclose outsideclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    Something went wrong while trying to send your email. Please try again later.
  </p>
</Modal>
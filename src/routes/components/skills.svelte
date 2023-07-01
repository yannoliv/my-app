<script>

  import { Badge } from "flowbite-svelte";

  var skills1 = [
    "Python", "CSS", "Git", "Odoo", "REST API", "Javascript"
  ]
  var skills2 = [
    "Tailwindcss", "Bootstrap", "Docker", 
    "CI/CD Pipelines", "Data validation", "Neo4j",
    "PostgreSQL", "SQL", "Svelte", "SvelteKit", "TypeScript"
  ]
  var skills3 = [
    "Unit testing", "Java", "C#", "ASP.NET", "Firebase", "Vuejs", "Angular"
  ]

</script>



{#each skills1 as skill}
    <Badge class="text-gray-300 bg-gray-700 mr-1 dark:text-gray-900 dark:bg-gray-200">{skill}</Badge>
{/each}

{#each skills2 as skill}
    <Badge class="text-gray-500 bg-gray-200 mr-1 dark:text-gray-300 dark:bg-gray-800">{skill}</Badge>
{/each}

{#each skills3 as skill}
    <Badge class="text-gray-400 dark:text-gray-500 bg-transparent dark:bg-transparent mr-1">{skill}</Badge>
{/each}
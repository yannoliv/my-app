import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	
	server: {
		watch: {
		  usePolling: true,
		},
		host: true, // needed for the Docker Container port mapping to work
		strictPort: true,
		port: 5173, // you can replace this port with any port
	  }
});

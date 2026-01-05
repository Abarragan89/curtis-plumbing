// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://Abarragan89.github.io/curtis-plumbing',
    base: '/curtis-plumbing',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react()],
});

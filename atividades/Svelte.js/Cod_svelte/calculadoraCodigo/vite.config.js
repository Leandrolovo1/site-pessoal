import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        sveltekit({
            compilerOptions: {
                runes: true // <-- ADICIONE OU CERTIFIQUE-SE DE QUE ESTA AQUI
            }
        })
    ]
});
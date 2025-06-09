<script>
    import Display from '$lib/display.svelte';
    import { numeroVisor } from '$lib/store.js'; // Importa o store
</script>

<main>
    <h1>Calculadora</h1>

    <Display /> 
    
</main>

<style>
    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
        display: flex;
        justify-content: center;
    }
</style>
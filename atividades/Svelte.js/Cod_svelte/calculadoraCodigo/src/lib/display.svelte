<script>
    import { numeroVisor } from '$lib/store.js'; // Importa o store
    import Keyboard from '$lib/keyboard.svelte';
</script>
<main>
    <div class="moldura">
        <input type="text" value={$numeroVisor} readonly> 
        <Keyboard /> 
    </div>
</main>
<style>
    .moldura {
        background: #fff;
        border: 4px solid #ff3e00;
        border-radius: 20px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        padding: 2em 1em 1em 1em;
        margin: 2em auto;
        max-width: 320px;
        height: 350px;
    }
    input {
        font-size: 1.3em;
        padding: 0.5em;
        margin-bottom: 1em;
        border: 2px solid #ff3e00;
        border-radius: 5px;
        text-align: right;
        justify-content: center;
        width: 95%;
        
    }
</style>
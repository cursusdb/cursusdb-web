<script>
    import { onMount, onDestroy } from 'svelte';
    import { slide } from 'svelte/transition';

    let greetings = ['Distributed', 'JSON Based', 'Blazing Fast', 'Open Source'];
    let index = 0;
    let roller;

    onMount(() => {
        roller = setInterval(() => {
            if (index === greetings.length - 1) index = 0;
            else index++;
        }, 2250);
    });

    onDestroy(() => {
        clearInterval(roller);
    });
</script>

{#key index}
    <h1 transition:slide>{greetings[index]}</h1>
{/key}
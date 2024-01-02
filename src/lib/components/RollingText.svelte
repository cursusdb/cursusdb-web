<script>
    import { onMount, onDestroy } from 'svelte';
    import { slide } from 'svelte/transition';
    export let texts;
    export let time;
    let index = 0;
    let roller;

    onMount(() => {
        roller = setInterval(() => {
            if (index === texts.length - 1) index = 0;
            else index++;
        }, time);
    });

    onDestroy(() => {
        clearInterval(roller);
    });
</script>

{#key index}
    <h1 transition:slide style="font-size: 48px;">{texts[index]}</h1>
{/key}

<style>
    @media only screen and (max-width: 500px) {

        h1 {
            font-size: 16px !important;
        }
    }
</style>
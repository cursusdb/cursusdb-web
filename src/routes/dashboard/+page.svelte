<script>

    import {onMount} from "svelte";
    import {goto} from "$app/navigation";
    import {notification, user} from "$lib/stores.js";

    onMount(async() => {
        setTimeout(async () => {
            if ($user === undefined) {

                notification.set({"type": "error", "body": "You must first sign in before accessing your dashboard."})

                setTimeout(async () => {
                    notification.set(undefined)
                }, 4000)
                await goto("./signin")

            }
        }, 250)
    })
</script>



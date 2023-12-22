<script>
    import "$lib/style.css"
    import Navbar from "$lib/components/Navbar.svelte";
    import {onMount} from "svelte";
    import {currentVersionCursus, currentVersionCurode,currentVersionCurush} from '$lib/stores.js'

    onMount(function() {
        currentVersionCursus.set("v1.7.3")
        currentVersionCurode.set("v1.7.3")
        currentVersionCurush.set("v1.1.3")
    })
</script>

<Navbar />
<main>
    <slot />
</main>
<footer>
    <p>&copy; {new Date().getFullYear()} CursusDB, all rights reserved.</p>

    <ul>
        <li><a href="https://github.com/cursusdb">Github</a></li>
        <li><a href="https://linkedin.com/company/cursusdb">Linkedin</a></li>
        <li><a href="https://www.facebook.com/cursusdb">Facebook</a></li>
        <li><a href="https://x.com/cursusdb">X</a></li>
        <li><a href="mailto:product@cursusdb.com">Contact</a></li>
    </ul>

</footer>
<style>
    main {
        padding: 60px 20px;
        min-height: calc(100vh - 60px - 40px);
        display: block;
        width: calc(100% - 40px);
    }

    footer {
        width: 100%;
        text-shadow: 1px 1px rgba(11, 10, 16, 0.2);
        background: rgb(44, 41, 59);
        height: auto;
    }

    footer a, a:visited {
        color: #ffd13b;
        border-color: #ffd13b;
    }

    footer p {
        height: 60px;
        line-height: 60px;
        font-size: 12px;
        color: rgba(255,255,255,0.8);
        text-align: center;
    }

    footer ul {
        max-width: 288px;
        width: 100%;
        margin: 0 auto;
        height: 40px;
        list-style: none;
    }

    footer ul li {
        padding: 10px;
        float: left;
        font-size: 12px;
    }

    @media only screen and (max-width: 430px) {
        footer ul {
            max-width: 278px;
        }
        footer ul li {
            padding-right: 14px;
            font-size: 10px!important;
        }
    }
</style>
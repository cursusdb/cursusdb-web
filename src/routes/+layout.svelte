<script>
    import "$lib/style.css"
    import Navbar from "$lib/components/Navbar.svelte";
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
        <li><a href="">YouTube</a></li>
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
        text-shadow: 1px 1px rgba(0,0,0,0.2);
        background: #2f2f2f;
        height: 100px;
    }

    footer p {
        height: 60px;
        line-height: 60px;
        font-size: 12px;
        color: rgba(255,255,255,0.8);
        text-align: center;
    }

    footer ul {
        width: 188px;
        margin: 0 auto;
        height: 40px;
        list-style: none;
    }

    footer ul li {
        text-align: center;
        padding-right: 10px;
        padding-left: 10px;
        float: left;
        font-size: 12px;
    }
</style>
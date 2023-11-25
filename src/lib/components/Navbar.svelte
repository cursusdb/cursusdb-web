<script>
    import { goto } from '$app/navigation';

    async function navigate(path) {
        await goto(path)
    }
</script>

<nav>
    <h2 on:click={() => navigate("./")} class="brand"> CursusDB</h2>

    <ul>
        <li on:click={() => navigate("/documentation")}>Documentation</li>
        <li on:click={() => navigate("/downloads")}>Downloads</li>
    </ul>
</nav>


<style>
    nav {
        z-index: 1000;
        position: fixed;
        top: 0;
        height: 60px;
        width: calc(100% - 40px);
        background: black;
        color: white;
        line-height: 60px;
        padding-left: 20px;
        padding-right: 20px;
    }

    nav h2 {
        font-size: 18px;
        cursor: pointer;
        float: left;
    }

    nav ul {
        float: right;
    }

    nav ul li {
        color: rgba(255,255,255,0.8);
        padding-left: 10px;
        padding-right: 10px;
        display: inline-block;
        cursor: pointer;
    }

    nav ul li:hover {
        color: rgba(255,255,255,1);
    }
</style>
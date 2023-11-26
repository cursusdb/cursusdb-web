<script>
    import { goto } from '$app/navigation';

    async function navigate(path) {
        await goto(path)
    }
</script>

<nav>
    <h2 on:click={() => navigate("./")} class="brand"><img src="cursusdb.png" width="28" /> CursusDB</h2>

    <ul>
        <li on:click={() => navigate("https://github.com/cursusdb")}>Git</li>
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
        background: #ffd13b;
        color: #332d42;
        line-height: 60px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .brand img {
        float: left;
        margin-top: 14px;
        margin-right: 5px
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
        color: #4f4564;
        padding-left: 10px;
        padding-right: 10px;
        display: inline-block;
        cursor: pointer;
    }

    nav ul li:hover {
        color: #332d42;
    }
</style>
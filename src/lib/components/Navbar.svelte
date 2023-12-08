<script>
    import { goto } from '$app/navigation';

    async function navigate(path) {
        await goto(path)
    }
</script>

<nav>
    <img src="cursusv7-vec.png"/> <h2 on:click={() => navigate("./")} class="brand">CursusDB</h2>

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
        background: white;
        color: rgb(33, 30, 49);
        line-height: 60px;
        padding-left: 20px;
        padding-right: 20px;
    }




    nav img {
        float: left;
        width: 42px;
        margin-top: 8px;
        margin-right: 10px;
        filter: invert(1);
    }

    nav h2 {
        font-size: 22px;
        cursor: pointer;
        float: left;
    }

    nav ul {
        float: right;
    }

    nav ul li {
        color: rgb(110, 106, 122) !important;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 14px;
        display: inline-block;
        cursor: pointer;
    }

    nav ul li:hover {
        color: rgb(33, 30, 49)!important;
    }

    @media only screen and (max-width: 430px) {
        nav ul li {
            font-size: 12px;
            padding-left: 5px;
            padding-right: 5px;
        }

        nav img {
            margin-top: 10px;
        }

        h2.brand {
            display: none;
        }

        .brand {
            font-size: 14px;
        }
    }
</style>
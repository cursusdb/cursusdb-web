<script>
    import { goto } from '$app/navigation';

    async function navigate(path) {
        await goto(path)
    }
</script>
<header>Website is in progress.  Please check the GIT repository for latest documentation for CursusDB <a href="https://github.com/cursusdb/cursusdb">Here</a></header>
<nav>
    <img on:click={() => navigate("./")} src="cursusv7-vec.png"/> <h2 on:click={() => navigate("./")} class="brand">CursusDB</h2>

    <ul>
        <li on:click={() => navigate("https://github.com/cursusdb")}>Git</li>
        <li on:click={() => navigate("/documentation")}>Documentation</li>
        <li on:click={() => navigate("/downloads")}>Downloads</li>
    </ul>
</nav>


<style>
    header {
        top: 0;
        height: 20px;
        position: fixed;
        line-height: 20px;
        font-size: 12px;
        text-align: center;
        z-index: 1000;
        width: 100%;
        background: #ffb0b0;
        color: #2a0c0c;
    }
    nav {
        z-index: 1000;
        position: fixed;
        top: 20px;
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
        cursor: pointer;
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
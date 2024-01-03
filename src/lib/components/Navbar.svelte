<script>
    import { goto } from '$app/navigation';

    let navBind
    let scrollYBind

    async function navigate(path) {
        await goto(path)
    }



    function isScrolling(e) {
        console.log(e)
        if (scrollYBind > 10) {
            navBind.style.background = "white"
        } else {
            navBind.style.background = "none"
        }
    }
</script>
<svelte:window bind:scrollY={scrollYBind}  on:scroll={(e) => isScrolling(e)}></svelte:window>

<nav bind:this={navBind}>
    <img on:click={() => navigate("./")} style="filter: invert(0)" src="cursusdb-vec-v39.png"/> <h2 on:click={() => navigate("./")} class="brand">CursusDB</h2>

    <ul>
        <li class="git" on:click={() => navigate("https://github.com/cursusdb")}><img style="filter: invert(0);margin-top: 22px" src="/GitHub_Logo.png"></li>
        <li on:click={() => navigate("/documentation")}>Documentation</li>
        <li on:click={() => navigate("/downloads")}>Downloads</li>

    </ul>


</nav>

<style>

    .git {
        border: 1px solid black;
        border-radius: 10px;
        margin: 15px 5px 0 0!important;
        padding: 5px!important;
    }

    .git:hover {
        background: lightgray;
    }

    .git img {
        margin: 0!important;
        padding: 0!important;
        width: 48px;
        float: left;
    }

    nav {
        z-index: 1000;
        position: fixed;
        top: 0px;
        height: 60px;
        width: calc(100% - 40px);
        color: rgb(33, 30, 49);
        line-height: 60px;
        padding-left: 20px;
        padding-right: 20px;
    }




    nav img {
        float: left;
        cursor: pointer;
        width: 40px;
        margin-top: 10px;
        margin-right: 10px;
        filter: invert(1);
    }

    nav h2 {
        font-size: 18px!important;
        cursor: pointer;
        color: black;
        float: left;
    }

    nav ul {
        list-style: none;
        float: right;
    }

    nav ul li {
        color: rgb(0,0,0,0.6);
        padding-left: 10px;
        padding-right: 10px;
        font-size: 14px;
        float: left;
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
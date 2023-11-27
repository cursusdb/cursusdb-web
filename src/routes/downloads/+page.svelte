<script>
    let binaries = true; // viewing binary list
</script>
<svelte:head>
    <meta name="keywords" content="database, dbms, json database, object database, document database, opensource database, distributed database">
    <meta name="author" content="CursusDB" />
    <meta name="description" content="CursusDB is an open source scalable distributed in-memory JSON based database with SQL like queries.  Try CursusDB today!">
    <title>Downloads - CursusDB</title>
</svelte:head>

<section>
    <h2>Downloads</h2><br/>
    <ul class="dl-tabs">
        <li on:click={() => binaries = true} class={binaries ? "active-top-tab" : ""}>
            Binaries
        </li>
        <li on:click={() => binaries = false} class={!binaries ? "active-top-tab" : ""}>
            Source
        </li>
    </ul>

    {#if binaries}
        <div>
            <h3>Cursus - CursusDB Cluster</h3><br/>
            <p>Coming soon</p>
        </div>
       <div>
           <h3>Curode - CursusDB Cluster Node</h3><br/>
           <p>Coming soon</p>
       </div>
       <div>
           <h3>Curush - CursusDB Cluster Shell</h3><br/>
           <strong>v1.0.1 Stable</strong><br/><br/>
           <h3>Windows</h3><br/>
           <ul>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/windows/386/curush-v1.0.1-x86.zip">https://downloads.cursusdb.com/curush/v1.0.1/windows/386/curush-v1.0.1-x86.zip</a></li>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/windows/arm64/curush-v1.0.1-x64.zip">https://downloads.cursusdb.com/curush/v1.0.1/windows/arm64/curush-v1.0.1-x64.zip</a></li>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/windows/amd64/curush-v1.0.1-x64.zip">https://downloads.cursusdb.com/curush/v1.0.1/windows/amd64/curush-v1.0.1-x64.zip</a></li>
           </ul><br/>

           <h3>Linux</h3><br/>
           <ul>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/linux/386/curush-v1.0.1-386.tar.gz">https://downloads.cursusdb.com/curush/v1.0.1/linux/386/curush-v1.0.1-386.tar.gz</a></li>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/linux/arm64/curush-v1.0.1-arm64.tar.gz">https://downloads.cursusdb.com/curush/v1.0.1/linux/arm64/curush-v1.0.1-arm64.tar.gz</a></li>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/linux/amd64/curush-v1.0.1-amd64.tar.gz">https://downloads.cursusdb.com/curush/v1.0.1/linux/amd64/curush-v1.0.1-amd64.tar.gz</a></li>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/linux/arm/curush-v1.0.1-arm.tar.gz">https://downloads.cursusdb.com/curush/v1.0.1/linux/amd64/curush-v1.0.1-arm.tar.gz</a></li>
           </ul><br/>


           <h3>Mac OS / Darwin</h3><br/>
           <ul>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/macos-darwin/arm64/curush-v1.0.1-arm64.tar.gz">https://downloads.cursusdb.com/curush/v1.0.1/macos-darwin/arm64/curush-v1.0.1-arm64.tar.gz</a></li>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/macos-darwin/amd64/curush-v1.0.1-amd64.tar.gz">https://downloads.cursusdb.com/curush/v1.0.1/macos-darwin/amd64/curush-v1.0.1-amd64.tar.gz</a></li>
           </ul><br/>

           <h3>Linux</h3><br/>
           <ul>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/freebsd/386/curush-v1.0.1-386.tar.gz">https://downloads.cursusdb.com/curush/v1.0.1/freebsd/386/curush-v1.0.1-386.tar.gz</a></li>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/freebsd/amd64/curush-v1.0.1-amd64.tar.gz">https://downloads.cursusdb.com/curush/v1.0.1/freebsd/amd64/curush-v1.0.1-amd64.tar.gz</a></li>
               <li><a href="https://downloads.cursusdb.com/curush/v1.0.1/freebsd/arm/curush-v1.0.1-arm.tar.gz">https://downloads.cursusdb.com/curush/v1.0.1/freebsd/amd64/curush-v1.0.1-arm.tar.gz</a></li>
           </ul><br/>

           <br/><br/>
       </div>
        {:else}
        <div>
            <h3>CursusDB Github Repository</h3><br/>
            <ul>
                <li><a href="https://github.com/cursusdb/cursus">https://github.com/cursusdb/cursus</a></li>
            </ul>
        </div>
        <div>
            <h3>CursusDB Shell Github Repository</h3><br/>
            <ul>
                <li><a href="https://github.com/cursusdb/curush">https://github.com/cursusdb/curush</a></li>
            </ul>
        </div>
        <div>
            <h3>CursusDB Node.Js Native Client Github Repository</h3><br/>
            <ul>
                <li><a href="https://github.com/cursusdb/cursusdb-node">https://github.com/cursusdb/cursusdb-node</a></li>
            </ul>
        </div>
    {/if}
</section>

<style>

    section {
        max-width: 980px;
        padding: 20px;
        margin: 0 auto;
        text-shadow: 1px 1px rgba(255,255,255,0.4);
        width: calc(100% - 40px);
        padding-bottom: 40px;
    }

    section img {
        width: 100%;
        border-radius: 5px;
    }

    section p {
        line-height: 1.4em;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    ul.dl-tabs {
        list-style: none;
    }

    ul.dl-tabs li {
        display: inline-block;
        padding: 20px;
        cursor: pointer;
    }

    .active-top-tab {
        -webkit-border-top-left-radius: 5px;
        -webkit-border-top-right-radius: 5px;
        -moz-border-radius-topleft: 5px;
        -moz-border-radius-topright: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: rgba(0,0,0,0.15);
    }

    section div {
        padding: 20px;
        background: white;
        border-radius: 5px;
        margin-top: -1px;
    }

    section div ul {
        background: #f3f3f3;
        border-radius: 5px;
        list-style: none;
    }

    section div ul li {
        padding: 10px;
        border-bottom: 1px solid rgba(0,0,0,0.12);
    }

    section div ul li a {
        text-decoration: none;
        border-bottom: none;
        color: rgba(0,0,0,0.78)
    }

    li:last-child {
        border-bottom: none;
    }




</style>
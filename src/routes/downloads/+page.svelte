<script>
    import {currentVersionCursus, currentVersionCurode, currentVersionCurush} from '$lib/stores.js'

    let binaries = true; // viewing binary list
</script>
<svelte:head>
    <title>Downloads - CursusDB</title>
    <meta name="author" content="CursusDB" />
    <meta name="description" content="Download CursusDB software for free today!">
    <meta name="og:title" content="Downloads - CursusDB"/>
    <meta name="og:site_name" content="CursusDB"/>
    <meta name="og:description" content="Download CursusDB software for free today!"/>
    <meta name="keywords" content="database, dbms, document type database, object database, document database, opensource database, distributed database, document dbms, sql like no-sql, acid compliant, unstructured data">

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
            <p>Files are hosted on our regional CDN for high availability and speed.</p><br/>
            <h2>Cursus - CursusDB Cluster</h2><br/>
            <p>{$currentVersionCursus} LATEST</p><br/><br/>
            <h3>Windows</h3><br/>
            <ul>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/windows/386/cursus-${$currentVersionCursus}-x86.zip`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/windows/386/cursus-${$currentVersionCursus}-x86.zip`}</a></li>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/windows/arm64/cursus-${$currentVersionCursus}-x64.zip`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/windows/arm64/cursus-${$currentVersionCursus}-x64.zip`}</a></li>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/windows/amd64/cursus-${$currentVersionCursus}-x64.zip`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/windows/amd64/cursus-${$currentVersionCursus}-x64.zip`}</a></li>
            </ul><br/>

            <h3>Linux</h3><br/>
            <ul>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/linux/386/cursus-${$currentVersionCursus}-386.tar.gz`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/linux/386/cursus-${$currentVersionCursus}-386.tar.gz`}</a></li>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/linux/arm64/cursus-${$currentVersionCursus}-arm64.tar.gz`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/linux/arm64/cursus-${$currentVersionCursus}-arm64.tar.gz`}</a></li>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/linux/amd64/cursus-${$currentVersionCursus}-amd64.tar.gz`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/linux/amd64/cursus-${$currentVersionCursus}-amd64.tar.gz`}</a></li>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/linux/arm/cursus-${$currentVersionCursus}-arm.tar.gz"`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/linux/arm/cursus-${$currentVersionCursus}-arm.tar.gz`}</a></li>
            </ul><br/>


            <h3>Mac OS / Darwin</h3><br/>
            <ul>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/macos-darwin/arm64/cursus-${$currentVersionCursus}-arm64.tar.gz`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/macos-darwin/arm64/cursus-${$currentVersionCursus}-arm64.tar.gz`}</a></li>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/macos-darwin/amd64/cursus-${$currentVersionCursus}-amd64.tar.gz`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/macos-darwin/amd64/cursus-${$currentVersionCursus}-amd64.tar.gz`}</a></li>
            </ul><br/>

            <h3>FreeBSD</h3><br/>
            <ul>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/freebsd/386/cursus-${$currentVersionCursus}-386.tar.gz`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/freebsd/386/cursus-${$currentVersionCursus}-386.tar.gz`}</a></li>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/freebsd/amd64/cursus-${$currentVersionCursus}-amd64.tar.gz`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/freebsd/amd64/cursus-${$currentVersionCursus}-amd64.tar.gz`}</a></li>
                <li><a href={`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/freebsd/arm/cursus-${$currentVersionCursus}-arm.tar.gz`}>{`https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/freebsd/arm/cursus-${$currentVersionCursus}-arm.tar.gz`}</a></li>
            </ul><br/>

            <br/><br/>
        </div>
       <div>
           <h2>Curode - CursusDB Cluster Node</h2><br/>
<!--           only stable releases-->
           <p>{$currentVersionCursus} LATEST</p><br/><br/>
           <h3>Windows</h3><br/>
           <ul>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/windows/386/curode-${$currentVersionCurode}-x86.zip`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/windows/386/curode-${$currentVersionCurode}-x86.zip`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/windows/arm64/curode-${$currentVersionCurode}-x64.zip`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/windows/arm64/curode-${$currentVersionCurode}-x64.zip`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/windows/amd64/curode-${$currentVersionCurode}-x64.zip`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/windows/amd64/curode-${$currentVersionCurode}-x64.zip`}</a></li>
           </ul><br/>

           <h3>Linux</h3><br/>
           <ul>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/linux/386/curode-${$currentVersionCurode}-386.tar.gz`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/linux/386/curode-${$currentVersionCurode}-386.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/linux/arm64/curode-${$currentVersionCurode}-arm64.tar.gz`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/linux/arm64/curode-${$currentVersionCurode}-arm64.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/linux/amd64/curode-${$currentVersionCurode}-amd64.tar.gz`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/linux/amd64/curode-${$currentVersionCurode}-amd64.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/linux/arm/curode-${$currentVersionCurode}-arm.tar.gz`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/linux/tar/curode-${$currentVersionCurode}-arm.tar.gz`}</a></li>
           </ul><br/>


           <h3>Mac OS / Darwin</h3><br/>
           <ul>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/macos-darwin/arm64/curode-${$currentVersionCurode}-arm64.tar.gz`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/macos-darwin/arm64/curode-${$currentVersionCurode}-arm64.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/macos-darwin/amd64/curode-${$currentVersionCurode}-amd64.tar.gz`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/macos-darwin/amd64/curode-${$currentVersionCurode}-amd64.tar.gz`}</a></li>
           </ul><br/>

           <h3>FreeBSD</h3><br/>
           <ul>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/freebsd/386/curode-${$currentVersionCurode}-386.tar.gz`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/freebsd/386/curode-${$currentVersionCurode}-386.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/freebsd/amd64/curode-${$currentVersionCurode}-amd64.tar.gz`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/freebsd/amd64/curode-${$currentVersionCurode}-amd64.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/freebsd/arm/curode-${$currentVersionCurode}-arm.tar.gz`}>{`https://downloads.cursusdb.com/curode/${$currentVersionCurode}/freebsd/arm/curode-${$currentVersionCurode}-arm.tar.gz`}</a></li>
           </ul><br/>

           <br/><br/>
       </div>
       <div>
           <h2>Curush - CursusDB Cluster Shell</h2><br/>
           <p>{$currentVersionCurush} LATEST</p><br/><br/>
           <h3>Windows</h3><br/>
           <ul>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/windows/386/curush-${$currentVersionCurush}-x86.zip`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/windows/386/curush-${$currentVersionCurush}-x86.zip`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/windows/arm64/curush-${$currentVersionCurush}-x64.zip`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/windows/arm64/curush-${$currentVersionCurush}-x64.zip`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/windows/amd64/curush-${$currentVersionCurush}-x64.zip`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/windows/amd64/curush-${$currentVersionCurush}-x64.zip`}</a></li>
           </ul><br/>

           <h3>Linux</h3><br/>
           <ul>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/linux/386/curush-${$currentVersionCurush}-386.tar.gz`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/linux/386/curush-${$currentVersionCurush}-386.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/linux/arm64/curush-${$currentVersionCurush}-arm64.tar.gz`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/linux/arm64/curush-${$currentVersionCurush}-arm64.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/linux/amd64/curush-${$currentVersionCurush}-amd64.tar.gz`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/linux/amd64/curush-${$currentVersionCurush}-amd64.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/linux/arm/curush-${$currentVersionCurush}-arm.tar.gz`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/linux/arm/curush-${$currentVersionCurush}-arm.tar.gz`}</a></li>
           </ul><br/>


           <h3>Mac OS / Darwin</h3><br/>
           <ul>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/macos-darwin/arm64/curush-${$currentVersionCurush}-arm64.tar.gz`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/macos-darwin/arm64/curush-${$currentVersionCurush}-arm64.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/macos-darwin/amd64/curush-${$currentVersionCurush}-amd64.tar.gz`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/macos-darwin/amd64/curush-${$currentVersionCurush}-amd64.tar.gz`}</a></li>
           </ul><br/>

           <h3>FreeBSD</h3><br/>
           <ul>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/freebsd/386/curush-${$currentVersionCurush}-386.tar.gz`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/freebsd/386/curush-${$currentVersionCurush}-386.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/freebsd/amd64/curush-${$currentVersionCurush}-amd64.tar.gz`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/freebsd/amd64/curush-${$currentVersionCurush}-amd64.tar.gz`}</a></li>
               <li><a href={`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/freebsd/arm/curush-${$currentVersionCurush}-arm.tar.gz`}>{`https://downloads.cursusdb.com/curush/${$currentVersionCurush}/freebsd/arm/curush-${$currentVersionCurush}-arm.tar.gz`}</a></li>
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

        <div>
            <h3>CursusDB GO Native Client Github Repository</h3><br/>
            <ul>
                <li><a href="https://github.com/cursusdb/cursusdb-go">https://github.com/cursusdb/cursusdb-go</a></li>
            </ul>
        </div>

        <div>
            <h3>CursusDB Python Native Client Github Repository</h3><br/>
            <ul>
                <li><a href="https://github.com/cursusdb/cursusdb-py">https://github.com/cursusdb/cursusdb-py</a></li>
            </ul>
        </div>

        <div>
            <h3>CursusDB C# Native Client Github Repository</h3><br/>
            <ul>
                <li><a href="https://github.com/cursusdb/cursusdb-cs">https://github.com/cursusdb/cursusdb-cs</a></li>
            </ul>
        </div>

        <div>
            <h3>CursusDB Java Native Client Github Repository</h3><br/>
            <ul>
                <li><a href="https://github.com/cursusdb/cursusdb-java">https://github.com/cursusdb/cursusdb-java</a></li>
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
        border-bottom: 1px solid lightgray;
        margin-bottom: 1px;
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
        -webkit-border-bottom-right-radius: 5px;
        -webkit-border-bottom-left-radius: 5px;
        -moz-border-radius-bottomright: 5px;
        -moz-border-radius-bottomleft: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        margin-top: -1px;
    }

    section div ul {
        background: #f3f3f3;
        border-radius: 5px;
        list-style: none;
    }

    section div ul li {
        padding: 10px;
        word-wrap: break-word;
        overflow: hidden;
        line-height: 1.7em;
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


    div h2 {
        padding-bottom: 10px;
        border-bottom: 1px solid  rgba(0,0,0,0.12);
    }


</style>
<script>
    import RollingText from "$lib/components/RollingText.svelte";
    import Prism from "$lib/components/Prism.svelte";
</script>

<svelte:head>
    <meta name="keywords" content="database, dbms, json database, object database, document database, opensource database, distributed database">
    <meta name="author" content="CursusDB" />
    <meta name="description" content="CursusDB is an open source scalable distributed in-memory JSON based database with SQL like queries.  Try CursusDB today!">
    <title>Documentation - CursusDB</title>
</svelte:head>

<aside>
    <ul>
        <li>Getting Started</li>
<!--        <li>Query Language</li>-->
    </ul>
</aside>

<main>
    <article>
        <h1>Getting Started</h1>
        <h3>Setting Up Cluster</h3>
        <p>First download the latest version of the CursusDB cluster from <a href="/downloads">Here</a> for your operating system.</p>
        <p>Once downloaded Cursus will expect an initial database user to be created upon first start up.</p>
        <Prism language="bash" code={`
./cursus
`}/>
        <img style="filter: invert(1);" src="docs/cluster-setup0.png" /><br/><br/>
        <img style="filter: invert(1);" src="docs/cluster-setup1.png" />

        <p>Now you'll have a .cursusconfig yaml file.</p>
        <Prism language="yaml" code={`
nodes: []
tls-cert: ""
tls-key: ""
tls: false
port: 7681
users:
    - DX8EAQL/gAABDAEQAABO/4AAAwh1c2VybmFtZQZzdHJpbmcMBgAEYWxleAhwYXNzd29yZAZzdHJpbmcMCAAGcGFkdWxhCnBlcm1pc3Npb24Gc3RyaW5nDAQAAlJX
`} header=".cursusconfig"/>

        <p>Your initial user has <strong>RW</strong> which is READWRITE permissions.  You can see in your .cursusconfig that you have a serialized user which is encoded to be stored securely and taking up little room.</p>

        <p>You can choose to start your cluster with tls disabled but it is recommended for connections to be secure.</p>

        <p>The <strong>tls-cert</strong> and <strong>tls-key</strong> values can be populated with the location of your tls key and cert.  You must also make sure to set <strong>tls</strong> to <strong>true</strong></p>

        <p>As the cluster states you must setup at-least one node to use the database system.</p>
        <p>To do that let's have a look below:</p>
        <p>Say I want to start a node locally.</p>
        <Prism language="yaml" code={`
nodes:
    - 0.0.0.0:7682
tls-cert: ""
tls-key: ""
tls: false
port: 7681
users:
    - DX8EAQL/gAABDAEQAABO/4AAAwh1c2VybmFtZQZzdHJpbmcMBgAEYWxleAhwYXNzd29yZAZzdHJpbmcMCAAGcGFkdWxhCnBlcm1pc3Npb24Gc3RyaW5nDAQAAlJX
`} header=".cursusconfig"/>

        <p>You might be thinking ok, but what about the node I don't have it yet.</p>
        <p>Not to worry.  You can download the <strong>curode</strong> which is the Cursus cluster node from <a href="/downloads">Here</a></p>

        <p>Once downloaded simply run</p>
        <Prism language="bash" code={`
./curode
`}/>
        <p>OR</p>
        <Prism language="bash" code={`
./curode -port=YOURPORT
`}/>

        <p>Once your node is running, now you can start your cluster.</p>

        <Prism language="bash" code={`
./cursus
`}/>
        <p>OR</p>
        <Prism language="bash" code={`
./cursus -port=YOURPORT
`}/>
        <img style="filter: invert(1);" src="docs/cluster-setup2.png" />
        <p>Cursus is a parallel type database in regards to distribution.  What that means is you can add multiple nodes and Cursus will query them all simutanuously.</p>

        <h3>Connecting To Cluster</h3>

        <h4>Connect via client package</h4>
        <h4>Node.js</h4>
        <a href="https://www.npmjs.com/package/cursusdb-node">https://www.npmjs.com/package/cursusdb-node</a>

        <br/><br/>
        <h4>Connect via curush (CursusDB Shell Program)</h4>
        <a href="/downloads">Download curush</a>
    </article>
</main>

<style>

    img {
        border: 4px solid rgba(255,255,255,0.1);
        width: 100%;
        border-radius: 5px;
    }

    p {
        line-height: 1.4em;
        padding-bottom: 10px;
        padding-top: 10px;
    }


    article {
        padding: 20px;
    }

    aside {
        -webkit-border-bottom-right-radius: 5px;
        -moz-border-radius-bottomright: 5px;
        border-bottom-right-radius: 5px;
        background: #f1f1f1;
        padding: 20px;
        width: 200px;
        min-height: 100px;
        max-height: calc(100vh - 60px);
        position: sticky;
        z-index: 1000;
        top: 60px;
        left: 0;
        margin-right: 20px;
        margin-bottom: 20px;
        float: left;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }

    aside ul {
        list-style: none;
    }

    aside ul li {
        padding: 10px 5px;
        border-bottom: 1px solid #b7b7b7;
        cursor: pointer;
    }

    aside ul li:hover {
        background:  #b7b7b7;
    }

    aside ul li:last-child {
       border: none;
    }
</style>
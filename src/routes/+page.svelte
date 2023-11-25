<script>
    import RollingText from "$lib/components/RollingText.svelte";
    import Prism from "$lib/components/Prism.svelte";

</script>

<svelte:head>
    <meta name="keywords" content="database, dbms, json database, object database, document database, opensource database, distributed database">
    <meta name="author" content="CursusDB" />
    <meta name="description" content="CursusDB is an open source scalable distributed in-memory JSON based database with SQL like queries.  Try CursusDB today!">
    <title>CursusDB - NoSQL At Scale</title>
</svelte:head>

<br/><br/><figure>
    <h2>NoSQL At Scale </h2>
    <hr/>
    <h1>CursusDB is </h1><RollingText time={2250} texts={['Distributed', 'JSON & SQL Based', 'Blazing Fast', 'Open Source', 'Secure']}/>
</figure>

<section>
    <h2>Getting Started</h2><br/>
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
</section>

<style>
    figure {
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        max-width: 980px;
        border-radius: 10px;
        padding: 20px;
        margin: 0 auto;
        width: calc(100% - 40px);
        background: #f5d327;
        text-shadow: 1px 1px rgba(255,255,255,0.4);
    }

    figure hr {
        outline: none;
        border: none;
        height: 2px;
        background: rgba(0,0,0,0.1);
        margin-top: 5px;
        margin-bottom: 5px;
    }

    figure h1 {
        margin-right: 10px;
        float: left;
    }

    section {
        max-width: 980px;
        padding: 20px;
        margin: 0 auto;
        text-shadow: 1px 1px rgba(255,255,255,0.4);
        width: calc(100% - 40px);
        padding-bottom: 40px;
    }

    section img {
        border: 4px solid rgba(255,255,255,0.1);
        width: 100%;
        border-radius: 5px;
    }

    section p {
        line-height: 1.4em;
        padding-bottom: 10px;
        padding-top: 10px;
    }

</style>
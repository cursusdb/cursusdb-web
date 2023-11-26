<script>
    import RollingText from "$lib/components/RollingText.svelte";
    import Prism from "$lib/components/Prism.svelte";
    import {onMount} from "svelte";
    let searchInput // search bind
    let clientWidth // user client width
    let showAside = false // show aside bool
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';


    function searchKey(event) {
        if (event.ctrlKey && event.key === 'f') {
            event.preventDefault()
            searchInput.focus()
            return false
        }
    }

</script>

<svelte:head>
    <meta name="keywords" content="database, dbms, json database, object database, document database, opensource database, distributed database">
    <meta name="author" content="CursusDB" />
    <meta name="description" content="CursusDB is an open source scalable distributed in-memory JSON based database with SQL like queries.  Try CursusDB today!">
    <title>Documentation - CursusDB</title>
</svelte:head>

<svelte:window bind:innerWidth={clientWidth} on:keydown={(e) => searchKey(e)} />

{#if clientWidth > 746 || showAside}
<aside transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}>
    <input bind:this={searchInput} type="search" placeholder="search docs.. CTRL+f" />
    <ul>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#setting-up-cluster">Setting Up Cluster</a></li>
        <li><a href="#setting-up-node">Setting Up / Starting Node</a></li>
        <li><a href="#connecting-to-cluster">Connecting To Cluster</a></li>
        <li><a href="#tls-with-certbot">Setup TLS With Certbot</a></li>
        <li><a href="#query-language">Query Language</a></li>
    </ul>
</aside>
{/if}

<main>
    <article style={`${clientWidth < 746 ? "padding-left: 0;" : "padding-left: 240px;"}`}>
        {#if clientWidth < 746 }
            <button class="aside-btn" on:click={() => showAside ? showAside = false : showAside = true}><img src="aside-toggle.png" /></button>
        {/if}
        <h1 id="getting-started">Getting Started</h1><br/>
        <h3 id="setting-up-cluster">Setting Up Cluster</h3>
        <p>First download the latest version of the CursusDB cluster from <a href="/downloads">Here</a> for your operating system.</p>
        <p>Once downloaded Cursus will expect an initial database user and key to be created upon first start up.</p>
        <Prism language="bash" code={`
./cursus
`}/>
        <img style="filter: invert(1);" src="docs/cluster-setup0.png" /><br/>

        <p>Now you'll have a .cursusconfig yaml file.</p>
        <Prism language="yaml" code={`
nodes: []
tls-cert: ""
tls-key: ""
tls: false
port: 7681
users:
    - DX8EAQL/gAABDAEQAABO/4AAAwh1c2VybmFtZQZzdHJpbmcMBgAEYWxleAhwYXNzd29yZAZzdHJpbmcMCAAGcGFkdWxhCnBlcm1pc3Npb24Gc3RyaW5nDAQAAlJX
`}/>

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
`} />

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
`}/><br/>


        <h3 id="setting-up-node">Setting up / Starting Node</h3>
        <p>You can choose to start your node with a different port than whats in .curodeconfig using --port flag.</p>
        <img style="filter: invert(1);" src="docs/cluster-setup3.png" /><br/>


        <p>Then when we start cluster</p>
        <img style="filter: invert(1);" src="docs/cluster-setup2.png" />
        <p>Cursus is a parallel type database in regards to distribution.  What that means is you can add multiple nodes and Cursus will query them all simutanuously.</p>



        <h3 id="connecting-to-cluster">Connecting To Cluster</h3><br/>
        <h4>Connect via curush (CursusDB Shell Program)</h4>
        <p><a href="/downloads">Download curush</a></p>

        <p><strong>Connect via native client package:</strong></p>

        <h4>Node.js</h4>
        <a href="https://www.npmjs.com/package/cursusdb-node">https://www.npmjs.com/package/cursusdb-node</a>
        <br/><br/>
        <h4>Python</h4>
        <p>coming soon.</p>
        <h4>Java</h4>
        <p>coming soon.</p>
        <h4>GO</h4>
        <p>coming soon.</p>
        <h4>C#</h4>
        <p>coming soon.</p>
        <br/><br/>

        <br/><h2 id="tls-with-certbot">TLS with Certbot</h2>
        <p><strong>Ubuntu Example</strong></p>
        <p>If you have any Certbot packages installed using an OS package manager like apt, ect, you should remove them before installing the Certbot snap.  This ensures that when you run the command certbot the snap is used rather than the installation from your OS package manager.</p>

<Prism language="bash" code={`
sudo apt-get remove certbot
`}/><br/>
        <p>OR</p>
<Prism language="bash" code={`
sudo dnf remove certbot
`}/><br/>
        <p>OR</p>

<Prism language="bash" code={`
sudo yum remove certbot
`}/><br/>
        <p>Then install certbox</p>
        <Prism language="bash" code={`
sudo snap install --classic certbot
`}/><br/>
        <p>Run the following in your command line to ensure that the certbot command can be run.</p>
        <Prism language="bash" code={`
sudo ln -s /snap/bin/certbot /usr/bin/certbot
`}/><br/>
        <p><strong>Note: Certbot requires ports 80 and 443</strong></p>

        <p>Setup cert for FQDN example <strong>cluster-0.example.com</strong></p>
        <Prism language="bash" code={`
sudo certbot certonly --standalone -d cluster-0.example.com
`}/><br/><br/>
        <Prism language="bash" code={`
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Requesting a certificate for cluster-0.example.com

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/cluster-0.example.com/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/cluster-0.example.com/privkey.pem
This certificate expires on 2024-02-24.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
* Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
* Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
`} />


        <p>Now with your cert and key ready you can setup your <strong>.cursusconfig</strong> and or <strong>.curodeconfig</strong></p>
        <Prism language="yaml" code={`
nodes:
    - 0.0.0.0:7682
tls-cert: "/etc/letsencrypt/live/cluster-0.example.com/fullchain.pem"
tls-key: "/etc/letsencrypt/live/cluster-0.example.com/privkey.pem"
tls: true
port: 7681
users:
    - DX8EAQL/gAABDAEQAABO/4AAAwh1c2VybmFtZQZzdHJpbmcMBgAEYWxleAhwYXNzd29yZAZzdHJpbmcMCAAGcGFkdWxhCnBlcm1pc3Npb24Gc3RyaW5nDAQAAlJX
`} />

        <p>Now when your cluster is secured with TLS every attempt to connect with Curush or a native package you must make sure to enable TLS.</p>

        <Prism language="bash" code={`
 ./curush --host=X --port=X --tls=true
`}/><br/>

        <br/><h2 id="query-language">Query Language</h2>
        <p>CursusDB's Query Language is very similar to that of SQL but some slight modifications.</p>

        <p><strong>Pointers</strong></p>
        <ul>
            <li>End every query with a semi colon.</li>
            <li>Nested objects are not part of CursusDB's search algorithms.</li><br/>
        </ul>
        <h3>Collections</h3>
        <p>When inserting a document to a non-existent collection, the collection will be created on the node.</p>
        <p>A collection is like a labeled cabinet where your documents are stored.</p>


        <h3>Inserting Documents</h3>
        <p>Inserting documents is very easy.  CursusDB takes JSON within the insert's parenthesis like so:</p>
        <Prism language="sql" code={`
insert into users({"name": "Alex", "last": "Lee", "age": 28});
`}/><br/>

        <p>The query above inserts the document into a users collection.  Documents within a collection on CursusDB are unstructured/schemaless meaning I could insert the next document like so:</p>
        <Prism language="sql" code={`
insert into users({"name": "John", "last": "Josh", "age": 28, "tags": ["tag1", "tag2"]});
`}/><br/>

        <p>Specifying new keys no problem!</p>

        <p><strong>What about uniqueness across all nodes?</strong></p>
        <p>CursusDB has this covered.  When inserting a document you can use an exclamation mark after your key name like so: </p>
        <Prism language="sql" code={`
insert into users({"name!": "John", "last": "Josh", "age": 28, "tags": ["tag1", "tag2"]});
`}/><br/>
        <p>Now on insert CursusDB will check every node if there is a document within the users collection with a key of "name" and value of "John".  You can specify multiple unique keys, even within an array!</p>


        <h3>Selecting Documents</h3>
        <Prism language="sql" code={`
select * from users;
select 0,2 from users;
select 2,3 from users;
select 4,5 from users;
select 5,* from users;
select 1 from users where name == 'Alex' || name == 'John';
select * from users where name == 'Alex' && age == 28;
select * from users where tags == "tag1";
select * from users where name == 'Alex' && age == 28 && tags == 'tag1';
`}/><br/>
        <h3>Deleting Documents</h3>
        <Prism language="sql" code={`
delete * from users where age >= 28 || age < 32;
delete 10,* from users where age > 28 && name == 'Alex';
ect
`}/><br/>
        <h3>Updating Documents</h3>
        <Prism language="sql" code={`
update 1 in users where age >= 28 set name = 'Josie';
update * in users where age > 24 && name == 'Alex' set name = 'Josie', age = 52;
update n, n..
ect..
`}/><br/>
    </article>
</main>

<style>
    h1 {
        font-size: 28px;
        color: rgb(53, 41, 80);
    }

    h2 {
        color: rgb(53, 41, 80);
        font-size: 22px!important;
        font-weight: lighter!important;
    }

    h3 {
        color: rgb(53, 41, 80);
        font-weight: lighter;
        font-size: 18px;
    }

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
        max-width: 1080px;
    }

    aside {
        padding: 20px;
        width: 200px;
        height: calc(100vh - 80px);
        position: sticky;
        bottom: 0;
        background: #f1f1f1;
        z-index: 999;
        top: 60px;
        left: 0;
        margin-left: -20px;
        margin-right: 20px;
        margin-bottom: 20px;
        float: left;
        border-right: 1px solid rgba(0,0,0,0.2);
    }

    aside ul {
        list-style: none;
    }

    aside input[type="search"] {
        border: 4px solid rgba(0,0,0,0.2);
        padding: 5px;
        width: calc(100% - 10px);
        font-size: 12px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    aside input[type="search"]:focus {
        border: 4px solid rgba(0,0,0,0.4);
        outline: none;
    }

    img {
        width: 100%;
        max-width: 600px;
    }

    aside ul li {
        padding: 10px 5px;
        border-bottom: 1px solid #dcdcdc;
        cursor: pointer;
    }

    aside ul li:hover {
        background: #dcdcdc;
    }

    aside ul li:last-child {
        border: none;
    }

    .aside-btn {
        z-index: 1000;
        position: fixed;
        top: 0px;
        left: 0px;
        background: #ffd13b;
        outline: none;
        border: none;
        padding: 8px;
        cursor: pointer;
    }

    .aside-btn img {
        opacity: 0.74;
        margin-top: 7px;
        width: 22px;
    }

    article ul {
        padding-left: 28px;
    }

    aside ul li a {
        text-decoration: none;
        border: none;
    }
</style>
<script>
    import RollingText from "$lib/components/RollingText.svelte";
    import Prism from "$lib/components/Prism.svelte";
    import {onMount} from "svelte";
    import {currentVersionCursus, currentVersionCurode, currentVersionCurush} from '$lib/stores.js'

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
    <title>Documentation - CursusDB</title>
    <meta name="author" content="CursusDB" />
    <meta name="description" content="CursusDB is an open source scalable distributed in-memory document oriented database with SQL like queries.  Download CursusDB for free today!">
    <meta name="og:title" content="Documentation - CursusDB"/>
    <meta name="og:site_name" content="CursusDB"/>
    <meta name="og:description" content="CursusDB is an open source scalable distributed in-memory document oriented database with SQL like queries.  Download CursusDB for free today!"/>
    <meta name="keywords" content="database, dbms, document type database, object database, document database, opensource database, distributed database, document dbms, sql like no-sql, acid compliant, unstructured data">

</svelte:head>

<svelte:window bind:innerWidth={clientWidth} on:keydown={(e) => searchKey(e)} />

{#if clientWidth > 746 || showAside}
    <aside transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}>
        <!--    <input on:change|preventDefault={(e) => doSearch(e)} bind:this={searchInput} type="search" placeholder="search docs.. CTRL+f" />-->
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="#getting-started">Getting Started</a></li>
            <li><a href="#downloading">Downloading</a></li>
            <li><a href="#setting-up-cluster">Setting Up Cluster</a></li>
            <li><a href="#setting-up-node">Setting Up / Starting Node</a></li>
            <li><a href="#connecting-to-cluster">Connecting To Cluster</a></li>
            <li><a href="#tls-with-certbot">Setup TLS With Certbot</a></li>
            <li><a href="#query-language">Query Language</a></li>
            <li><a href="#adding-database-users">Adding/Deleting Database Users</a></li>
            <li><a href="#removing-database-users">Delete key within collection of documents</a></li>
            <li><a href="#removing-database-users">Status Codes</a></li>
            <li><a href="#removing-database-users">Logging</a></li>
            <li><a href="#removing-database-users">Automatic Node Read Replicating/Synchronization</a></li>
            <li><a href="#removing-database-users">Automatic Node Backups</a></li>
            <li><a href="#removing-database-users">Automatic Node Backup Cleanup</a></li>
            <li><a target="_blank" href="https://github.com/cursusdb/cursusdb-rest-api-template">REST API Boilerplate Node.JS</a></li>
        </ul>
    </aside>
{/if}

<main>
    <article style={`${clientWidth < 746 ? "padding-left: 0;" : "padding-left: 240px;"}`} >
        {#if clientWidth < 746 }
            <button class="aside-btn" on:click={() => showAside ? showAside = false : showAside = true}><img src="aside-toggle.png" /></button>
        {/if}
        <h1>CursusDB Documentation</h1><br/>
        <h2 id="getting-started">Getting Started</h2><br/>
        <p>CursusDB was designed to be setup securely within a couple minutes.  Let's go through a couple thing's before you indulge.</p>

        <p>There are no databases like MySQL let's say where you can have multiples. A cluster <strong>is your database</strong> that has many collections and that spreads data across many nodes.</p>

        <p>So what do you need to run the most basic CursusDB database?  A cluster and 1 node.  A cluster in these parts is called <strong>Cursus</strong> whilst the node is called <strong>Curode</strong>.  They are happy to meet you.</p>

        <p>When you download the binaries and run them succesfully for the first time you will get a <strong>.cursusconfig</strong> and a <strong>.curodeconfig</strong> which are your cluster and node configurations.  They are in yaml format and don't contain anything critical in plain sight.  User details and key's are hashed and encoded within config files.</p>

        <h3>Configuration files</h3><br/>

        <h4>Cluster config .cursusconfig</h4><br/>
        <ul>
            <li><strong>nodes</strong> - database cluster nodes. i.e an ip/fqdn + port combination (host: cluster1.example.com port: 7682)</li>
            <li><strong>tls-node</strong> - whether the cluster will connect to nodes via tls</li>
            <li><strong>tls-cert</strong> - path to your tls cert for cluster</li>
            <li><strong>tls-key</strong> - path to your tls key for cluster</li>
            <li><strong>tls</strong> - enable or disable tls</li>
            <li> <strong>port</strong> - cluster port</li>
            <li><strong>key</strong> - encoded shared key. (Key is hashed)</li>
            <li><strong>users</strong> - array of database users serialized, and encoded.</li>
            <li> <strong>node-reader-size</strong> - the max size of a response from a node</li>
            <li><strong>join-responses</strong> - join all node responses and limit based on provided n</li>
            <li><strong>logging</strong> - start logging to file</li>
            <li><strong>timezone</strong> - default is Local but format allowed is for example America/Toronto</li>
            <li><strong>log-query</strong> - logs client ip and their query to logs and std out if enabled</li>
            <li><strong>node-read-deadline</strong> - amount of time in seconds to wait for a node to respond</li>
        </ul><br/>

        <h4>Cluster node config .curodeconfig</h4><br/>
        <ul>
            <li><strong>replicas</strong> - node read replicas</li>
            <li><strong>tls-cert</strong> - path to your tls cert for cluster</li>
            <li><strong>tls-key</strong> - path to your tls key for cluster</li>
            <li><strong>tls</strong> - enable or disable tls</li>
            <li> <strong>port</strong> - cluster port</li>
            <li><strong>key</strong> - encoded shared key (Key is hashed)</li>
            <li><strong>max-memory</strong> - max allowed memory for node,  default is 10gb</li>
            <li><strong>logging</strong> - start logging to file</li>
            <li><strong>timezone</strong> - default is Local but format allowed is for example America/Toronto</li>
            <li><strong>replication-sync-time</strong> - how often to sync to read replica;  default is 10 minutes
            <li><strong>tls-replication</strong> - connect to read replicas via tls</li>
            <li><strong>automatic-backups</strong> - if enabled node will start backing up to backups folder within executing location
            <li><strong>automatic-backup-time</strong> - how often to backup default is 60 minutes</li>
            <li><strong>automatic-backup-cleanup</strong> - automatic backup clean up ever 12 hours by default if enabled</li>
            <li><strong>automatic-backup-cleanup-hours</strong> - how often to clean backups directory of old backups.  will remove everything older than specified hours</li>
        </ul><br/>

        <p>If you set tls-node on the cluster to true the cluster will expect all nodes to be listening on tls.</p>
        <p>If you set tls-replication on a cluster node to true the cluster node will expect all node replicas to be listening on tls.</p>

        <p>Now that you understand a bit of the configuration let's download the binaries and setup a database.</p>

        <p>Remember default cluster port is 7681 and default cluster node port is 7682.<p></p>

        <p>Also, when inserting a document to a non-existent collection, the collection will be created on the node.</p>
        <p>A collection is like a labeled cabinet where your documents are stored.</p>


        <h3 id="downloading">Downloading</h3><br/>
        <p>You can download the CursusDB cluster and node stable binaries from <a href="/downloads">Here</a></p>

        <h4>Ubuntu amd64 example</h4>
        <p><strong>Cursus</strong> - CursusDB Cluster</p>
        <Prism language="bash" code={`
wget https://downloads.cursusdb.com/cursus/${$currentVersionCursus}/linux/amd64/cursus-${$currentVersionCursus}-amd64.tar.gz
tar -xzvf cursus-${$currentVersionCursus}-amd64.tar.gz
`}/>

        <p><strong>Curode</strong> - CursusDB Cluster Node</p>
        <Prism language="bash" code={`
wget https://downloads.cursusdb.com/curode/${$currentVersionCurode}/linux/amd64/curode-${$currentVersionCurode}-amd64.tar.gz
tar -xzvf curode-${$currentVersionCursus}-amd64.tar.gz
`}/>

        <p><strong>Curush</strong> - CursusDB Cluster Shell</p>
        <Prism language="bash" code={`
wget https://downloads.cursusdb.com/curush/${$currentVersionCurush}/linux/amd64/curush-${$currentVersionCurush}-amd64.tar.gz
tar -xzvf curush-${$currentVersionCurush}-amd64.tar.gz
`}/>
        <p><small>Whats shown above are latest stable versions of all software!</small></p>
        <p>On windows download the .exe's and run them through Powershell or CMD.</p>
        <h3 id="setting-up-cluster">Setting Up Cluster</h3>
        <p>First download the latest version of the CursusDB cluster from <a href="/downloads">Here</a> for your operating system.</p>
        <p>Once downloaded Cursus will expect an initial database user and key to be created upon first start up.</p>
        <Prism language="bash" code={`
./cursus
`}/>
        <img style="border-radius: 10px" src="docs1.png" /><br/>

        <p>Now you'll have a .cursusconfig yaml file.</p>

        <img style="border-radius: 10px" src="docs2.png" /><br/>

        <img style="border-radius: 10px" src="docs3.png" /><br/>

        <p>Your initial user has <strong>RW</strong> which is READWRITE permissions.  You can see in your .cursusconfig that you have a serialized user which is encoded to be stored securely and taking up little room.</p>

        <p>You can choose to start your cluster with tls disabled but it is recommended for connections to be secure.</p>

        <p>The <strong>tls-cert</strong> and <strong>tls-key</strong> values can be populated with the location of your tls key and cert.  You must also make sure to set <strong>tls</strong> to <strong>true</strong></p>

        <p>As the cluster states you must setup at-least one node to use the database system.</p>
        <p>To do that let's have a look below:</p>
        <p>Say I want to start a node locally.</p>
        <Prism language="yaml" code={`
nodes:
    - host: 0.0.0.0
      port: 7682
      replicas: # if you want the node to have read replicas
        - host: 0.0.0.0 # only if you want the node to have read replicas
          port: 7683 # only if you want the node to have read replicas
tls-cert: ""
tls-key: ""
tls: false
port: 7681
users:
    - DX8EAQL/gAABDAEQAABO/4AAAwh1c2VybmFtZQZzdHJpbmcMBgAEYWxleAhwYXNzd29yZAZzdHJpbmcMCAAGcGFkdWxhCnBlcm1pc3Npb24Gc3RyaW5nDAQAAlJX
`} />

        <img style="border-radius: 10px" src="docs4.png" /><br/>

        <p>You might be thinking ok, but what about the node I don't have it yet.</p>
        <p>Not to worry.  You can download the <strong>curode</strong> which is the Cursus cluster node from <a href="/downloads">Here</a> if you haven't already.</p>

        <p>If you tried to run the cluster when any node is unavailable you will get the below result:</p>
        <img style="border-radius: 10px" src="docs5.png" /><br/>
        <p>Once downloaded simply run</p>
        <Prism language="bash" code={`
./curode
`}/>
        <p>OR</p>
        <Prism language="bash" code={`
./curode -port=YOURPORT
`}/>

        <img style="border-radius: 10px" src="docs6.png" /><br/>

        <p>Once your node is running, now you can start your cluster.</p>

        <Prism language="bash" code={`
./cursus
`}/>
        <p>OR</p>
        <Prism language="bash" code={`
./cursus -port=YOURPORT
`}/><br/>

        <img style="border-radius: 10px" src="docs7.png" /><br/>


        <p>Fantastic!  Now it's time to learn some CDQL(Cursus Document Query Language) ✍️✍️</p>


        <h3 id="connecting-to-cluster">Connecting To Cluster</h3><br/>
        <h4>Connect via curush (CursusDB Shell Program)</h4>
        <p><a href="/downloads">Download curush</a></p>

        <p><strong>Connect via native client package:</strong></p>

        <h4>Node.js</h4>
        <p> <a href="https://www.npmjs.com/package/cursusdb-node">https://www.npmjs.com/package/cursusdb-node</a></p>
        <h4>Python</h4>
        <p><a href="https://github.com/cursusdb/cursusdb-py">https://github.com/cursusdb/cursusdb-py</a></p>
        <h4>Java</h4>
        <p><a href="https://github.com/cursusdb/cursusdb-java">https://github.com/cursusdb/cursusdb-java</a></p>
        <h4>GO</h4>
        <p><a href="https://github.com/cursusdb/cursusdb-go">https://github.com/cursusdb/cursusdb-go</a></p>
        <h4>C#</h4>
        <p><a href="https://github.com/cursusdb/cursusdb-cs">https://github.com/cursusdb/cursusdb-cs</a></p>
        <br/>


        <h2 id="query-language">Query Language</h2><br/>
        <h4>CDQL - Cursus Document Query Language</h4><br/>
        <p>CursusDB's Query Language is very similar to that of SQL.</p>

        <p><strong>Pointers</strong></p>
        <ul>
            <li>End every query with a semi colon.</li>
            <li>Nested objects are not part of CursusDB's search algorithms.</li><br/>
        </ul>


        <h4>Ping the cluster</h4>
        <Prism language="sql" code={`
ping;
`}/><br/>
        <h4>Inserting Documents</h4>
        <p>Inserting documents is very easy.  CursusDB takes JSON within the insert's parenthesis like so:</p>
        <Prism language="sql" code={`
insert into users({"name": "Alex", "last": "Lee", "age": 28});
`}/><br/>

        <Prism language="sql" code={`
insert into pos({"x": 4, "y": 5});
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

        <h4>Selecting Documents</h4>
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

        <h4>Deleting Documents</h4>
        <Prism language="sql" code={`
delete * from users where age >= 28 || age < 32;
delete 10,* from users where age > 28 && name == 'Alex';
ect
`}/><br/>
        <h4>Updating Documents</h4>
        <Prism language="sql" code={`
update 1 in users where age >= 28 set name = 'Josie';
update * in users where age > 24 && name == 'Alex' set name = 'Josie', age = 52;
update n, n..
ect..
`}/><br/>

        <h4>Counting</h4>

        <p>Response not joined</p>
        <Prism language="sql" code={`
select count from users where $id == "099ade86-93a8-4703-abdd-d1ccc1078b1d";
`}/><br/>
        <Prism language="sql" code={`
[{"127.0.0.1:7682": [{"count":1}]}]
`}/><br/>

        <p>Response joined if each node has 1 match and there is 5 nodes</p>
        <Prism language="sql" code={`
{"count":5}
`}/><br/>



        <h4>Pattern Matching</h4><br/>
        <h5>LIKE</h5>
        <p>Starts with 'A'</p>
        <Prism language="sql" code={`
select * from users where firstName like 'A%lex Padula'
`}/><br/>

        <p>Ends with 'la'</p>
        <Prism language="sql" code={`
 select * from users where firstName like 'Alex Padu%la'
`}/><br/>

        <p>Contains 'Pad'</p>
        <Prism language="sql" code={`
select * from users where firstName like 'Alex %Pad%ula'
`}/><br/>


        <h5>NOT LIKE</h5>
        <p>Starts with 'A'</p>
        <Prism language="sql" code={`
select * from users where firstName not like 'A%lex Padula'
`}/><br/>

        <p>Ends with 'la'</p>
        <Prism language="sql" code={`
select * from users where firstName not like 'Alex Padu%la'
`}/><br/>

        <p>Contains 'Pad'</p>
        <Prism language="sql" code={`
select * from users where firstName not like 'Alex %Pad%ula'
`}/><br/>

        <h4>Sorting</h4>
        <Prism language="sql" code={`
select * from posts order by createdOn desc;
`}/><br/>

        <br/><h3 id="adding-database-users">Adding Database Users</h3>
        <p>CursusDB has 2 permissions R(read) and (RW). RW can select, insert, delete, update and add new users whereas users with just R can only read.</p>
        <Prism language="sql" code={`
new user YOURUSERNAME, YOURPASSWORD, RW;
`}/><br/>

        <p>Using a client like curush the CursusDB Shell Program.</p>

        <Prism language="bash" code={`
curush> new user someusername, somepassword, RW;
`}/><br/>

        <br/><h3 id="removing-database-users">Removing Database Users</h3>
        <p>RW permission is required and the username of the user you'd like to remove from accessing your CursusDB cluster.</p>
        <Prism language="sql" code={`
delete user USERNAME;
`}/><br/>

        <br/><h3 id="list-database-users">Listing database users</h3>
        <p>RW permission is required and the username of the user you'd like to remove from accessing your CursusDB cluster.</p>
        <Prism language="sql" code={`
users;
`}/><br/>


        <br/><h3 id="list-collections">Listing collections</h3>
        <Prism language="sql" code={`
curush>collections;
[{"127.0.0.1:7682": {"collections":["losers","winners","users"]}}]
`}/><br/>

        <br/><h3 id="deleting-key-within-coll-docs">Deleting a key within documents in a collection</h3>
        <p>It's very simple to alter a collections documents. Say you want to remove the y key from a documents like below:</p>
        <Prism language="sql" code={`
[{"$id":"fcb773f6-2d77-45fe-a860-9dd94f5e7c07","x":5,"y":7},{"$id":"a567925e-dbb1-405e-b4ac-12522b33d07e","x":2,"y":4},{"$id":"4fa938f6-6813-4db9-9955-f5e3c81a9c0b","x":55,"y":9}]}]
`}/><br/>
        <p> Simple using a native client:</p>

        <Prism language="sql" code={`
curush>delete key y in example;
[{"127.0.0.1:7682": {"message":"Document key removed from collection successfully.","statusCode":4021,"altered":3}}]

`}/><br/>
        <br/><h3 id="deleting-collections">Deleting collections</h3>

        <p>When you remove every document from a collection the collection is removed i.e</p>
        <Prism language="sql" code={`
delete * from losers;
..."1 Document(s) deleted successfully.","statusCode":2000}}]
curush>collections;
[{"127.0.0.1:7682": {"collections":["winners","users"]}}]
`}/><br/>


        <h2 id="automatic-node-rep">Automatic Node Read Replicating/Synchronization</h2><br/>
        <p>When you configure a node you can configure a replica.  This configuration requires you to modify both cluster and node configuration files.</p>
        <h5>.cursusconfig</h5>
        <Prism language="bash" code={`
nodes:
- host: 0.0.0.0
  port: 7682
  replicas:
  - host: 0.0.0.0
    port: 7683
....
`}/>
        <h5>.curodeconfig</h5>
        <Prism language="bash" code={`
replicas:
  - host: 0.0.0.0
    port: 7683
tls-cert: ""
tls-key: ""
....
`}/>

        <p>With those configurations set your node will start to sync data every default time of 10 minutes(<code>replication-sync-time</code>).  The cluster will as well on read failure of main node will retry to up to any amount of set node read replicas.</p>

        <h2 id="automatic-node-backups">Automatic Node Backups</h2><br/>
        <p>A node can be configured to generate backups.  A backup by default is generated automatically every 60 minutes(<code>automatic-backup-time</code>) into a backup directory which is created on first run.</p>
        <br/><h2 id="automatic-node-backup-cleanup">Automatic Node Backup Cleanup</h2><br/>
        <p>A node can be configured to remove all old backups.  The default is every hour to delete all backups older than an hour.  This can be configured with <code>automatic-backup-cleanup-hours</code></p>
        <br/><h2 id="logging">Logging</h2>

        <p>Logs for the CursusDB cluster and node are found where you launch your binaries. Cluster: cursus.log Node: curode.log if logging is enabled.</p>

        <p>You can enable logging on either cluster or node enabling logging. This will log to file instead of stdout.</p>

        <Prism language="bash" code={`
logging: true
`}/><br/>

        <p>Within your yaml configs you can set log-max-lines this option will tell either node or cluster when to truncate(clear up) the log file(s).</p>

        <h5>How are logs are formatted?</h5>
        <Prism language="bash" code={`
[LEVEL][YOUR CONFIGURED TZ RFC822 DATE] DATA
`}/><br/>


       <h5>Logs can have either level:</h5>
        <ul>
            <li style="color: red">ERROR</li>
            <li style="color: red">FATAL</li>
            <li style="color: blue">INFO</li>
            <li style="color: purple">WARN</li>
        </ul>


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
    - host: 0.0.0.0
      port: 7682
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

        <h3 id="reserved-words">Reserved Words</h3>
        <ul class="rw">
            <li><code>count</code></li>
            <li><code>$id</code></li>
            <li><code>$indx</code></li>
            <li><code>in</code></li>
            <li><code>not like</code></li>
            <li><code>!like</code></li>
            <li><code>where</code></li>
            <li><code>chan</code></li>
            <li><code>const</code></li>
            <li><code>continue</code></li>
            <li><code>defer</code></li>
            <li><code>else</code></li>
            <li><code>fallthrough</code></li>
            <li><code>func</code></li>
            <li><code>go</code></li>
            <li><code>goto</code></li>
            <li><code>if</code></li>
            <li><code>interface</code></li>
            <li><code>map</code></li>
            <li><code>select</code></li>
            <li><code>struct</code></li>
            <li><code>switch</code></li>
            <li><code>var</code></li>
            <li><code>false</code></li>
            <li><code>true</code></li>
            <li><code>uint8</code></li>
            <li><code>uint16</code></li>
            <li><code>uint32</code></li>
            <li><code>uint64</code></li>
            <li><code>int8</code></li>
            <li><code>int16</code></li>
            <li><code>int32</code></li>
            <li><code>int64</code></li>
            <li><code>float32</code></li>
            <li><code>float64</code></li>
            <li><code>complex64</code></li>
            <li><code>complex128</code></li>
            <li><code>byte</code></li>
            <li><code>rune</code></li>
            <li><code>uint</code></li>
            <li><code>int</code></li>
            <li><code>uintptr</code></li>
            <li><code>string</code></li>
            <li><code>==</code></li>
            <li><code>&amp;&amp;</code></li>
            <li><code>||</code></li>
            <li><code>&gt;</code></li>
            <li><code>&lt;</code></li>
            <li><code>=</code></li>
            <li><code>*</code></li>
        </ul>


        <h3 id="status-codes">Status Codes</h3>
        <ul class="statuscodes">
            <li><code>0</code> Authentication successful.</li>
            <li><code>1</code> Unable to read authentication header.</li>
            <li><code>2</code> Invalid authentication value.</li>
            <li><code>3</code> No user exists</li>
            <li><code>4</code> User not authorized</li>
            <li><code>5</code> Failed node sync auth</li>
        </ul>
        <ul class="statuscodes">
            <li><code>100</code> - Node is at peak allocation</li>
            <li><code>101</code> - Invalid permission</li>
            <li><code>102</code> - User does not exist</li>
            <li><code>103</code> - Database user already exists</li>
            <li><code>104</code> - No node was available for insert</li>
            <li><code>105</code> - Node unavailable</li>
            <li><code>106</code> - Node ready for sync</li>
            <li><code>107</code> - Node replica synced successfully</li>
            <li><code>108</code> - Could not decode serialized sync data into hashmap</li>
            <li><code>200</code> - New database user created successfully</li>
            <li><code>201</code> - Database user removed successfully</li>
            <li><code>202</code> - Could not decode user username</li>
            <li><code>203</code> - Could not marshal users list array</li>
            <li><code>204</code> - There must always be one database user available</li>
            <li><code>205</code> - Could not marshal user for creation</li>
            <li><code>206</code> - Could not get node working directory for automatic backup (with description)</li>
            <li><code>207</code> - Could not create automatic backups directory (with description)</li>
            <li><code>208</code> - Could not read node backups directory  (with description)</li>
            <li><code>209</code> - Could not remove .cdat backup FILE NAME (with description)</li>
            <li><code>210</code> - Could not get node working directory for automatic recovery (with description)</li>
            <li><code>211</code> - Node data backup was successful</li>
            <li><code>213</code> - Delete key missing in</li>
            <li><code>214</code> - Node was unrecoverable after all attempts</li>
            <li><code>215</code> - Attempting automatic recovery with latest backup</li>
            <li><code>216</code> - Starting to sync to with master node</li>
            <li><code>217</code> - Synced up with master node (with addr)</li>
            <li><code>500</code> - Unknown error (with description)</li>
            <li><code>501</code> - Limit skip must be an integer (with description)</li>
            <li><code>502</code> - Could not convert limit value to integer (with description)</li>
            <li><code>503</code> - Invalid limiting slice value (with description)</li>
            <li><code>504</code> - Invalid limiting value (with description)</li>
            <li><code>505</code> - Key cannot use reserved word</li>
            <li><code>506</code> - Where is missing values</li>
            <li><code>505</code> - Key cannot use reserved symbol</li>
        </ul>

        <ul class="statuscodes">
            <li><code>2000</code> Document inserted/updated/deleted</li>
            <li><code>4000</code> Unmarsharable JSON insert</li>
            <li><code>4001</code> Missing action</li>
            <li><code>4002</code> None existent action</li>
            <li><code>4003</code> Nested JSON objects not permitted</li>
            <li><code>4004</code> Document already exists</li>
            <li><code>4005</code> Invalid command/query</li>
            <li><code>4006</code> From is required</li>
            <li><code>4007</code> Invalid query operator</li>
            <li><code>4008</code> Set is missing =</li>
            <li><code>4009</code> Invalid insert query missing 'insert into'</li>
            <li><code>4010</code> Invalid insert query is missing parentheses</li>
            <li><code>4011</code> Invalid update query missing set</li>
            <li><code>4012</code> Could not marshal JSON</li>
            <li><code>4013</code> Unparsable boolean value</li>
            <li><code>4014</code> Unparsable float value</li>
            <li><code>4015</code> Unparsable integer value</li>
            <li><code>4016</code> Missing limit value</li>
            <li><code>4017</code> Invalid query</li>
            <li><code>4018</code> Unmarsharable JSON</li>
            <li><code>4019</code> Update sets are missing</li>
            <li><code>4020</code> In is required</li>
            <li><code>4021</code> Document key removed from collection successfully</li>
            <li><code>4022</code> No documents found to alter</li>
            <li><code>4023</code> No unique $id could be found for insert</li>
        </ul>
    </article>
</main>

<style>

    .rw {
        padding: 0;
        list-style: none;
    }

    .rw li code {
        padding: 5px;
        background: #ffbdbd;
        margin-bottom: 5px;
        display: inline-block;
        border-radius: 8px!important;
    }

    h4 {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 18px;
        font-weight: lighter;
        padding-left: 10px;
        border-left: 4px solid black!important;
    }

    h5 {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: lighter;
        padding-left: 10px;
        border-left: 4px dotted black!important;
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
        z-index: 2000;
        padding: 20px;
        width: 200px;
        height: calc(100vh - 80px);
        position: sticky;
        bottom: 0;
        z-index: 999;
        background: white;
        top: 60px;
        left: 0;
        margin-left: -20px;
        margin-right: 20px;
        margin-bottom: 20px;
        float: left;
    }

    aside ul {
        z-index: 2000;
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
        z-index: 2000;
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
        background: white;
        outline: none;
        border: none;
        padding: 9px;
        padding-right: 28px;

        cursor: pointer;
    }

    .aside-btn img {
        /*opacity: 0.90;*/
        margin-top: 10px;
        width: 16px;

    }

    article ul {
        padding-left: 28px;
    }

    aside ul li a {
        text-decoration: none;
        border: none;
    }
</style>
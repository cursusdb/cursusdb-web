<script>
    import RollingText from "$lib/components/RollingText.svelte";
    import Prism from "$lib/components/Prism.svelte";
    import {goto} from "$app/navigation";
    let scrollYBind;

    async function navigate(path) {
        await goto(path)
    }

    function isScrolling(e) {
        console.log(scrollYBind)

    }
</script>

<svelte:head>
    <meta name="keywords" content="database, dbms, document type database, object database, document database, opensource database, distributed database, document dbms, sql like no-sql, acid compliant, unstructured data">
    <meta name="author" content="CursusDB" />
    <meta name="description" content="CursusDB is an open source scalable distributed in-memory document type database with SQL like queries.  Try CursusDB today!">
    <title>CursusDB - NoSQL At Scale</title>
    <meta name="og:title" content="Downloads - CursusDB"/>
    <meta name="og:site_name" content="CursusDB"/>
    <meta name="og:description" content="CursusDB is an open source scalable distributed in-memory document oriented database with SQL like queries.  Download CursusDB for free today!"/>
</svelte:head>
<svelte:window bind:scrollY={scrollYBind} on:scroll={(e) => isScrolling(e)}></svelte:window>


<div class="abstract">
    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d={`M0.00,${parseInt(scrollYBind) * 2}.98 C216.98,80.06 349.20,-49.98 500.00,89.98 L500.00,180.00 L0.00,150.00 Z`}
              style="stroke: none; fill: #ecb9ff;">
        </path>
    </svg>
</div>
<br/><br/><figure>
    <h2>NoSQL At Scale </h2>
    <h1>CursusDB is </h1><RollingText time={2250} texts={['Document-oriented', 'Distributed', 'SQL like', 'Fast', 'Open Source', 'Secure by default', 'JSON friendly', 'Persistent']}/>
</figure>
<br/>
<section style="background: none;">
    <h3>CursusDB is a fast open source in-memory document oriented database offering security, persistence, distribution, availability and an SQL like query language.</h3>

</section>
<section>
    <h1>SQL Like</h1>
    <Prism language="sql" code={`
select * from users where firstName = 'Alex' && age > 28;
`}/>
    <footer>
        <p>CursusDB has an SQL like query language called CDQL(Cursus Document Query Language)</p>
    </footer>
</section>

<section>
    <h1>JSON insertion</h1>
    <Prism language="sql" code={`
insert into users({"name": "John", "last": "Josh", "age": 28, "tags": ["tag1", "tag2"]});
`}/>
    <footer>
        <p>CursusDB takes JSON type document data on insertion.</p>
    </footer>
</section>

<section>
    <h1>One cluster to rule all the nodes.</h1>
    <Prism language="sql" code={`
insert into users({"email!": "jdoe@example.com","firstName": "Doe", "lastName": "John", "age": 28, "tags": ["tech", "news"]});
`}/>
    <footer>
        <p>Regardless the query a CursusDB cluster will query all configured commodity nodes in parallel at the same time tackling multiple parts of your stored collections simultaneously.  On insertion uniqueness can be kept using the <strong>!</strong> symbol at the end of your desired key to be unique.</p>
    </footer>
</section>

<section>
    <h1>Easily integratable</h1>
    <Prism language="javascript" code={`
import Client from 'cursusdb-node'

(async function() {
    // Cluster IP or FQDN, Cluster PORT, DB User Username, DB User Password, TLS ?
    const client = new Client("0.0.0.0", "7681", "username", "password", false)

    client.Connect().then((res) => {
        console.log(res)

            client.Query(\`ping;\`).then((res) => {
                console.log(res)
                client.Close()
            })
    }).catch((err) => {
        console.error(err)
    })
})()

`}/>
    <footer>
        <div class="left">
            <a href="https://www.npmjs.com/package/cursusdb-node">https://www.npmjs.com/package/cursusdb-node</a>
        </div>

        <div class="right">
            <a href="/documentation#connecting-to-cluster">More Native Client Packages</a>
        </div>
    </footer>
</section>

<div class="end">
    <p>Getting a secure cluster setup shouldn't<br/> take more than 5 minutes!</p>
    <button on:click={() => navigate('/documentation')}>Read the docs!</button>

    <br/><br/>
    <p>Fully managed, secure, and reliable CursusDB cluster deployments on the cloud.</p>
    <ul>
        <li><span style="color: forestgreen">✓</span> Automatic daily backups of all nodes</li>
        <li><span style="color: forestgreen">✓</span>  Always available and persistent </li>
        <li><span style="color: forestgreen">✓</span>  Autoscale up or down based on size of database</li>
        <li><span style="color: forestgreen">✓</span>  Pay base fee and for what:
        <ul>
            <li>Bandwidth</li>
            <li>Compute</li>
        </ul>
            you use.
        </li>
        <li><span style="color: forestgreen">✓</span> Regional</li>
        <li><span style="color: forestgreen">✓</span>  Premium Support</li>
        <li></li>
        <li>More info coming soon!</li>
    </ul>
    <button on:click={() => navigate('./')}>CursusDB Cloud</button><br/><br/>
</div>


<style>
    figure {
        max-width: 980px;
        padding: 20px;
        margin-top: 40px!important;
        margin: 0 auto;
        width: calc(100% - 40px);
        text-shadow: 1px 1px rgba(255,255,255,0.4);

    }

    .abstract {
        position: fixed!important;
        z-index: -100;
        top: -20px!important;
        padding: 0;
        margin-left: -20px;
        width: 100%;
        transform: rotate(180deg) scaleX(-1);
    }

    .end {
        padding: 10px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background: #fcfcfc;
        margin-top: 40px!important;
        overflow: hidden;
        width: 100%;
        max-width: 300px;
        font-size: 18px;
        margin: 0 auto;
        display: block;
    }

    .end button {
        background: #ECB9FF;
        color: black;
        padding: 10px 30px;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        border: none;
        margin-top: 10px;
    }

    .end button:hover {
        color: #ECB9FF;
        background: #191821;
    }

    .end ul {
        font-size: 14px;
    }

    .end ul li {
        padding: 5px;
    }

    .end ul li ul {
        list-style: none;
        padding-left: 40px;
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
        font-size: 48px!important;
        margin-right: 10px;
        float: left;
    }

    section {
        display: block;
        margin-top: 20px!important;
        margin: 0 auto;
        width: 100%;
        max-width: 980px;
        background: #ffdc9d;
        text-shadow: 1px 1px rgba(255,255,255,0.38);
        border-radius: 5px;
    }

    section h1 {
        height: 30px;
        font-family: Tenso-Slab, serif;
        font-weight: lighter;
        font-size: 18px;
        line-height: 40px;
        text-shadow: 1px 1px rgba(255,255,255,0.38);
        padding-left: 10px;
        padding-right: 10px;
    }

    section footer {
        min-height: 40px;
        line-height: 30px;
        padding: 10px;
        background: #ffffff;
        overflow: hidden
    }

    section p {
        padding: 10px;
    }

    section a, section a:visited {
        color: #2C293B;
        text-shadow: 1px 1px rgba(255,255,255,0.38);
        border-bottom-color: #2C293B;;
    }

    section footer div {
        display: inline-block;
        padding-top: 3px;
        border-radius: 5px;
    }

    section footer {
        box-shadow: rgba(50, 50, 93, 0.10) 0px 30px 80px -102px, rgba(0, 0, 0, 0.2) 0px 18px 26px -24px;
    }

    @media only screen and (max-width: 500px) {
        figure h2 {
            font-size: 14px;
        }

        figure {
            margin-top: 20px!important;
        }

        figure h1 {
            margin-right: 5px;
            font-size: 16px!important;
        }

        section footer div {
            font-size: 12px
        }

        section footer {
            padding: 0;
        }

        section footer div {
            display: block!important;
            float: left!important;
            border-bottom: 1px solid lightgray;
            margin-bottom: -1px;
            border-radius: 0;
            padding-top: 8px!important;
            padding: 5px;
            text-align: left;
            width: 100%;
        }

        section footer div a {
            text-decoration: none;
            border: none;
        }
    }
</style>
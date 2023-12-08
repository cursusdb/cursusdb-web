<script>
    import RollingText from "$lib/components/RollingText.svelte";
    import Prism from "$lib/components/Prism.svelte";
</script>

<svelte:head>
    <meta name="keywords" content="database, dbms, document type database, object database, document database, opensource database, distributed database, document dbms, sql like no-sql">
    <meta name="author" content="CursusDB" />
    <meta name="description" content="CursusDB is an open source scalable distributed in-memory document type database with SQL like queries.  Try CursusDB today!">
    <title>CursusDB - NoSQL At Scale</title>
</svelte:head>

<br/><br/><figure>
    <h2>NoSQL At Scale </h2>
    <hr/>
    <h1>CursusDB is </h1><RollingText time={2250} texts={['Distributed', 'SQL Like', 'Blazing Fast', 'Open Source', 'Secure by default', 'JSON friendly']}/>
</figure>
<br/>
<section>
    <h1>SQL Like</h1>
    <Prism language="sql" code={`
select * from users where firstName == 'Alex' && age > 28;
`}/>
</section>

<section>
    <h1>JSON based</h1>
    <Prism language="sql" code={`
insert into users({"name": "John", "last": "Josh", "age": 28, "tags": ["tag1", "tag2"]});
`}/>
</section>

<section>
    <h1>Easily integratable</h1>
    <Prism language="javascript" code={`
import cursusdb from 'cursusdb-node'

// cluster host, cluster port, db user username, db user password, tls enabled
cursusdb.Connect("0.0.0.0", "7681", "username", "password", false).then(async (cluster) => {
    const results = await cursusdb.Query("select * from users;")

    console.log(results)

    // Close whenever
    cursusdb.Close()

}).catch((err) => {
    console.log(err)
})

`}/>
    <footer>
        <div class="left">
            <a href="https://www.npmjs.com/package/cursusdb-node">https://www.npmjs.com/package/cursusdb-node</a>
        </div>

        <div class="right">
            <a href="https://cursusdb.com/downloads">More Native Client Packages</a>
        </div>
    </footer>
</section>


<style>
    figure {
        max-width: 980px;
        padding: 20px;
        margin: 0 auto;
        width: calc(100% - 40px);
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
        margin-top: 20px!important;
        margin: 0 auto;
        width: 100%;
        max-width: 980px;
        background: #CDCDCD;
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
        height: 40px;
        line-height: 30px;
        padding-left: 10px;
        padding-right: 10px;
        overflow: hidden
    }

    section a, section a:visited {
        color: #2C293B;
        text-shadow: 1px 1px rgba(255,255,255,0.38);
        border-bottom-color: #2C293B;;
    }

    section footer div {
        display: inline-block;
    }

    @media only screen and (max-width: 500px) {
        figure h2 {
            font-size: 14px;
        }

        figure h1 {
            margin-right: 5px;
            font-size: 16px!important;
        }

        section footer div {
            font-size: 12px
        }
    }
</style>
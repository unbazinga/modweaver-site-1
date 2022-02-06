<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    :global(body) {
        background-color: #21252b;
        font-family: 'Open Sans', sans-serif;
    }
    * {
        color: white;
    }
    nav {
        margin-left: 42.5%;
        margin-right: 50%;
        font-size: 15px;
    }
    .name {
        font-weight: bold;

    }
    .c {
        text-align: center;
        text-decoration: none;
        font-size: 15px;
    }
    .container {
        display: inline-block;
    }
    .flex-container {
        display: flex;
    }
    .center {
        align-content: center;
        justify-content: center;
    }
    .flex-container > div {

        margin: 5px;
        padding: 1px;
        font-size: 30px;
    }
    .mod-div {
        background-color: #383c4c;
    }
</style>
<h1>Mods</h1>
<script>
    export let mods_json = "{\n" +
        "    \"mods\": \n" +
        "    {\n" +
        "        \"0\":\n" +
        "        {\n" +
        "\t    \"name\": \"HarderHeck\",\n" +
        "            \"description\": \"Makes the game much harder\",\n" +
        "            \"author\": \"Aer\",\n" +
        "            \"download_url\": \"https://github.com/AerGameChannel/HarderHeck/releases/latest/download/HarderHeck.Mod.dll\"\n" +
        "        },\n" +
        "\t\"1\":\n" +
        "\t{\n" +
        "\t    \"name\": \"Too Many Explosions\",\n" +
        "\t    \"description\": \"Replaces all the weapons in game with mines and grenades.\",\n" +
        "            \"author\": \"Aer\",\n" +
        "\t    \"download_url\": \"https://github.com/AerGameChannel/TooManyExplosions/releases/latest/download/TooManyExplosions.dll\"\n" +
        "\t}\n" +
        "    }\n" +
        "}"
    const obj = JSON.parse(mods_json);
</script>

<div id="mods">
    {#each Object.values(obj.mods) as mod}
        <div class="mod-div">
            <p>{mod.name}</p>
            <p>{mod.description}</p>
            <p>{mod.author}</p>
            <a href={mod.download_url}>Download</a>
        </div>
    {/each}
</div>
<!--
--------------------------------
<br>

Debugging:
<pre>{JSON.stringify(obj, null, 4)}</pre>
-->
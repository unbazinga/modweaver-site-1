<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    :global(body) {
        background-color: #21252b;
        font-family: 'Open Sans', sans-serif;
    }
    * {
        color: white;
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
    .grid-container {
        display: grid;
        overflow: hidden;
        border-radius: 25px;
    }
    .flex-container {
        display: flex;
        overflow: hidden;
        border-radius: 25px;

    }
    .center {
        align-content: center;
        justify-content: center;
    }
    .flex-container > div {

        margin: 5px;
        padding: 1px;
    }
    .grid-container > div {

        min-width: 100px;
        width: auto;
        max-width: 500px;
        margin: 5px;
        padding: 1px;
    }
    .mod-div {
        display: inline-block;
        font-size: medium;
        border-radius: 15px;
        border: #383c4c;

        background-color: #383c4c;
    }

</style>
<h1>Mods</h1>
<script>
    export let mods_json = "{\r\n    \"mods\": \r\n    {\r\n        \"0\":\r\n        {\r\n\t    \"name\": \"HarderHeck\",\r\n            \"description\": \"Makes the game much harder\",\r\n            \"author\": \"Aer\",\r\n            \"download_url\": \"https://github.com/AerGameChannel/HarderHeck/releases/latest/download/HarderHeck.Mod.dll\"\r\n        },\r\n\t\"1\":\r\n\t{\r\n\t    \"name\": \"Too Many Explosions\",\r\n\t    \"description\": \"Replaces all the weapons in game with mines and grenades.\",\r\n            \"author\": \"Aer\",\r\n\t    \"download_url\": \"https://github.com/AerGameChannel/TooManyExplosions/releases/latest/download/TooManyExplosions.dll\"\r\n\t},\r\n\t\"2\":\r\n\t{\r\n\t   \"name\": \"NoGravity\",\r\n\t   \"description\": \"Removes gravity.\",\r\n\t   \"author\": \"Exo\",\r\n\t   \"download_url\": \"https://github.com/ExoPlant/NoGravity/releases/latest/download/NoGravity.dll\"\r\n\t}\r\n    }\r\n}"
    const obj = JSON.parse(mods_json);
</script>

<div id="mods" class="grid-container">
    {#each Object.values(obj.mods) as mod}
        <div class="mod-div">
            <p>  Name: {mod.name}  </p>
            <p></p>
            <p>  Description: {mod.description}  </p>
            <p></p>
            <p>  Author: {mod.author}  </p>
            <p></p>
            <a href={mod.download_url}> ⇓ Download  </a>
            <script>
                function download(download_mod)
                {
                    window.location.href = download_mod.download_url
                }
            </script>
            <p></p>
        </div>
    {/each}
</div>
<!--
--------------------------------
<br>

Debugging:
<pre>{JSON.stringify(obj, null, 4)}</pre>
-->

<script context="module">


    export async function load({ fetch }) {
        // api/get-info should be the path to the endpoint, here it's the file: `src/routes/api/get-info.ts`
        const info = await fetch('api/get-info').then((r) => r.json());
        return {
            props: { info }
        };
    }
</script>
<script>
    export let info
</script>
The data from database is: {info}
<head>

    <link rel="stylesheet" href="/style.css">
    <title>ModWeaver Mods</title>
</head>
<body>
<script lang="ts">
</script>
<h1>Mods</h1>
<script context="module" lang="ts">
    import type { LoadInput, LoadOutput } from '@sveltejs/kit';

    export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
        const info = await fetch('api/get-info').then((r) => r.json());
        return {
            props: {
                info
            }
        };
    }
</script>
<script lang="ts">
    export let info
</script>
</body>
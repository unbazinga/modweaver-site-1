<head>
    <!--<style>
        body {
            background-color: #21252b;
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
            font-size: 15px;
        }
        .flex-container {
            display: flex;
        }

        .flex-container > div {

            margin: 5px;
            padding: 1px;
            font-size: 30px;
        }
        </style>
        -->

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

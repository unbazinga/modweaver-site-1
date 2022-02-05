import type { EndpointOutput } from '@sveltejs/kit';
import { db } from '$lib/database';

export async function get(): Promise<EndpointOutput> {
    const query = db('info').select('*');
    let result = await query;
    console.log("testing!")
    return {
        body: result
    };
}
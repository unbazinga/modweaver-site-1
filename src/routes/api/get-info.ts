// src/routes/api/get-info.ts
import type { EndpointOutput } from '@sveltejs/kit';
import { db } from '$lib/database';

export async function get(): Promise<EndpointOutput> {
    const query = new Promise((resolve, reject) => {
        db.query('SELECT * from info', function (error, results, fields) {
            if (error) return reject(error);
            resolve(results);
        });
    })
    let result = await query;


    return {
        // @ts-ignore
        body: result
    };
}
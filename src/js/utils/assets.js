import React from 'react';
import URIs from './apis';
const axios = require('axios');

export async function create(payload) {
    console.log(payload);
    const headers = {
        headers: {
            'Content-Type': 'text/plain'
        }
    }
    const response = await axios.post(URIs.assets, payload, headers);
    
    if (response && response.data) {
        console.log(response);
    } else {
        throw (
            {
                'message': response.data.message,
                'code': response.data.code
            });
    }
}
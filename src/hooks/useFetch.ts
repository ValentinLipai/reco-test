import React, { useState, useEffect } from 'react';

export enum methodsEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

const methodsWithBody = [methodsEnum.PUT, methodsEnum.POST];

export interface IUseFetchResponse  {
    data?: any;
    isLoading: boolean;
    error: boolean;
}

export const useFetch = (url: string, method: methodsEnum, body?: Record<string, unknown>): IUseFetchResponse => {
    const [output, setOutput] = useState<IUseFetchResponse>({
        data: null,
        isLoading: true,
        error: false
    })

    console.log()

    useEffect(() => {
        (async () => {
            try {
                setOutput({
                    data: null,
                    isLoading: true,
                    error: false,
                })

                const response = await fetch(url, {
                    method: method,
                    body: methodsWithBody.includes(method)
                        ? JSON.stringify(body)
                        : undefined
                });

                const json = response.json();

                setOutput({
                    data: json,
                    isLoading: false,
                    error: false,
                })
            } catch (e) {
                setOutput({
                    data: null,
                    isLoading: false,
                    error: true,
                })
            }
        })()
    }, [url, method, body]);

    return  output;
 }
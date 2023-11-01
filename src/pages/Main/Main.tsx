import React, {useEffect, useState} from 'react';

import {Box, CircularProgress} from '@mui/material';
import { AppsTable } from "../../components/AppsTable";

import {IAppListResponse, IAppItem} from "../../types/apps.types";

const APPS_LIST_API_URL = '/api/v1/app-service/get-apps';
type TItemsPerViewEnum = 25 | 50;
export const MainPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState<TItemsPerViewEnum>(25);
    const [data, setData]  = useState<IAppItem[]>([])
    const [isLoading, setIsLoading]  = useState(false)
    const [isError, setIsError]  = useState(false);
    // const {data, isLoading, error} = useFetch(APPS_LIST_API_URL, methodsEnum.PUT, {
    //     "pageNumber": currentPage,
    //     "pageSize": itemsPerPage
    // });


    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                setIsError(false);
                const res = await fetch(APPS_LIST_API_URL, {
                    method: 'PUT',
                    body: JSON.stringify({
                        "pageNumber": currentPage,
                        "pageSize": itemsPerPage
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                const json = await res.json() as IAppListResponse;
                setData(json.appRows);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                setIsError(true);
            }
        })()
    }, [currentPage, itemsPerPage]);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }

    if (isError) {
        return (
            <Box sx={{ display: 'flex' }}>
                Something went wrong....
            </Box>
        )
    }

    return (
        <AppsTable items={data} />
    )
}

export default MainPage;
import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'
import { CircularProgress } from '@mui/material'

export default function Loader() {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
            <InfinitySpin color="grey" />
        </Stack>
    )
}

import { Grid } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
import React from 'react'

const Demo = () => {
    return (
        <div>
            <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DemoItem label="Date of Birth">
                            <DatePicker defaultValue={dayjs('2000-06-22')} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12}></Grid>

        </div>
    )
}

export default Demo

import React, { useState } from 'react'
import { Box, Chip, TextField } from '@mui/material'

function ChipInput({ value, onAdd, onDelete, label, color }) {
    const [inputValue, setInputValue] = useState('')

    const handleKeyDown = (event) => {
        if(event.key === 'Enter' && inputValue.trim() !== '') {
            event.preventDefault()
            onAdd(inputValue.trim())
            setInputValue('')
        }
    }

    return (
        <Box>
            <TextField
                color={color}
                label={label}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                variant='outlined'
                fullWidth
            />
            <Box mt={2} display='flex' flexWrap='wrap' gap={1}>
                {value.map((chip, index) => (
                    <Chip 
                        key={index}
                        label={chip}
                        onDelete={() => onDelete(chip)}
                        color='primary'
                    />
                ))}
            </Box>
        </Box>
    )
}

export default ChipInput
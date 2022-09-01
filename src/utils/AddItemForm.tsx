import { AddBox } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton/IconButton';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import TextField from '@mui/material/TextField/TextField';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

type AddItemFormPropsType = {
    addCard: (title: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    let [title, setTitle] = useState("")

    const addItem = () => {
        if (title.trim() !== "") {
            props.addCard(title);
            setTitle("");
        } else {
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <>
        <TextField
            size='medium'
            variant="outlined"
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            label="Заметка..."
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton color="primary" onClick={addItem}>
                            <AddBox />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            sx={{ '& fieldset': { borderRadius: '10px' }, width: '50%' }}
        />
    </>
}

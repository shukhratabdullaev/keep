import IconButton from '@mui/material/IconButton/IconButton';
import TextField from '@mui/material/TextField/TextField';
import { ChangeEvent, useState, KeyboardEvent } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Delete } from "@mui/icons-material";
import Typography from '@mui/material/Typography/Typography';




type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    removeCard: () => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setEditMode(false);
            props.onChange(title);
        }
    }

    const hiddenTextStyle = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        padding: '5px',
        textOverflow: 'ellipsis',
        maxWidth: '60%',
    }

    return editMode
        ? <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} onKeyPress={onKeyPressHandler} />
        : <>
            <Typography
                variant='h6'
                component='span'
                sx={hiddenTextStyle}
            >
                {props.value}
            </Typography>
            <Typography component='span'>
                <IconButton color='primary' size='small' onClick={activateEditMode}>
                    <EditIcon />
                </IconButton>
                <IconButton color='primary' size='small' onClick={props.removeCard}>
                    <Delete />
                </IconButton>
            </Typography>

        </>
}

import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoSelectedView, NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal/thunks"
import { useDispatch, useSelector } from "react-redux"

export const JournalPage = () => {

    const dispatch = useDispatch();

    const {isSaving, active} = useSelector(state => state.journal);

    const onClickNote = () => {
        dispatch(startNewNote()); 
    }

    return (

    <JournalLayout>
        {
            (!!active) ? <NoteView /> : <NoSelectedView />
        }

        <IconButton
            onClick={onClickNote}
            size="large"
            disabled={isSaving}
            sx={{
                color: 'white',
                backgroundColor: 'error.main',
                ':hover': {backgroundColor: 'error.main', opacity: 0.9},
                position: 'fixed',
                right: 50,
                bottom: 50,
            }}
        >
            <AddOutlined sx={{fontSize: 30}}/>
        </IconButton>
    </JournalLayout>

)}


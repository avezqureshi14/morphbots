import React, { useState } from 'react';
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PrimaryButton from '../../components/custom/PrimaryButton';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import EditTutorial from './Tutorial/EditTutorial';
import EditChapter from './Chapter/EditChapter';
import AddNewChapter from './Chapter/AddNewChapter';

const chapters = [
    ['Chapter 1 - Lörem ipsum dong däheten', 'Chapter 2 - Lörem ipsum dong däheten', 'Chapter 3 - Lörem ipsum dong däheten'],
    ['Chapter 1 - Lörem ipsum dong däheten', 'Chapter 2 - Lörem ipsum dong däheten'],
    ['Chapter 1 - Lörem ipsum dong däheten', 'Chapter 2 - Lörem ipsum dong däheten', 'Chapter 3 - Lörem ipsum dong däheten', 'Chapter 4 - Lörem ipsum dong däheten'],
    ['Chapter 1 - Lörem ipsum dong däheten', 'Chapter 2 - Lörem ipsum dong däheten', 'Chapter 3 - Lörem ipsum dong däheten', 'Chapter 4 - Lörem ipsum dong däheten'],
    ['Chapter 1 - Lörem ipsum dong däheten', 'Chapter 2 - Lörem ipsum dong däheten', 'Chapter 3 - Lörem ipsum dong däheten', 'Chapter 4 - Lörem ipsum dong däheten'],
    ['Chapter 1 - Lörem ipsum dong däheten', 'Chapter 2 - Lörem ipsum dong däheten', 'Chapter 3 - Lörem ipsum dong däheten', 'Chapter 4 - Lörem ipsum dong däheten'],
    ['Chapter 1 - Lörem ipsum dong däheten', 'Chapter 2 - Lörem ipsum dong däheten', 'Chapter 3 - Lörem ipsum dong däheten', 'Chapter 4 - Lörem ipsum dong däheten']
];

const AccordionsWithChapters = () => {
    const [isEditTutorialOpen, setIsEditTutorialOpen] = useState(false);
    const [isEditChapterOpen, setIsEditChapterOpen] = useState(false);
    const [isAddNewChapterOpen, setIsAddNewChapterOpen] = useState(false);

    const handleOpenEditTutorial = () => {
        setIsEditTutorialOpen(true);
    };

    const handleCloseEditTutorial = () => {
        setIsEditTutorialOpen(false);
    };

    const handleOpenEditChapter = () => {
        setIsEditChapterOpen(true);
    };

    const handleCloseEditChapter = () => {
        setIsEditChapterOpen(false);
    };

    const handleOpenAddNewChapter = () => {
        setIsAddNewChapterOpen(true);
    };

    const handleCloseAddNewChapter = () => {
        setIsAddNewChapterOpen(false);
    };

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        console.log(event);
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Box sx={{ width: '1100px', margin: '2rem' }}>
                {chapters.map((chapterList, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#F7F9FA' }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls={`panel${index}bh-content`}
                            id={`panel${index}bh-header`}
                            sx={{
                                flexDirection: 'row-reverse', height: '64px',
                            }}
                        >
                            <Box
                                component='div'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%'
                                }}
                            >
                                <Box
                                    component='div'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '7px',
                                            backgroundColor: '#6ECDDD',
                                            marginRight: '10px'
                                        }}
                                    >
                                        <ExpandMoreIcon sx={{ color: 'white' }} />
                                    </Box>
                                    <Typography sx={{ flexShrink: 0, fontWeight: 700, fontSize: '16px' }}>
                                        Accordion {index + 1}
                                    </Typography>
                                </Box>
                                <Box
                                    component='div'
                                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                >
                                    <PrimaryButton
                                        variant='filled'
                                        textTransform='capitalize'
                                        height='31px'
                                        width='154px'
                                        fontWeight='600'
                                        fontSize='13px'
                                        icon={NoteAddIcon}
                                        fontFamily='Roboto, sans-serif'
                                        letterSpacing='1px'
                                        onClick={handleOpenAddNewChapter}
                                    >
                                        Add Chapter
                                    </PrimaryButton>
                                    <PrimaryButton
                                        variant='filled'
                                        textTransform='capitalize'
                                        height='31px'
                                        width='80px'
                                        fontWeight='600'
                                        fontSize='13px'
                                        icon={EditIcon}
                                        fontFamily='Roboto, sans-serif'
                                        letterSpacing='1px'
                                        onClick={handleOpenEditTutorial}
                                    >
                                        Edit
                                    </PrimaryButton>
                                    <PrimaryButton
                                        variant='filled'
                                        textTransform='capitalize'
                                        height='31px'
                                        width='100px'
                                        fontWeight='600'
                                        fontSize='13px'
                                        backgroundColor='#DD6E70'
                                        borderColor='#DD6E70'
                                        icon={DeleteIcon}
                                        fontFamily='Roboto, sans-serif'
                                        letterSpacing='1px'
                                    >
                                        Delete
                                    </PrimaryButton>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {chapterList.map((chapter, chapterIndex) => (
                                    <ListItem key={chapterIndex}>
                                        <ListItemText primary={chapter} />
                                        <ListItemSecondaryAction>
                                            <PrimaryButton
                                                variant='filled'
                                                height='31px'
                                                width='30px'
                                                fontSize='15px'
                                                icon={EditIcon}
                                                fontFamily='Roboto, sans-serif'
                                                style={{ marginRight: '10px', minWidth: '10px', paddingRight: '-5px' }}
                                                onClick={handleOpenEditChapter}
                                            />
                                            <PrimaryButton
                                                variant='filled'
                                                height='31px'
                                                width='30px'
                                                fontSize='15px'
                                                backgroundColor='#DD6E70'
                                                borderColor='#DD6E70'
                                                icon={DeleteIcon}
                                                fontFamily='Roboto, sans-serif'
                                                style={{ marginRight: '10px', minWidth: '10px' }}
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
            <EditTutorial open={isEditTutorialOpen} onClose={handleCloseEditTutorial} />
            <EditChapter open={isEditChapterOpen} onClose={handleCloseEditChapter} />
            <AddNewChapter open={isAddNewChapterOpen} onClose={handleCloseAddNewChapter} />
        </>
    );
};

export default AccordionsWithChapters;

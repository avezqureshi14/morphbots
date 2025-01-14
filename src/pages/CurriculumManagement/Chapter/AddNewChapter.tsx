import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import PrimaryTextField from '../../../components/custom/PrimaryTextField';
import PrimaryButton from '../../../components/custom/PrimaryButton';
import { styled } from '@mui/system';

interface AddNewChapterProps {
    open: boolean;
    onClose: () => void;
}

const ModalBox = styled(Box)({
    //@ts-expect-error
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: 24,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});



const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #EAEBF4',
    paddingBottom: '10px',

});

const AddNewChapter: React.FC<AddNewChapterProps> = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby='add-new-tutorial-title'
            aria-describedby='add-new-tutorial-description'
            BackdropProps={{
                style: {
                    backdropFilter: 'blur(5px)',
                },
            }}
        >
            <ModalBox>
                <Header>
                    <Typography variant='h6' sx={{ paddingLeft: '30px' }} >Add New Chapter</Typography>

                    <PrimaryButton onClick={onClose} variant='filled' height='31px' width='30px' fontSize='15px' fontWeight='800' backgroundColor='#DD6E70' borderColor='#DD6E70' icon={CloseIcon} fontFamily='Roboto, sans-serif' borderRadius={2} style={{ marginRight: '10px', minWidth: '10px' }} ></PrimaryButton>

                </Header>

                <form>
                    <Box
                        component='div'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <PrimaryTextField width='750px' label='Title' />
                        <PrimaryTextField width='750px' label='Sub-heading' />
                        <PrimaryTextField width='750px' label='Body' multiline rows={10} />
                    </Box>
                    <Box
                        component='div'
                        sx={{
                            width: '777px',
                            display: 'flex',
                            justifyContent: 'end',
                            alignItems: 'end',
                            flexDirection: 'row'
                        }}
                    >
                        <PrimaryButton onClick={onClose} variant='outlined' height='38px' width='144px' fontWeight='600' fontSize='13px' backgroundColor='#fff' borderColor='#000' textColor='#000' border='1' style={{ marginRight: '7px' }} >Cancel</PrimaryButton>
                        <PrimaryButton variant='filled' height='38px' width='120px' fontWeight='600' fontSize='13px'  >Add</PrimaryButton>
                    </Box>
                </form>
            </ModalBox>
        </Modal>
    );
};

export default AddNewChapter;

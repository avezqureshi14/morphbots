import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import PrimaryButton from '../../components/custom/PrimaryButton';
import PrimaryTextField from '../../components/custom/PrimaryTextField';

const ConfirmationEmailTemplate: React.FC = () => {


    return (
        <Box
            component='div'
            sx={{
                height: '100 %',
                width: 'calc(100 % - 352px)',
                padding: '0 ',

            }}
        >
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '2px solid #EAEBF4',
                    marginBottom: '20px',
                    paddingBottom: '7px',
                    padding: '10px 50px 10px 35px'
                }}
            >
                <Typography
                    variant='h6'
                    align='left'
                    gutterBottom
                    sx={{ margin: '5px', fontWeight: 700, color: '#000', fontSize: '19px' }}
                >
                    Confirmation Email Template
                </Typography>
                <Box
                    component='div'
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <PrimaryButton variant='outlined' textTransform='uppercase' width='134px' >Edit</PrimaryButton>
                    <PrimaryButton variant='filled' textTransform='uppercase' width='134px'>Save</PrimaryButton>
                </Box>
            </Box>
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <form>
                    <Box component='div' sx={{ marginBottom: '20px', width: '800px' }}>
                        <Typography variant='subtitle1' sx={{ marginBottom: '10px', fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
                            Logo
                        </Typography>
                        <Button
                            variant='outlined'
                            component='label'
                            sx={{
                                borderStyle: 'dotted',
                                width: '245px',
                                height: '100px',
                                padding: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textTransform: 'none',
                                color: '#000',
                                borderColor: '#D9E2EB',
                            }}
                        >
                            <ImageIcon sx={{ fontSize: '20px', paddingBottom: '5px' }} />
                            <Typography>Upload</Typography>
                            <input type='file' hidden />
                        </Button>
                    </Box>
                    <PrimaryTextField label='Title' ></PrimaryTextField>
                    <PrimaryTextField label='Sub-Heading' ></PrimaryTextField>
                    <PrimaryTextField label='Body' fieldWidth="780px" multiline rows={7} />
                    <PrimaryTextField label='Social Media Links' ></PrimaryTextField>
                </form>
            </Box>
        </Box>
    );
};

export default ConfirmationEmailTemplate;

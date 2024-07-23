import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent
import PrimaryButton from '../../../components/custom/PrimaryButton';
import PrimaryTextField from '../../../components/custom/PrimaryTextField';
import PrimarySelect from '../../../components/custom/PrimarySelect';
import { styled } from '@mui/system';
import AddService from './AddService';
const ServiceDetails: React.FC = () => {
    const [selectedService, setSelectedService] = useState<string | number>('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSelectChange = (event: SelectChangeEvent<string | number>) => {
        setSelectedService(event.target.value);
    };

    const serviceOptions = [
        { value: '', label: 'None' },
        { value: 10, label: 'Service 1' },
        { value: 20, label: 'Service 2' },
        { value: 30, label: 'Service 3' },
    ];

    const Container = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '950px',
        height: '460px',
        marginTop: '1rem',
        padding: '30px',
        borderRadius: '10px',
        border: '1px solid #eee',
        boxShadow: '0px 0px 20px 4px #0000000A',
        position: 'relative'
    });

    return (
        <>
            <Container
            >
                <Typography sx={{
                    fontWeight: '600',
                    fontSize: '19px',
                    width: '966px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    background: '#F2FAFC',
                    padding: '20px 0px 11px 45px'
                }} >Service Details</Typography>
                <Box
                    component="div"
                    style={{ marginTop: '3%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                    <Box
                        component="div"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <PrimarySelect
                            label='Service Name'
                            options={serviceOptions}
                            value={selectedService}
                            onChange={handleSelectChange}
                        />
                        <PrimaryButton onClick={handleOpenPopup} variant='filled' textTransform='uppercase' height='50px' width='175px' style={{ marginTop: '24px', marginLeft: '10px' }} >
                            Add Service
                        </PrimaryButton>
                    </Box>
                    <PrimaryTextField label='Duration' placeholder='Enter duration' width='914px' />
                    <PrimaryTextField label='Cost' placeholder='Enter cost' width='914px' />
                    <PrimaryButton variant='filled' textTransform='uppercase' height='40px' width='350px' style={{ marginTop: '3%' }} >
                        Save
                    </PrimaryButton>
                </Box>
            </Container>
            <AddService open={isPopupOpen} onClose={handleClosePopup} />
        </>
    );
};

export default ServiceDetails;

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import PrimaryButton from '../../../components/custom/PrimaryButton';
import PrimarySelect from '../../../components/custom/PrimarySelect';
import { styled } from '@mui/system';
import AddRobot from './AddRobot';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const Container = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '950px',
    height: 'auto',
    marginTop: '1rem',
    padding: '30px',
    borderRadius: '10px',
    border: '1px solid #eee',
    boxShadow: '0px 0px 20px 4px #0000000A',
    position: 'relative'
});



const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const defaultStartTime = "9:00 am";
const defaultEndTime = "5:00 pm";

interface EditSchedulingSettingsProps {
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const EditSchedulingSettings: React.FC<EditSchedulingSettingsProps> = ({ setEditMode }) => {
    const [selectedService, setSelectedService] = useState<string | number>('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [timings, setTimings] = useState<{ [key: string]: { start: string, end: string } }>(
        Object.fromEntries(daysOfWeek.map(day => [day, { start: defaultStartTime, end: defaultEndTime }]))
    );

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSelectChange = (event: any) => {
        setSelectedService(event.target.value);
    };

    const handleTimingChange = (day: string, type: 'start' | 'end', value: string) => {
        setTimings(prev => ({
            ...prev,
            [day]: { ...prev[day], [type]: value }
        }));
    };

    const handleAddTiming = (day: string) => {
        console.log(day)
    };

    const handleRemoveTiming = (day: string) => {
        console.log(day)
    };

    const serviceOptions = [
        { value: '', label: 'None' },
        { value: 10, label: 'Service 1' },
        { value: 20, label: 'Service 2' },
        { value: 30, label: 'Service 3' },
    ];

    const handleBackClick = () => {
        setEditMode(false);
    }


    return (
        <>
            <Container>
                <Typography sx={{
                    fontWeight: '600',
                    fontSize: '19px',
                    width: '966px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    background: '#F2FAFC',
                    padding: '20px 0px 11px 45px'
                }}>
                    <PrimaryButton onClick={handleBackClick} variant='filled' height='31px' width='30px' fontSize='15px' fontWeight='800' backgroundColor='#48C1B8' borderColor='#48C1B8' icon={ArrowBackIcon} fontFamily='Roboto, sans-serif' borderRadius={500} style={{ marginRight: '10px', minWidth: '10px' }} ></PrimaryButton>
                    Scheduling Settings
                </Typography>
                <Box
                    component="div"
                    style={{ marginTop: '6%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                    <Box
                        component="div"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '25px'
                        }}
                    >
                        <PrimarySelect
                            width='946px'
                            label='Robots'
                            options={serviceOptions}
                            value={selectedService}
                            onChange={handleSelectChange}
                        />
                    </Box>
                    <Box component="div" sx={{ width: '100%' }}>
                        <Box
                            component='div'
                            sx={{
                                backgroundColor: '#F7F9FA',
                                borderBottom: '1px solid #D9E2EB',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px 0',
                            }}
                        >
                            <Typography sx={{ width: '50%', color: '#000', textTransform: 'capitalize', fontWeight: 700, textAlign: 'left', paddingLeft: '10px' }}>Weekly hours</Typography>
                            <Typography sx={{ width: '50%', color: '#000', textTransform: 'capitalize', fontWeight: 700, textAlign: 'left', paddingLeft: '10px' }}>Date-specific hours</Typography>
                        </Box>
                        <Box
                            component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '20px'
                            }}
                        >
                            <Box sx={{ width: '48%', borderRight: '1px solid #D9E2EB', paddingRight: '10px' }}>
                                {daysOfWeek.map((day) => (
                                    <Box component="div" key={day} mb={1} sx={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                                        <Typography sx={{ width: '50px', fontWeight: 700, fontFamily: "Roboto, sans-serif" }}>{day}</Typography>

                                        <input type="text" value={timings[day].start}
                                            onChange={(e) => handleTimingChange(day, 'start', e.target.value)} style={{
                                                fontSize: '17px',
                                                fontWeight: 700,
                                                padding: '8px 10px',
                                                width: '64px',
                                                border: '1px solid #bcbfc1',
                                                borderRadius: '3px',
                                                fontFamily: "Roboto, sans-serif"
                                            }} />
                                        <Typography sx={{ margin: '0 5px' }}> - </Typography>

                                        <input type="text" value={timings[day].end} onChange={(e) => handleTimingChange(day, 'end', e.target.value)} style={{
                                            fontSize: '17px',
                                            fontWeight: 700,
                                            padding: '8px 10px',
                                            width: '64px',
                                            border: '1px solid #bcbfc1',
                                            borderRadius: '3px',
                                            marginRight: '1rem',
                                            fontFamily: "Roboto, sans-serif"
                                        }} />
                                        <PrimaryButton
                                            onClick={() => handleRemoveTiming(day)}
                                            variant='filled'
                                            height='31px'
                                            width='30px'
                                            fontSize='10px'
                                            fontWeight='800'
                                            backgroundColor='#DD6E70'
                                            borderColor='#DD6E70'
                                            icon={CloseIcon}
                                            fontFamily='Roboto, sans-serif'
                                            borderRadius={2}
                                            style={{ marginRight: '5px', minWidth: '30px' }}

                                        />
                                        <PrimaryButton
                                            onClick={() => handleAddTiming(day)}
                                            variant='filled'
                                            height='31px'
                                            width='30px'
                                            fontSize='10px'
                                            fontWeight='800'
                                            backgroundColor='#48C1B8'
                                            borderColor='#48C1B8'
                                            icon={AddIcon}
                                            fontFamily='Roboto, sans-serif'
                                            borderRadius={2}
                                            style={{ minWidth: '30px' }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ width: '48%', paddingLeft: '10px' }}>
                                <Typography sx={{ marginBottom: '10px', fontWeight: 400, color: '#636363', fontSize: '15px' }}>
                                    Override your availability for specific dates when your hours differ from your regular weekly hours.
                                </Typography>
                                <PrimaryButton variant='filled' textTransform='capitalize' height='37px' width='291px' >
                                    Add Date-Specific Hours
                                </PrimaryButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <AddRobot open={isPopupOpen} onClose={handleClosePopup} />
        </>
    );
};

export default EditSchedulingSettings;

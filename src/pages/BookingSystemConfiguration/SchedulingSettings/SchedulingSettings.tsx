import React, { useState } from 'react';
import { Box, Typography, RadioGroup, FormControlLabel, Radio, TextField, Tabs, Tab } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent
import PrimaryButton from '../../../components/custom/PrimaryButton';
import PrimarySelect from '../../../components/custom/PrimarySelect';
import { styled } from '@mui/system';
import AddRobot from './AddRobot';
import EditIcon from '@mui/icons-material/Edit'
import EditSchedulingSettings from './EditSchedulingSettings';

const StyledTabPanel = styled('div')(() => ({
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #D9E2EB',
    padding: '16px 29px'
}));

const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;

    return (
        <StyledTabPanel
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )
            }
        </StyledTabPanel >
    );
}





const SchedulingSettings: React.FC = () => {
    const [selectedService, setSelectedService] = useState<string | number>('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('60days');
    const [tabValue, setTabValue] = useState(0);
    const [editiMode, setEditMode] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
        setTabValue(0);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSelectChange = (event: SelectChangeEvent<string | number>) => {
        setSelectedService(event.target.value);
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };



    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event);
        setTabValue(newValue);
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
        height: 'auto',
        marginTop: '1rem',
        padding: '30px',
        borderRadius: '10px',
        border: '1px solid #eee',
        boxShadow: '0px 0px 20px 4px #0000000A',
        position: 'relative'
    });

    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const defaultTiming = "9:00am - 5:00pm";
    const handleEditClick = () => {
        setEditMode(true);
    }
    return (
        <>
            {
                editiMode ? <EditSchedulingSettings setEditMode={setEditMode} /> :
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
                                    label='Robots'
                                    options={serviceOptions}
                                    value={selectedService}
                                    onChange={handleSelectChange}
                                />
                                <PrimaryButton onClick={handleOpenPopup} variant='filled' textTransform='uppercase' height='50px' width='175px' style={{ marginTop: '24px', marginLeft: '10px' }} >
                                    Add Robot
                                </PrimaryButton>
                            </Box>
                            <Box component="div" sx={{ width: '100%', marginBottom: '30px' }}>
                                <Typography variant='subtitle1' sx={{ marginBottom: '7px', fontWeight: 700 }}>
                                    Date Range
                                </Typography>
                                <Typography sx={{ marginBottom: '10px', fontWeight: 400, color: '#636363', fontSize: '15px' }}>
                                    Users can book sessions based on the availability hours given below until ...
                                </Typography>

                                <RadioGroup value={selectedOption} onChange={handleOptionChange}
                                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}
                                >
                                    <Box display="flex" alignItems="center">
                                        <Radio sx={{ color: '#6ECDDD', '&.Mui-checked': { color: '#6ECDDD' } }} />
                                        <TextField
                                            variant="outlined"
                                            value="60"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            sx={{ marginLeft: 2, width: '50px' }}
                                        />
                                        <TextField
                                            variant="outlined"
                                            value="Calendar Days"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            sx={{ marginLeft: 2, width: '150px' }}
                                        />
                                    </Box>
                                    <Box
                                        display="flex" alignItems="center"
                                    >
                                        <FormControlLabel value="dateRange" control={<Radio sx={{ color: '#6ECDDD', '&.Mui-checked': { color: '#6ECDDD' } }} />} label="Within Date Range" />

                                    </Box>
                                    <FormControlLabel value="indefinitely" control={<Radio sx={{ color: '#6ECDDD', '&.Mui-checked': { color: '#6ECDDD' } }} />} label="Indefinitely into the future" />
                                </RadioGroup>
                            </Box>
                            <Box component="div" sx={{ width: '100%' }}>
                                <Typography variant='subtitle1' sx={{ marginBottom: '7px', fontWeight: 700 }}>
                                    Available hours
                                </Typography>
                                <Typography sx={{ marginBottom: '10px', fontWeight: 400, color: '#636363', fontSize: '15px' }}>
                                    Set the times that users will be able to schedule the sessions with the robot
                                </Typography>
                                <Box
                                    component='div'
                                    sx={{
                                        backgroundColor: '#F7F9FA',
                                        borderBottom: '1px solid #D9E2EB',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingLeft: '10px',
                                        paddingRight: '10px'
                                    }}
                                >
                                    <Tabs
                                        value={tabValue}
                                        onChange={handleTabChange}

                                        TabIndicatorProps={{
                                            style: {
                                                backgroundColor: '#6ECDDD',
                                            }
                                        }}
                                    >
                                        <Tab label="Weekly hours" sx={{ color: '#000 !important', textTransform: 'capitalize' }} />
                                        <Tab label="Date-specific hours" sx={{ color: '#000 !important', textTransform: 'capitalize' }} />
                                    </Tabs>
                                    <PrimaryButton
                                        onClick={handleEditClick}
                                        variant='filled'
                                        textTransform='capitalize'
                                        height='31px'
                                        width='80px'
                                        fontWeight='600'
                                        fontSize='13px'
                                        icon={EditIcon}
                                        fontFamily='Roboto, sans-serif'
                                        letterSpacing='1px'
                                    >
                                        Edit
                                    </PrimaryButton>
                                </Box>
                                <TabPanel value={tabValue} index={0}
                                    sx={{
                                        width: '100%',
                                        boxSizing: 'border-box',
                                        '& .MuiBox-root': {
                                            padding: '0 !important', // Ensure padding does not interfere
                                        },
                                    }}
                                >
                                    <Box>
                                        {daysOfWeek.map((day) => (
                                            <Box key={day} display="flex" width='230px' justifyContent="space-between" alignItems="center" mb={1}>
                                                <Typography>{day}</Typography>
                                                <Typography>{defaultTiming}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </TabPanel>
                                <TabPanel value={tabValue} index={1}>
                                    {/* Content for Date-specific hours */}
                                </TabPanel>
                            </Box>
                        </Box>
                    </Container >
            }


            <AddRobot open={isPopupOpen} onClose={handleClosePopup} />
        </>
    );
};

export default SchedulingSettings;

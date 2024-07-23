import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/system';
import CustomTextField from '../../components/custom/AppTextField';
import SecondaryButton from '../../components/custom/SecondaryButton';
import { Images } from '../../constants/imageConstants';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hook'; // Adjust import path
import { login } from '../../slices/authSlice'; // Adjust import path
import { toast } from 'react-toastify'; // Ensure react-toastify is installed

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
  borderRadius: '0px',
  height: '100vh',
  width: '100%',
  margin: '0.7rem',
  backgroundColor: 'white',
  marginTop: '5%',
});

const Logo = styled('img')({
  width: '387.1px',
  height: 'auto',
  marginBottom: '3%',
});

const LoginText = styled(Typography)({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 700,
  color: '#000',
  marginBottom: '1rem',
});

const BackgroundBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Form = styled('form')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '500px',
  height: '305px',
  marginTop: '1rem',
  padding: '30px',
  borderRadius: '10px',
  border: '1px solid #eee',
  boxShadow: '0px 0px 20px 4px #0000000A',
});

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const authStatus = useAppSelector((state) => state.auth.status);
  const authError = "";

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    setLoading(true);
    try {
      const resultAction = await dispatch(login({ email, password }));
      if (login.fulfilled.match(resultAction)) {
        toast.success('Login successful!');
        navigate('/');
        setLoading(false);
      } else {
        toast.error(authError || 'Login failed');
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (

    <Container>
      <BackgroundBox>
        <Logo src={Images.MORPHBOTS_LOGO} alt='Morphbots Logo' />
        <LoginText variant='h5'>
          Login to your Morphbots account
        </LoginText>
        <Form onSubmit={handleSubmit}>
          <CustomTextField
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomTextField
            placeholder='Enter your Password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
          />
          <SecondaryButton disabled={loading} buttonText={loading ? "Just a sec..." : "Submit"} type='submit' />
        </Form>
      </BackgroundBox>
    </Container>
  );
};

export default LoginForm;

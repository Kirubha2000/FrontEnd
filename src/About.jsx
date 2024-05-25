import React, { useState } from 'react'
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MuiTelInput } from 'mui-tel-input'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import axios from 'axios';



const Home = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        phoneNumber: '',
        password: '',
        confirmPassword:'',
    });
   


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:3000/registration/userRegister", formData)
          .then((response) => {
            setFormData("");
            console.log(response.data);
          })
          
      };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                
            >
                <TextField id="firstName" label="First Name" variant="outlined" value={formData.firstName} onChange={(e) => setFormData(e.target.value)} /> <br />
                <TextField id="lastName" label="Last Name" variant="outlined"  value={formData.lastName} onChange={(e) => setFormData(e.target.value)}/> <br />
                <TextField id="email" label="Email" variant="outlined" value={formData.email} onChange={(e) => setFormData(e.target.value)} /><br />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DemoItem label="Date of Birth">
                            <DatePicker defaultValue={dayjs('2000-06-22')} value={formData.dateOfBirth} onChange={(e) => setFormData(e.target.value)} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
                <MuiTelInput value={formData.phoneNumber} onChange={(e) => setFormData(e.target.value)} label="Phone Number" /><br />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" value={formData.password} onChange={(e) => setFormData(e.target.value)}>Password</InputLabel><br />
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <br />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" value={formData.confirmPassword} onChange={(e) => setFormData(e.target.value)}>Confirm Password</InputLabel><br />
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Confirm Password"
                    />
                </FormControl>
                <br />
                <Button type="submit" variant="contained" color="success">
                    Register
                </Button>
            </Box>

        </form>
    );
}

export default Home

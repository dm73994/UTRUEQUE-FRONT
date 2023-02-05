import React, { useState } from 'react'
import LoginView from './login/LoginView';
import RegisterView from './register/RegisterView';
import SwitchButton from './components/SwitchButton';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import AuthLayout from '../../layouts/AuthLayout';

const Auth = () => {
    const [currentForm, setForm] = useState('login');
    const content = currentForm === 'login' ? <RegisterView /> : <LoginView />;

    const handleChange = () => {
        if (currentForm === 'login') setForm('register');
        else setForm('login');
    }

    return (
        <AuthLayout color={currentForm !== 'login' ? 'primary' : 'secondary'} >
            <Card sx={{ height: '100%' }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                    {content}
                    <CardActions sx={{ alignSelf: 'flex-end' }}>
                        <SwitchButton handleChange={handleChange} />
                    </CardActions>
                </CardContent>
            </Card>
        </AuthLayout>
    )
}

export default Auth
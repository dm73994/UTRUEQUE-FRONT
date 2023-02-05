import HistoryIcon from '@mui/icons-material/History';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export const funcOptions = [
    {
        label: 'home',
        icon: <HomeRoundedIcon />,
        path: '/home'
    },
    {
        label: 'transfer',
        icon: <CurrencyExchangeIcon />,
        path: '/transfer'
    },
    {
        label: 'transfer history',
        icon: <HistoryIcon />,
        path: '/history'
    }
]

export const profileOptions = [
    {
        label: 'settings',
        icon: <SettingsRoundedIcon />,
        path: '/settings'
    },
    {
        label: 'exit',
        icon: <LogoutRoundedIcon />,
        path: '/logout'
    }
]
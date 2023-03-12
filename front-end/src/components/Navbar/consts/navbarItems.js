import EventNoteIcon from '@mui/icons-material/EventNote';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';

export const navbarItems = [
    {
        id: 0,
        icon: <MenuBookIcon />,
        label: 'Mesa',
        route: 'route',
    },
    {
        id: 1,
        icon: <HistoryEduIcon />,
        label: 'Sessões',
        route: 'route',
    },
    {
        id: 2,
        icon: <EventNoteIcon />,
        label: 'Ciclo de Estudos',
        route: 'route',
    },
    {
        id: 3,
        icon: <AssessmentIcon />,
        label: 'Relatórios',
        route: 'route',
    },
    {
        id: 4,
        icon: <SettingsIcon />,
        label: 'Configurações',
        route: 'route',
    },
]
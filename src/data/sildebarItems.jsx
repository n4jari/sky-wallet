import { LoginRounded, AddCardRounded, ExpandLessRounded, ExpandMoreRounded, ReplyRounded, PersonRounded } from '@mui/icons-material';

export const sidebarItems = [
    {
        icon: <PersonRounded />,
        label: "مشخصات",
        linkTo: "/",
    },
    {
        icon: <LoginRounded />,
        label: "ورود",
        linkTo: "/login",
    },
    {
        icon: <AddCardRounded />,
        label: "ساخت حساب",
        linkTo: "/create",
    },
    {
        icon: <ExpandLessRounded />,
        label: "واریز",
        linkTo: "/deposit",
    },
    {
        icon: <ExpandMoreRounded />,
        label: "برداشت",
        linkTo: "/withdraw",
    },
    {
        icon: <ReplyRounded />,
        label: "انتقال",
        linkTo: "/transfer",

    }
]
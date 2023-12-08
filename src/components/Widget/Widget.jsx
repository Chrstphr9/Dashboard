import "./Widget.scss"
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ( {type}) => {
    let data;

    const amount = 100;
    const diff = 20

    switch(type) {
        case "user":
            data = {
                title: USERS,
                isMoney: false,
                link: "See All Users",
                icon: <PersonOutlinedIcon className="icon" />,
    };
    break;
    case "orders":
            data = {
                title: orders,
                isMoney: false,
                link: "View All orders",
                icon: <ShoppingCartOutlinedIcon className="icon" />,
    };
    break;
    case "earnings":
            data = {
                title: EARNINGS,
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon" />,
    };
    break;
    case "balance":
            data = {
                title: BALANCE,
                isMoney: true,
                link: "See ",
                icon: <AccountBalanceWalletOutlinedIcon className="icon"/>,
    };
    break;
    
}



  return (
    <div className="widget">
        <div className="left">
            <span className="title">USEERS</span>
            <span className="counter">21312</span>
            <span className="link">See All Users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <ExpandLessOutlinedIcon />
                20%
            </div>
            < PersonOutlinedIcon className="icon "/>
        </div>
    </div>
  )
}

export default Widget
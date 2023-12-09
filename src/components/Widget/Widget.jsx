import "./Widget.scss";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
    let data;
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "Users",
                isMoney: false,
                link: "See All Users",
                icon: <PersonOutlinedIcon 
                className="icon" 
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(225, 0, 0, 0.2)",
                }} 
                />,
            };
            break;
        case "order":
            data = {
                title: "Order",
                isMoney: false,
                link: "View All Orders",
                icon: <ShoppingCartOutlinedIcon className="icon" 
                style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                }} 
                />,
            };
            break;
        case "balance":
            data = {
                title: "Balance",
                isMoney: true,
                link: "See Balance",
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                style={{
                    color: "purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                }} 
                />,
            };
            break;
        default:
            case "earnings":
            data = {
                title: "Earnings",
                isMoney: true,
                link: "View Net Earnings",
                icon: <MonetizationOnOutlinedIcon className="icon" 
                style={{
                    color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)",
                }} 
                />,
            };
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ExpandLessOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;

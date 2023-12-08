import "./Widget.scss"
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = () => {
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
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Chart from "../../components/Chart/Chart"
import Table from "../../components/Table/Table"
import Widget from "../../components/Widget/Widget"
import Featured from "../../components/featured/Featured"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type='user'/>
          <Widget type='order'/>
          <Widget type='earning'/>
          <Widget type='balance'/>
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} />
          
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
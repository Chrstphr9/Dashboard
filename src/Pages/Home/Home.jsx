import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Table from "../../components/Table/Table"
import Widget from "../../components/Widget/Widget"
import Chart from "../../components/chart/Chart"
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
          <Chart />
          
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
import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  width:100vw;
  margin-left:400px;
  margin-top:60px;
  padding:20px;
  background:#E3E1E3;
   @media (max-width: 1024px) {
    margin-left:0;
  }
`;

const CardContainer=styled.div`
  display:flex;
  gap:5px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; 
  }
`;
const Card = styled.div`
  background:${(props) => props.bg || "gray"};
  color:white;
  padding:10px;
  margin:10px;
  width:370px;
  height:180px;
  @media (max-width: 639px) {
  }
`;

const Regions = styled.div`
`;
const Feeds = styled.div`
  flex: 1;
  min-width: 300px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }

  table {
    background-color: white;
    width: 100%;
    border-radius: 4px;
    table-layout: auto;
  }

`;

const Img = styled.div`
     display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
    `;


const Whitebox = styled.div`
    background:white;
    width:100%;
    height:280px;
    `;

const John = styled.div`
`;

const JohnContents = styled.div`
    display:flex;
    flex-direction:row;
`;

const greyContainer = styled.div`
  background:"w3-dark-grey";
  width:100%;
  height:272px;
  @media (max-width: 639px) {
    height:613px;
  }
`;
const Dashboard = () => {
  return (
    <div>
    <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: "400px" }} id="mySidebar">
      <br />
      <div className="w3-container w3-row">
        <div className="w3-col s4">
          <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle w3-margin-right" style={{ width: "46px" }} alt="User Avatar" />
        </div>
        <div className="w3-col s8 w3-bar">
          <span>Welcome, <strong>Mike</strong></span><br />
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
        </div>
      </div>
      <hr />
      <div className="w3-container">
        <h5>Dashboard</h5>
      </div>
      <div className="w3-bar-block">
        <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"  title="close menu">
          <i className="fa fa-remove fa-fw"></i>&nbsp; Close Menu
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i>&nbsp; Overview</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i>&nbsp; Views</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw"></i>&nbsp; Traffic</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw"></i>&nbsp; Geo</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-diamond fa-fw"></i>&nbsp; Orders</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw"></i>&nbsp; News</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw"></i>&nbsp; General</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-history fa-fw"></i>&nbsp; History</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw"></i>&nbsp; Settings</a>
        <br /><br />
      </div>
    </nav>
    
    <Container>
      <h2>
      <i class="fa fa-dashboard"></i>
        My Dashboard</h2>
      <CardContainer>
        <Card className="w3-red">
          <i className="fa fa-comment w3-xxxlarge "></i> <i className="w3-xlarge "> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 52</i> 
          <br/><br/><br/><h4 className="w3-xlarge">Messages</h4> 
          
        </Card>
        <Card className="w3-blue">
          <i className="fa fa-eye w3-xxxlarge"></i> <i className="w3-xlarge">  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 99</i>
          <br/><br/><br/><h4 className="w3-xlarge">Views</h4> 
        </Card>
        <Card className="w3-teal">
          <i className="fa fa-share-alt  w3-xxxlarge"></i> <i className="w3-xlarge"> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 23</i>
          <br/><br/><br/><h4 className="w3-xlarge">Shares</h4> 
        </Card>
        <Card bg="orange">
          <i className="fa fa-users w3-xxxlarge"></i> <i className="w3-xlarge">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  50</i>
          <br/><br/><br/><h4 className="w3-xlarge">Users</h4> 
        </Card>
      </CardContainer>
      <br/>
      <div className="w3-xlarge">Regions  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Feeds</div>
      <Img>
      <Regions>
      <img
        src="https://www.w3schools.com/w3images/region.jpg"
        style={{ width: "512px" , height:"404px"}} 
        alt="Google Regional Map"
    />
    </Regions>
    
    <Feeds>
    <table className="table table-striped table-hover">
      <tbody>
        <tr>
          <td><i className="fa fa-user text-primary fa-2x"></i> New record, over 90 views.</td>
          <td>10 mins</td>
        </tr>
        <tr>
          <td><i className="fa fa-bell text-danger fa-2x"></i> Database error.</td>
          <td>15 mins</td>
        </tr>
        <tr>
          <td><i className="fa fa-users text-warning fa-2x"></i> New record, over 40 users.</td>
          <td>17 mins</td>
        </tr>
        <tr>
          <td><i className="fa fa-comment text-danger fa-2x"></i> New comments.</td>
          <td><i>25 mins</i></td>
        </tr>
        <tr>
          <td><i className="fa fa-bookmark text-primary fa-2x"></i> Check transactions.</td>
          <td><i>28 mins</i></td>
        </tr>
        <tr>
          <td><i className="fa fa-laptop text-danger fa-2x"></i> CPU overload.</td>
          <td><i>35 mins</i></td>
        </tr>
        <tr>
          <td><i className="fa fa-share-alt text-success fa-2x"></i> New shares.</td>
          <td><i>39 mins</i></td>
        </tr>
      </tbody>
    </table>
  </Feeds>
    </Img>
    <br/><br/>
    <div className="w3-xlarge">General Stats</div> 
    <br/>
    <div className="w3-large">New Visitors</div>
    
    
    <div className="progress" style={{ height: '40px', backgroundColor: '#ccc' }}>
    <div
      className="progress-bar bg-success"
      role="progressbar"
      style={{ width: '25%' }}
      aria-label="Success example" 
      aria-valuenow="25" 
      aria-valuemin="0" 
      aria-valuemax="100"
     >
    +25%
  </div>
</div>

    <br/>
    <div className="w3-large">New Users</div>
    
    
    <div className="progress" style={{ height: '40px', backgroundColor: '#ccc' }}>
    <div 
      className="progress-bar bg-warning text-dar"
      role="progressbar"
      style={{ width: '50%', color:'black' }}
      >
      50%
      </div>
</div>

    <br/>
    <div className="w3-large">Bounce Rate</div>
        <div className="progress" style={{ height: '40px',backgroundColor: '#ccc' }}>
        <div 
          className="progress-bar bg-danger" 
          role="progressbar"
          style={{ width: '75%' }}
          >75%</div>
      </div> 
    <br/><br/>
    <div className="w3-xlarge">Countries</div>
    <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">United States</th>
      <th scope="col"> </th>
      <th scope="col">65%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="col">UK</th>
      <th scope="col"> </th>
      <th scope="col">15.7%</th>
    </tr>
    <tr>
      <th scope="row">Russia</th>
      <th scope="col"> </th>
      <th scope="col">5.6%</th>
    </tr>
    <tr>
    <th scope="row">Spain</th>
      <th scope="col"> </th>
      <th scope="col">2.1%</th>
    </tr>
    <tr>
    <th scope="row">India</th>
      <th scope="col"> </th>
      <th scope="col">1.9%</th>
    </tr>
    <tr>
    <th scope="row">France</th>
      <th scope="col"> </th>
      <th scope="col">1.5%</th>
    </tr>
  </tbody>
</table>
    <br/><br/>
    <button class="w3-button w3-dark-grey">More Countries &nbsp;<i class="fa fa-arrow-right"></i></button>
    <br/><br/><br/>
    <div className="w3-xlarge">Recent Users</div>
    <br/>
        <Whitebox>
        <img src="https://www.w3schools.com/w3images/avatar2.png" class="w3-left w3-circle w3-margin-right" style={{width:"35px",height:"35px", margin:"20px"}}></img>
        <br/><span class="w3-xlarge">Mike</span>
        <hr/>
        <img src="https://www.w3schools.com/w3images/avatar5.png" class="w3-left w3-circle w3-margin-right" style={{width:"35px",height:"35px", margin:"20px"}}></img>
        <br/><span class="w3-xlarge">Jill</span>
        <hr/>
        <img src="	https://www.w3schools.com/w3images/avatar6.png" class="w3-left w3-circle w3-margin-right" style={{width:"35px",height:"35px", margin:"20px"}}></img>
        <br/><span class="w3-xlarge">Jane</span>
        </Whitebox>
        <br/><br/>
        <div className="w3-xlarge">Recent Comments</div>
        <JohnContents>
            <John>
                <img class="w3-circle" src="https://www.w3schools.com/w3images/avatar3.png" style={{width:"96px",height:"96px", margin:"20px"}}></img>
            </John>
            <h4>John <span class="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span>
            <p>
            Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.
            </p>
            </h4>
        </JohnContents>
        <JohnContents>
            <John>
            <img class="w3-circle" src="	https://www.w3schools.com/w3images/avatar1.png" style={{width:"96px",height:"96px", margin:"20px"}}></img>
            </John>
            <h4>Bo <span class="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span>
            <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </h4>
        </JohnContents>
        <div class="w3-container w3-dark-grey w3-padding-32">
    <greyContainer>
      <div class="w3-container w3-third">
        <h5 class="w3-bottombar w3-border-green">Demographic</h5>
        <p>Language</p>
        <p>Country</p>
        <p>City</p>
      </div>
      <div class="w3-container w3-third">
        <h5 class="w3-bottombar w3-border-red">System</h5>
        <p>Browser</p>
        <p>OS</p>
        <p>More</p>
      </div>
      <div class="w3-container w3-third">
        <h5 class="w3-bottombar w3-border-orange">Target</h5>
        <p>Users</p>
        <p>Active</p>
        <p>Geo</p>
        <p>Interests</p>
      </div>
    </greyContainer>
  </div>
  <footer class="w3-container w3-padding-16 w3-light-grey">
    <h4>FOOTER</h4>
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
  </footer>
    </Container>
    </div>
  );
};

export default Dashboard;

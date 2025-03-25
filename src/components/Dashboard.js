import React from "react";
import styled from "styled-components";

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
    margin-left:30px;
    width:52%;
`;

const Img = styled.div`
    display:flex;
    flex-direction:row;
    `;

const Visitors = styled.div`
    width:25%
    `;

const Users = styled.div`
    width:50%
    `;

const Bounce = styled.div`
    width:75%
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
        <Card bg="red">
          <i className="fa fa-comment w3-xxxlarge"></i> <i className="w3-xlarge"> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 52</i> 
          <br/><br/><br/><h4 className="w3-xlarge">Messages</h4> 
        </Card>
        <Card bg="blue">
          <i className="fa fa-eye w3-xxxlarge"></i> <i className="w3-xlarge">  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 99</i>
          <br/><br/><br/><h4 className="w3-xlarge">Views</h4> 
        </Card>
        <Card bg="green">
          <i className="fa fa-share-alt  w3-xxxlarge"></i> <i className="w3-xlarge"> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;23</i>
          <br/><br/><br/><h4 className="w3-xlarge">Shares</h4> 
        </Card>
        <Card bg="orange">
          <i className="fa fa-users w3-xxxlarge"></i> <i className="w3-xlarge">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50</i>
          <br/><br/><br/><h4 className="w3-xlarge">Users</h4> 
        </Card>
      </CardContainer>
      <br/>
      <div className="w3-xlarge">Regions  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Feeds</div>
      <Img>
      <Regions>
      <img
        src="https://www.w3schools.com/w3images/region.jpg"
        style={{ width: "512px" , height:"404px"}} 
        alt="Google Regional Map"
    />
    </Regions>
    
    <Feeds>
    <table class="w3-table w3-striped w3-white"> 
        <tbody>
            <tr>
                <td>
                <i class="fa fa-user w3-text-blue w3-xxlarge"></i>
                &nbsp; &nbsp; &nbsp; &nbsp; New record, over 90 views. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </td>
                <td>
                    <i>10 mins</i>
                </td>
            </tr>
            <tr>
                <td>
                <i class="fa fa-bell w3-text-red w3-xxlarge"></i>
                &nbsp; &nbsp; &nbsp; &nbsp;  Database error.
                </td>
                <td>
                    <i>15 mins</i>
                </td>
            </tr>
            <tr>
                <td>
                <i class="fa fa-users w3-text-yellow w3-xxlarge"></i>
                &nbsp; &nbsp; &nbsp; &nbsp;  New record, over 40 users.
                </td>
                <td>
                    <i>17 mins</i>
                </td>
            </tr>
            <tr>
                <td>
                <i class="fa fa-comment w3-text-red w3-xxlarge"></i>
                &nbsp; &nbsp; &nbsp; &nbsp;  New comments.
                </td>
                <td>
                    <i>25 mins</i>
                </td>
            </tr>
            <tr>
                <td>
                <i class="fa fa-bookmark w3-text-blue w3-xxlarge"></i>
                &nbsp; &nbsp; &nbsp; &nbsp;  Check transactions.
                </td>
                <td>
                    <i>28 mins</i>
                </td>
            </tr>
            <tr>
                <td>
                <i class="fa fa-laptop w3-text-red w3-xxlarge"></i>
                &nbsp; &nbsp; &nbsp; &nbsp;  CPU overload.
                </td>
                <td>
                    <i>35 mins</i>
                </td>
            </tr>
            <tr>
                <td>
                <i class="fa fa-share-alt w3-text-green w3-xxlarge"></i>
                &nbsp; &nbsp; &nbsp; &nbsp;  New shares.
                </td>
                <td>
                    <i>39 mins</i>
                </td>
            </tr>
        </tbody>
    </table>
    </Feeds>
    </Img>
    <br/><br/>
    <div className="w3-xlarge">General Stats</div> 
    <br/>
    <div className="w3-large">New Visitors</div>
    
    <div class="w3-grey">
        <Visitors>
        <div class="w3-container w3-center w3-padding w3-green" >+25%</div>
        </Visitors>
    </div>
   
    <br/>
    <div className="w3-large">New Users</div>
    
    <div class="w3-grey">
        <Users>
        <div class="w3-container w3-center w3-padding w3-orange" >50%</div>
        </Users>
    </div>
    
    <br/>
    <div className="w3-large">Bounce Rate</div>
    
    <div class="w3-grey">
        <Bounce>
        <div class="w3-container w3-center w3-padding w3-red">75%</div>
        </Bounce>
    </div>
    
    <br/><br/>
    <div className="w3-xlarge">Countries</div>
    <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
      <tbody><tr>
        <td>United States</td>
        <td>65%</td>
      </tr>
      <tr>
        <td>UK</td>
        <td>15.7%</td>
      </tr>
      <tr>
        <td>Russia</td>
        <td>5.6%</td>
      </tr>
      <tr>
        <td>Spain</td>
        <td>2.1%</td>
      </tr>
      <tr>
        <td>India</td>
        <td>1.9%</td>
      </tr>
      <tr>
        <td>France</td>
        <td>1.5%</td>
      </tr>
    </tbody></table>
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
            Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    <div class="w3-row">
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
    </div>
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

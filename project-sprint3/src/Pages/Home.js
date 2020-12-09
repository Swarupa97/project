import React, { Component } from 'react';
import Navbar from '../components/Navbar';



 class Home extends Component{

     render(){
  return (
    <div className='home'>

  <Navbar/>
     
      <h2>ONLINE VOTING SYSTEM</h2>
      
    
    <h3>Election Procedures and Rules in Cooperative Societies</h3>
    
    <p>
        <br/>
        At least three months prior to the Election date, the initial procedures must be declared to the voters by the Managing Committee ( or the Provisional Managing Committee in case if the first Election is to be conducted).
        
    </p>
    
    <p>
      <br/>    
        A Returning Officer should be appointed to carry out the Voting Procedures and ensure adherence of the rules. A Returning Officer should be someone who is not contesting the Election in any capacity. Nor should he be proposing or seconding a candidate. In other words, he should be an absolutely unbiased and trusted individual. Usually, someone takes up this position voluntarily. Otherwise, members jointly entrust the responsibilities on a member they deem fit for the duties. In many cases, a financial compensation is made to the Returning Officer for his professional services.
      
    </p>
    
    <p>
        <br/>
        The Conduct of Election should involve the  steps that make the entire procedure methodical and hassle-free. Each process should be published on the Notice Board of the society within ten days of displaying the final list of the voters.
        
    </p>
      
    </div>
  );
}
 
 }
export default Home;


import React from 'react';

const NewArrivalSection = () => {
  return (
    <div className="container" style={{margin:"3em"}}>
      <div className="row">
        <div className="col-md-6" >
            <h2>New Arrival</h2>
            <p>Join Today</p>
          <div className="new-arrival-section">
            <div className="col-md-6" style={{display:"flex",flexDirection:'column',justifyContent:"center"}}>
              <img src="/images/membership.jpg" alt="" className="img-fluid new-arrival-image" />
            <button style={{backgroundColor:"#f7f7f7",color:"#0061ef",border:"1px solid grey"}} className="btn btn-primary rounded-pill mt-3"><b>Join Now</b></button>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={{textAlign:'center',marginTop:"1em"}}>
          <div className="premium-features-section">
            <div className="header" style={{color:'green',fontSize:'30px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            Unlock Premium Features Now
            < hr style={{width:'50%',border:'1px solid green'}}/>          
            </div>
            
            <div className="cards-container" style={{display:'flex',flexDirection:'row',alignItems:"center"}}>
            <span className="arrow-left" style={{fontSize:"30px",color:"#b2aaaa"}}>&#8592;</span>
              <div className="card flex-grow-1" style={{borderRadius:'18px'}}>
                <img src="/images/img1.jpg" alt="" className="img-fluid" style={{borderTopLeftRadius:'18px',borderTopRightRadius:'18px'}} />
                <div className="cardName" style={{fontSize:'19px'}}>
                    Lower Interest Rates
                  
                </div>
              </div>
              <div className="card flex-grow-1" style={{borderRadius:'18px'}}>
                <img src="/images/img2.jpg" alt="" className="img-fluid" style={{borderTopLeftRadius:'18px',borderTopRightRadius:'18px'}} />
                <div className="cardName"style={{fontSize:'19px'}}>
                Interest-free Payments
                </div>
              </div>
              <div className="card flex-grow-1 " style={{borderRadius:'18px'}}>
                <img src="/images/img3.jpg" alt="" className="img-fluid" style={{borderTopLeftRadius:'18px',borderTopRightRadius:'18px'}} />

                <div className="cardName" style={{fontSize:'19px'}}>
                Discounts on Materials
                </div>
              </div>
              
              <span className="arrow-right" style={{fontSize:"30px",color:"#b2aaaa"}}>&#8594;</span>
              <div className="dots-container">
              </div>
            </div>
              <span className="dots" style={{color:'green'}}>&#9679;</span>
                <span className="dots"style={{color:'green'}}>&#9679;</span>
                <span className="dots"style={{color:'green'}}>&#9679;</span>
            <div className="buttons-container text-center mt-3" style={{display:'flex',flexDirection:'column',alignItems:"center",width:'100%',height:'30vh'}}>
              <button className="btn btn-primary rounded-pill mr-2" style={{width:'50%',backgroundColor:'#00650b'}}>UNLOCK NOW</button>
              <button className="btn btn-secondary rounded-pill"style={{width:'50%',backgroundColor:'#00650b',marginTop:'4px'}}>DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection;

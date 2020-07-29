import React, { Component } from 'react';


class ProfessionalInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

     back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


     render(){
      const {handleChange,companyName,from,to,designation} = this.props;
     return(
       <>
            <h2><i> Enter your professional Details</i></h2>
           <label>
           <input
                type = "text"
            name= "companyName"
             placeholder = "Company Name"
                      
             value = {companyName}
            
            onChange = {handleChange('companyName')}
            />
           </label>
           <br/>
           <label>
           <input
               type = "date"
            name= "from"
             placeholder = "From Date"
                         
                value = {from}
             
            onChange = {handleChange('from')}
            />
            </label><br/>
           
           <label>
           <input
               type = "date"
            name= "to"
             placeholder = "To Date"
               value = {to}           

            
            onChange = {handleChange('to')}
            />
            </label><br/>
            <label>
           <input
               type = "text"
            name= "designation"
             placeholder = "Designation"
                          
              value = {designation}
             
            onChange = {handleChange('designation')}
            />
            </label><br/><br/>
             
            
           
           

    
    
          <button className="Back" onClick={this.back}>
          >> Back
          </button> 
          <button className="Next" onClick={this.continue}>
           Next >>
          </button> 
          
       </>

     );

  }
}

export default ProfessionalInfo;
  
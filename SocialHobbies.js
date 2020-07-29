import React, { Component } from 'react';

class SocialHobbies extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

     back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


     render(){
      const {handleChange,linkedInLink,gitHub,facebook,hobbies} = this.props;
     return(
       <>
            <h2><i> Enter Social & Hobbies</i> </h2>
           
           <label>
           <input
               type = "text"
            name= "linkedInLink"
             placeholder = "LinkedIn Profile"
                          
               value = {linkedInLink}
             
            onChange = {handleChange('linkedInLink')}
            />
            </label><br/>
           
           <label>
           <input
               type = "text"
            name= "gitHub"
             placeholder = "GitHub Profile"
                          
               value = {gitHub}
            
            onChange = {handleChange('gitHub')}
            />
            </label><br/>
            <label>
           <input
               type = "text"
            name= "facebook"
             placeholder = "Facebook Profile"
               value = {facebook}            
             
            onChange = {handleChange('facebook')}
            />
            </label><br/>
             <label>
           <input
               type = "text"
            name= "hobbies"
             placeholder = "Hobbies"
               value = {hobbies}            

             
            onChange = {handleChange('hobbies')}
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
export default SocialHobbies;
 
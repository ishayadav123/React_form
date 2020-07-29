import React, { Component } from 'react';


class PersonalInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  render(){
      const {handleChange,lastName,firstName,email,phoneNumber,currentAddress,permanentAddress,uploadEmployeePhoto} = this.props;
     return(
       <>
            <h2> <i>Enter your Personal Details</i></h2>
           <label>
           <input
               type = "text"
               name= "firstName"
             placeholder = "First Name"
            
              value = {firstName}
            onChange = {handleChange('firstName')}
            />
            </label>
                      <br/>
          <label>
          <input
               type = "text"
            name= "lastName"
             placeholder = "Last Name"
             value = {lastName}
            
             
            onChange = {handleChange('lastName')}
            />
            </label>
           <br/>
           <label>
           <input type= "email" pattern= "[^ @]*@[^ @]*" placeholder="Email_Id"
            value = {email}
             
           onChange = {handleChange('email')}/>
           </label><br/>
           <label>
           <input
               type = "number"
            name= "phoneNumber"
             placeholder = "Contact Number"
              value = {phoneNumber}
                          
            
            onChange = {handleChange('phoneNumber')}
            />
            </label><br/>
            
             <label>
           <input
               type = "textarea"
            name= "currentAdress"
             placeholder = "Current Address"
             
            value = {currentAddress}
             
            onChange = {handleChange('currentAddress')}
            />
            
           </label><br/>
            <label>
           <input
               type = "textarea"
            name= "permanenttAdress"
             placeholder = "Permanent Address"
           value = {permanentAddress}
             
            onChange = {handleChange('permanentAddress')}/>
            
           </label><br/>
            <label>
           <input
               type = "file"
              
               name="fileupload"
               accept="image/*"
            
                 value = {uploadEmployeePhoto}
             
             
            onChange = {handleChange('img')}/>
            
           </label><br/><br/>

    
    
          <button className="Next" onClick={this.continue}>
          Next>>>
          </button> 
          
       </>

     );

  }


}
export default PersonalInfo;
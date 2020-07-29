import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import EducationalInfo from './EducationalInfo';
import ProfessionalInfo from './ProfessionalInfo';
import SocialHobbies from './SocialHobbies';
import CompleteInfo from './CompleteInfo';
class Main extends Component{
state = {
    step: 1,
//step 1
firstName: '',
lastName: '',
email: '',
phoneNumber: '',
currentAddress: '',
permanentAddress: '',
uploadEmployeePhoto: '',
 //step 2
  course: '',
  college: '',
  year: '',
  perecentage: '',
//step 3
companyName: '',
from: '',
to: '',
designation: '',
//step4
linkedInLink: '',
gitHub: '',
facebook: '',
hobbies: '' 
}
 nextStep = () => {
     const {step} = this.state;
     this.setState({
         step: step + 1
     });


 }
prevStep = () => {
     const {step} = this.state;
     this.setState({
         step: step - 1
     });


 }



showStep = () => {
    const {step, firstName,lastName,email,phoneNumber,currentAddress,permanentAddress,uploadEmployeePhoto,
    course,college,year,perecentage,companyName,from,to,designation,linkedInLink,gitHub,facebook,hobbies} = this.state;
    if(step === 1)
     return (
     <PersonalInfo
       handleChange = {this.handleChange}
       nextStep = {this.nextStep}
      firstName = {firstName}
      lastName= {lastName}
     email = {email}
     phoneNumber = {phoneNumber}
      currentAddress = {currentAddress}
      permanentAddress = {permanentAddress}
      uploadEmployeePhoto = {uploadEmployeePhoto}
       />);
       

     if(step === 2)
     return (
     <EducationalInfo
       handleChange = {this.handleChange}
       nextStep = {this.nextStep}
       prevStep = {this.prevStep}
       course = {course}
      college = {college}
       year = {year}
      perecentage = {perecentage}
     />);
      if(step === 3)
     return (
     <ProfessionalInfo
       handleChange = {this.handleChange}
       nextStep = {this.nextStep}
       prevStep = {this.prevStep}
      companyName = {companyName}
       from = {from}
      to = {to}
       designation = {designation}
       
     />);
     if(step === 4)
     return (
     <SocialHobbies
       handleChange = {this.handleChange}
       nextStep = {this.nextStep}
       prevStep = {this.prevStep}
       linkedInLink = {linkedInLink}
       gitHub = {gitHub}
      facebook = {facebook}
       hobbies = {hobbies}
       
     />);
         
         if(step === 5)
         return (
           <CompleteInfo
           firstName = {firstName}
          lastName= {lastName}
          course = {course}
          college = {college}
          companyName = {companyName}
            designation = {designation}
             hobbies = {hobbies}
     />);
         
        
         



}
handleChange = input => e =>{
    this.setState({[input]: e.target.value})
}

render(){
    const {step} = this.state;
    return(
    <>
       <h2><b><i>STEP {step} OF 5.</i></b> </h2>
       {this.showStep()}
    </>
    );
}


}
  export default Main;
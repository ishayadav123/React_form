import React, { Component } from 'react';



class EducationalInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

     back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


     render(){
      const {handleChange,course,college,year,percentage} = this.props;
     return(
       <>
            <h2><i> Enter your Educational Details</i></h2>
           <label>
           <input
               type = "text"
            name= "Course"
             placeholder = "Course"
            value = {course}
            onChange = {handleChange('course')}
            />
           </label>
           <br/>
           <label>
           <input
               type = "text"
            name= "college"
             placeholder = "College/University"
                value = {college}           
             
            onChange = {handleChange('college')}
            />
            </label><br/>
           
           <label>
           <input
               type = "number"
            name= "year"
             placeholder = "Year"
              value = {year}
                          
            
            onChange = {handleChange('year')}
            />
            </label><br/>
            <label>
           <input
               type = "number"
            name= "percentage"
             placeholder = "Percentage"
                          
              value = {percentage}
             
            onChange = {handleChange('percentage')}
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
export default EducationalInfo;
  
import React, {Component} from 'react';

class CompleteInfo extends Component {
back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

        const{firstName,lastName,course,college,companyName,designation,hobbies} = this.props;
        return(<>

            <h2> Here is the information you entered </h2>
            First Name: <b>{firstName}</b><br/>
            Last Name: <b>{lastName}</b><br/>
            Course: <b>{course}</b><br/>
            College/University: <b>{college}</b><br/>
            Company Name: <b>{companyName}</b><br/>
             Designation: <b>{designation}</b><br/>
              Hobbies&Intrests: <b>{hobbies}</b><br/>
              <button className ="back" onClick={this.back}
              Back
            
             button/>



           </>
        );
    }



}
export default CompleteInfo;
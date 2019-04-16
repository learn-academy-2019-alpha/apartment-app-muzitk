import React from "react"
import PropTypes from "prop-types"

    class Apartments extends React.Component {
	  constructor(props){
	    super(props)
	    this.state = {
	      apartments: []
	    }
	  }
	  componentDidMount(){
	     fetch('/apartments.json')
	     .then((response) => {
	        return response.json()
	      })
	      .then((json) => {
	        this.setState({apartments: json})
	      })
	      .catch((e)=>{
	        console.log("Error", e)
	      })
	  }
	  render () {
	    return (
	      <div>
	        <h1>Apartments</h1>
	        <table>
	          <tbody>
	            <tr>
                <th>name</th>
                <th>Address1</th>
                <th>Address2</th>
                <th>Zip Code</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
	            </tr>

	            {this.state.apartments.map((apartment, index) =>
	              <tr key={index}>
                    <td>{apartment.name}</td>
	                <td>{apartment.address1}</td>
	                <td>{apartment.address2}</td>
	                <td>{apartment.city}</td>
                    <td>{apartment.state}</td>
                    <td>{apartment.country}</td>
                    <td>{apartment.zipcode}</td>

	              </tr>
	            )}
	          </tbody>
	        </table>
	      </div>
	    );
	  }
	}

	export default Apartments

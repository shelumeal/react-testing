import React from 'react'

function Application() {
  return (
    <div>
      <form>
        <div>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name"/>
        </div>
        <div>
            <label htmlFor='job-location'>Job location</label>
            <select id='job-location'>
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="GB">Great Kingdom</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
                <option value="AU">Australia</option>
            </select>
        </div>
        <div>
            <label>
                <input type="checkbox" id="terms"></input>
                I agree to the terms and conditions
            </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Application

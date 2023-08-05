function Page0({formData,setFormData}){
    return(
        <div className="page0">

<div className="input-grp">
         <label>Name: </label>
         <input type="text" placeholder="Enter Name of Accused" value={formData.Name} onChange={(e)=>setFormData({...formData,Name:e.target.value})}/>
       </div>
          <div className="input-grp">
        <label>Designaton:</label>
        <input type="text" placeholder="Enter Your Job Title" value={formData.Designation} onChange={(event)=>
          setFormData({...formData,Designation:event.target.value})
        }  />
      </div>
      <div className="input-grp">
        <label>Phone</label>
        <input type="number" placeholder="Enter Your Phone" value={formData.Phone} onChange={(e)=>setFormData({...formData,Phone:e.target.value})} />
      </div>
      <div className="input-grp">
        <label>Email: </label>
        <input type="email" placeholder="Enter your Email here" value={formData.Email} onChange={(e)=>setFormData({...formData,Email:e.target.value})}  />
      </div>
      <div className="input-grp">
        <label>State: </label>
        <select>
          <option value={formData.State} onChange={(e)=>setFormData({...formData,State:e.target.value})}>State</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
      </div>
      <div className="input-grp">
        <label>District</label>
        <input type="text" placeholder="Enter District" value={formData.District} onChange={(e)=>setFormData({...formData,District:e.target.value})}/>
      </div>
      <div className="input-grp">
        <label>Address: </label>
        <input type="text" placeholder="Enter Address" value={formData.Address} onChange={(e)=>setFormData({...formData,Address:e.target.value})}/>
      </div>
        </div>
    )
}
export default Page0
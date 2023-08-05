 function Page1({formData,setFormData}){
    return(
        <div className="page1">
            <div className="input-grp">
         <label>Name: </label>
         <input type="text" placeholder="Enter Name of Accused" value={formData.NameA} onChange={(e)=>setFormData({...formData,NameA:e.target.value})} />
       </div>
       <div className="input-grp">
         <label>Designaton:</label>
         <input type="text" placeholder="Enter job title" value={formData.DesignationA} onChange={(e)=>setFormData({...formData,DesignationA:e.target.value})}/>
       </div>
       <div className="input-grp">
         <label>Head of Oraganization: </label>
         <input type="text" placeholder="Enter Name"  value={formData.Head} onChange={(e)=>setFormData({...formData,Head:e.target.value})}/>
         <br />
       </div>
       <div className="input-grp">
         <label>Working Relationship with Accused:</label>
         <input
           type="text"
           placeholder="Working Relatioship with Accused"
           value={formData.Relation} onChange={(e)=>setFormData({...formData,Relation:e.target.value})}
         />
         <br />
       </div>
        </div>
    )
 }
 export default Page1;
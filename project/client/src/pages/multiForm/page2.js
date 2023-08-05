function Page2 ({formData,setFormData}){
    return(
        <div className="page2">
           <div className="input-grp">
         <label>Description: </label>
         <br />
         <textarea
           rows={5}
           cols={45}
           placeholder="Brief Description about your complaint"
           defaultValue={""} 
           value={formData.Desc} onChange={(e)=>setFormData({...formData,Desc:e.target.value})}
           
         />
       </div>
        </div>
    )
}
export default Page2
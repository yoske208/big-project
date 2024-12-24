import React, { useContext, useState } from 'react'
import  {TerrorModel} from "../Interface/Interfaces"
import {AnalysisContext,Props,TerrorProps} from "../Providers/AnalysisProvider"
import useFatch from '../Hooks/UseFetch'

const url = "http://localhost:6060/crud/"

const CRUD = () => {
    const {terrors, setTerrors} = useContext(AnalysisContext)
    const [eventid, setEventId] = useState("")
    const [iyear, setiyear] = useState("")
    const [imonth, setimonth] = useState("")
    const [iday, setiday] = useState("")
    const [country_txt, setcountry_txt] = useState("")
    const [region_txt, setregion_txt] = useState("")
    const [city, setcity] = useState("")
    const [latitude, setlatitude] = useState("")
    const [longitude, setlongitude] = useState("")
    const [attacktype1_txt, setattacktype1_txt] = useState("")
    const [targtype1_txt, settargtype1_txt] = useState("")
    const [target1, settarget1] = useState("")
    const [gname, setgname] = useState("")
    const [weaptype1_txt, setweaptype1_txt] = useState("")
    const [nkill, setnkill] = useState("")
    const [nwound, setnwound] = useState("")
    const [ransomamt, setransomamt] = useState("")
    const {postFetch,data} = useFatch<TerrorModel[]>(url)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(1);
        
        const newTerror  = {eventid,iyear,imonth,iday,country_txt,region_txt,city,latitude,longitude,attacktype1_txt,targtype1_txt,target1,gname,weaptype1_txt,nkill,nwound,ransomamt} ;
        console.log(newTerror);
        
        
        postFetch(newTerror)
    
        console.log(3);
        
        ;
        console.log(data);
        setTerrors(data!)
        
        
        
      };

    
  return (
    <>
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="eventid">title</label>
            <input
              id="eventid"
              type="text"
              value={eventid}
              placeholder="eventid"
              onChange={(event) => {
                setEventId(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="iyear">iyear</label>
            <input
              id="iyear"
              type="text"
              value={iyear}
              placeholder="iyear"
              onChange={(event) => {
                setiyear(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="imonth">imonth</label>
            <input
              id="imonth"
              type="text"
              value={imonth}
              placeholder="imonth"
              onChange={(event) => {
                setimonth(event.target.value);
              }}
            />
          </div>

          <div className="form-group">  
            <label htmlFor="iday">iday</label>
            <input
              id="iday"
              type="text"
              value={iday}
              placeholder="iday"
              onChange={(event) => {
                setiday(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="country_txt">country_txt</label>
            <input
              id="country_txt"
              type="text"
              value={country_txt}
              placeholder="country_txt"
              onChange={(event) => {
                setcountry_txt(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="region_txt">region_txt</label>
            <input
              id="region_txt"
              type="text"
              value={region_txt}
              placeholder="region_txt"
              onChange={(event) => {
                setregion_txt(event.target.value);
              }}
            />
          </div>

          <div className="form-group">  
            <label htmlFor="city">city</label>
            <input  
              id="city"
              type="text"
              value={city}
              placeholder="city"
              onChange={(event) => {
                setcity(event.target.value);
              }}
            />
          </div>

          <div className="form-group">  
            <label htmlFor="latitude">latitude</label>
            <input  
              id="latitude"
              type="text"              
              value={latitude}
              placeholder="latitude"              
              onChange={(event) => {
                setlatitude(event.target.value);
              }}
            />  
          </div>

          <div className="form-group">  
            <label htmlFor="longitude">longitude</label>
            <input  
              id="longitude"
              type="text"
              value={longitude}
              placeholder="longitude"
              onChange={(event) => {
                setlongitude(event.target.value);
              }}
            />  
          </div>

          <div className="form-group">  
            <label htmlFor="attacktype1_txt">attacktype1_txt</label>
            <input  
              id="attacktype1_txt"
              type="text"
              value={attacktype1_txt}
              placeholder="attacktype1_txt"
              onChange={(event) => {
                setattacktype1_txt(event.target.value);
              }}
            />  
          </div>

          <div className="form-group">  
            <label htmlFor="targtype1_txt">targtype1_txt</label>
            <input  
              id="targtype1_txt"
              type="text"
              value={targtype1_txt}
              placeholder="targtype1_txt"
              onChange={(event) => {
                settargtype1_txt(event.target.value);   
              }}
            />  
          </div>

          <div className="form-group">  
            <label htmlFor="targsubtype1_txt">targsubtype1_txt</label>
            <input  
              id="targsubtype1_txt"
              type="text"
              value={target1}
              placeholder="targsubtype1_txt"
              onChange={(event) => {
                settarget1(event.target.value);
              }}
            />  
          </div>

          <div className="form-group">  
            <label htmlFor="gname">gname</label>
            <input  
              id="gname"
              type="text"
              value={gname}
              placeholder="gname"
              onChange={(event) => {
                setgname(event.target.value);
              }}
            />  
          </div>

          <div className="form-group">  
            <label htmlFor="gname">gname2</label>
            <input  
              id="gname2"
              type="text"
              value={gname}
              placeholder="gname"
              onChange={(event) => {
                setgname(event.target.value);
              }}
            />  
          </div>

          <div className="form-group">  
            <label htmlFor="weaptype1_txt">weaptype1_txt</label>
            <input  
              id="weaptype1_txt"
              type="text"
              value={weaptype1_txt}
              placeholder="weaptype1_txt"
              onChange={(event) => {
                setweaptype1_txt(event.target.value);
              }}
            />  
          </div>

          <div className="form-group">  
            <label htmlFor="nkill">weapsubtype1_txt</label>
            <input  
              id="nkill"
              type="text"
              value={nkill}
              placeholder="nkill"
              onChange={(event) => {
                setnkill(event.target.value);
              }}
            />  
          </div>      

          <div className="form-group">  
            <label htmlFor="nwound">nkill</label>  
            <input  
              id="nwound"
              type="text"
              value={nwound}
              placeholder="nwound"
              onChange={(event) => {
                setnwound(event.target.value);
              }}
            />  
          </div>

          <div className="form-group">  
            <label htmlFor="ransomamt">ransomamt</label>  
            <input  
              id="ransomamt"
              type="text"
              value={ransomamt}
              placeholder="ransomamt"
              onChange={(event) => {
                setransomamt(event.target.value);
              }}
            />  
          </div> 

          <button type="submit">Submit</button>    

          
              
             

        </form>

    </div>
        
    </>
  )
}

export default CRUD
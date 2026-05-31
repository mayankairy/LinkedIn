interface IProfileCard {
    profilePicture:string;
    bannerPicture:string;
    name:string;
    workingAt:string;
    residingIn:string;
    businessName:string;
    businessImage:any;
}
export function ProfileCard({profilePicture, bannerPicture,name,workingAt, residingIn , businessName, businessImage}:IProfileCard){
    return <div style={{border:"1px solid black"}}>
        <div>
            <img style={{borderRadius:"50%", width:"100px", height:"100px"}} src={bannerPicture} />
            <img src={profilePicture} />
        </div>
        <div>
            <h2>{name}</h2>
        </div>
        <div>
            {workingAt}
        </div>
        <div>
            {residingIn}
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{marginRight:"5px"}}>
                <img height="40px" width="40px" src={businessImage}/>
            </div>
            <div>
                <h5>{businessName}</h5>
            </div>
        </div>
    </div>
}
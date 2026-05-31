interface IAnalytics {
    viewers:number;
    impressions:number;
}
export function Analytics({viewers, impressions}:IAnalytics){
    return <div style={{border:"1px solid black"}}>
        <div style={{display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:"5px"}}>
            <div style={{fontSize:'15px'}}>
                <p><b>Profile Viewers</b></p>
            </div>
            <div style={{fontSize:'15px', color:"#000080"}}>
                {viewers}
            </div>
        </div>
{/*  top right bottom left */}
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:"5px"}}> 
            <div style={{fontSize:'15px'}}>
                <p><b>Profile Impressions</b></p>
            </div>
            <div style={{fontSize:'15px', color:"#000080"}}>
                {impressions}
            </div>
        </div>
    </div>
}
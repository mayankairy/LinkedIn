import {Dot, Earth, Ellipsis, X} from 'lucide-react';
interface IPosts {
    name:string;
    profilePicture:string;
    description:string;
    premium:boolean;
    updatedat:string;
    contents:string;
    photo?:string;
    likecount:number
}
// can define funtion outside or inside
function getDisplayDate(ms:number){
    const seconds=Math.floor(ms/1000);
    const minutes=Math.floor(seconds/60);
    const hours=Math.floor(minutes/60);
    const days=Math.floor(hours/24);
    const months=Math.floor(days/12);

    if(months !==0){
        return `${months} months ago`;
    }
    if(days !==0){
        return `${days} days ago`;
    }
    if(hours !==0){
        return `${hours} hours ago`;
    }
    if(minutes !==0){
        return `${minutes} minutes ago`;
    }
    return "Recently";
}
export function Posts(props:IPosts){
    return <div style={{background:"white", borderRadius:5,border:"5px solid gray" }}>
        <div>
            {/* header part */}
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <div style={{display:"flex"}}>
                    <div>
                        <img src={props.profilePicture} width={40} style={{borderRadius:"50%"}} />
                    </div>                   
                    <div>
                        <div style={{fontSize:20, fontWeight:600}}>
                            {props.name}
                        </div>
                        <div style={{fontSize:15, color:"gray", fontWeight:300}}>
                            {props.description}
                        </div>
                        <div style={{color:"blue", cursor:"pointer"}}>Visit my website</div>
                        <div>
                            <div>
                                {getDisplayDate(Date.now()-new Date(props.updatedat).getUTCMilliseconds())}
                            </div>
                            <div style={{}}>
                                {<Dot size={20} />}
                                {<Earth size={20}/>}
                            </div>
                        </div>
                    </div>
                </div>

{/* right part header */}
                <div >
                    {<Ellipsis />}
                    {<X />}
                </div>

            </div>
{/* contents part */}
            <div>

            </div>
        </div>
    </div>
}

interface ITopBarElements {
    title: string;
    icon: any;
    selected:boolean;
}
export function TopBarElements({title, icon, selected}:ITopBarElements){

    // return <div className="TopBarElement" style={{padding:5, margin:5, minWidth:50 , color: selected ? "black":"gray", borderBottom:selected? "1px solid black":"", cursor:"pointer"}}>
    return <div className={`TopBarElement ${selected ? 'active':''}`} >
    <div>
        <div style={{display:"flex", justifyContent:"center", }}>
             {icon}
        </div>

        <div style={{display:"flex", justifyContent:"center", }}>
            {title}
        </div>
    </div>
        
    </div>
}

// text size kum, image size jyada: css file mai
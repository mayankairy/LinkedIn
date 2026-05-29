interface ILogo {
    icon:string;
}
export function LinkedInLogo({icon}:ILogo){

    return <div style={{padding:5, margin:6}}>
        <div>
            <img src={icon} height={40} width={40} />
        </div>
    </div>
}
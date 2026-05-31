interface ISettings {
    icon:any;
    name:string;
}
export function Settings({icon,name}:ISettings){
    return <div>
        <div>
            <span>{icon}</span>
            <span>{name}</span>
        </div>
    </div>
}
interface ISearchBar {
    placeholder:string;
}
export function SearchBar({placeholder}:ISearchBar){

    return <div style={{padding:5, margin:5}} >
        <div>
            <input style={{width:"250px", height:"35px", borderRadius:"40px", border:"2px solid #776d69", }} type={"text"} placeholder={placeholder}  />
            {/* put a image of magnifier in this */}
        </div>
        
    </div>
}
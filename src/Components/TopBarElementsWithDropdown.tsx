interface ITopBarElements {
    title:string;
    icon:any;
    drop:any;
    selected:boolean
}
export function TopBarElementsWithDropdown({title,icon,drop, selected}:ITopBarElements){
    // return <div style={{padding:5, margin:5, minWidth:50, color:selected?"black":"gray", borderBottom:selected?"1px solid black":"", cursor:"pointer"}}>
    // return <div className="TopBarElementsWithDropdown">
    return <div className={`TopBarElementsWithDropdown ${selected ? 'active':''}`}>
       <div style={{display:"flex", justifyContent:"center" }}>
            {/* <img src={icon} height={20} width={20}  /> */}
            {icon}
        </div>

        {/* <div>
                {title}
        </div> */}

        <div>
            <span>{title}</span> 
            {/* <span style={{}}>{drop}</span> */}
            {/* <img style={{height:"20px", width:"20px"}} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAV1BMVEX///8AAADa2tobGxunp6cSEhLPz8/y8vI6Ojrn5+fBwcGtra37+/uioqK1tbX29vZpaWkMDAyOjo5LS0t/f3+FhYUuLi5jY2NBQUF3d3cjIyPg4OCwsLDYxluyAAABr0lEQVR4nO3aaW7CUAxF4TygZWqZ0rnd/zqLqFQISSCD7WdL5yzgOp8SiT8UBRERERERERERERERERERERERERERERERERGRVsv17NHs2NPqeTNXWd7u0rHFRGW81mZ6PLY/aEyX6dSDyUuZ/R1LL3rTJpL/Y0n+AyiTneTsSK/i42/JTHLhSO/i6x/JSnLpSJ/i84dkJKk40kp8f/5lI6k6SoULk6mFpOpYqPwkWkgsHBYSG4e+xMqhLbFz6EosHZoSW4eexNqhJbF36EhyODQkeRzyklwOaUk+h6wkp0NSktchJ8ntkJLkd8hIPDgkJD4c4yVeHGMlfhzjJJ4cYyS+HMMl3hxDJf4cwyQeHUMkPh39JV4dfSV+Hf0knh19JL4d3SXeHV0l/h3dJBEcXSQxHPclURz3JHEctyWRHLcksRztkmiONkk8R7MkoqNJEtNRl0R1XEv2YR3XkriOdkk0R5sknqNZEtHRJInpqEuiOq4lcR1VSWTHpSS24yyJ7iiK79NfuHfb3M8h0GT9s8z9DERERERERERERERERERERERERERERERERERE7f0CfZUPKmogP0oAAAAASUVORK5CYII="} width={5} /> */}
        </div>
        <div>
            <span style={{}}>{drop}</span>
        </div>

    </div>
}

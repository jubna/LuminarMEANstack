
//array of objects

var ipl=[
    {team_name:"rcb",mp:2,won:2,los:0,pts:4},
    {team_name:"mi",mp:2,won:1,los:1,pts:2},
    {team_name:"pb",mp:1,won:1,los:0,pts:2},
    {team_name:"dc",mp:2,won:1,los:1,pts:2},
    {team_name:"rr",mp:2,won:1,los:1,pts:2},
    {team_name:"kkr",mp:2,won:1,los:1,pts:2},
    {team_name:"srh",mp:2,won:0,los:2,pts:0},
    {team_name:"csk",mp:1,won:0,los:1,pts:0},

]

for(let team of ipl){
    console.log(team["team_name"]);
}
//print rcb data
for(let team of ipl){
    if(team["team_name"]=="rcb"){
    console.log(team);
    }
} 
//print highest pt
var points=[]

for(let team of ipl){
   points.push(team["pts"])
  
   
}
console.log(points);
points.sort((i,j)=>i-j)
console.log(points);
var highest=points.length-1
console.log("Highest point: "+points[highest]);
console.log("team with highest point");
for(let team of ipl){
if(team["pts"]==points[highest]){
    console.log(team["team_name"]);
}
}


var temp=[
    {distname:"tvm",temp:25},
    {distname:"ekm",temp:26},
    {distname:"tsr",temp:27},
    {distname:"apy",temp:22},
    {distname:"ktm",temp:27},
    {distname:"pkd",temp:30},
    {distname:"knr",temp:28},
    {distname:"tvm",temp:24},
    {distname:"ekm",temp:25},
    {distname:"tsr",temp:29},
    {distname:"apy",temp:25},
    {distname:"ktm",temp:26},
    {distname:"pkd",temp:28},
    {distname:"knr",temp:29},
]


  //highest tem in dist
  // dist:highesttemp
  // ekm:29 
  var result_tvm={}, result_ekm={},result_tsr={}, result_apy={},result_ktm={},result_pkd={},result_knr={}
  var tempt_tvm=[] , tempt_ekm=[] ,tempt_tsr=[],tempt_apy=[],tempt_ktm=[],tempt_pkd=[],tempt_knr=[]
  
for(let dist of temp){
  if(dist["distname"]=="tvm"){
     tempt_tvm.push(dist["temp"])
     
     
     result_tvm["distname"]="tvm";

     tempt_tvm.sort((i,j)=>i-j)
     var highest=tempt_tvm.length-1
     result_tvm["temp"]=tempt_tvm[highest]
    
   
  }
  if(dist["distname"]=="ekm"){
    tempt_ekm.push(dist["temp"])
    
    
    result_ekm["distname"]="ekm";
    tempt_ekm.sort((i,j)=>i-j)
     var highest=tempt_ekm.length-1
     result_ekm["temp"]=tempt_ekm[highest]
    
 }
 if(dist["distname"]=="tsr"){
  tempt_tsr.push(dist["temp"])
  
  
  result_tsr["distname"]="tsr";
  
  tempt_tsr.sort((i,j)=>i-j)
  var highest=tempt_tsr.length-1
  result_tsr["temp"]=tempt_tsr[highest]
}
if(dist["distname"]=="apy"){
  tempt_apy.push(dist["temp"])
  
  
  result_apy["distname"]="apy";
  
  tempt_apy.sort((i,j)=>i-j)
  var highest=tempt_apy.length-1
  result_apy["temp"]=tempt_apy[highest]
}
if(dist["distname"]=="ktm"){
  tempt_ktm.push(dist["temp"])
  
  
  result_ktm["distname"]="ktm";
  
  tempt_ktm.sort((i,j)=>i-j)
  var highest=tempt_ktm.length-1
  result_ktm["temp"]=tempt_ktm[highest]
}
if(dist["distname"]=="pkd"){
  tempt_pkd.push(dist["temp"])
  
  
  result_pkd["distname"]="pkd";
  
  tempt_pkd.sort((i,j)=>i-j)
  var highest=tempt_pkd.length-1
  result_pkd["temp"]=tempt_pkd[highest]
}
if(dist["distname"]=="ktm"){
  tempt_ktm.push(dist["temp"])
  
  
  result_ktm["distname"]="ktm";
  
  tempt_ktm.sort((i,j)=>i-j)
  var highest=tempt_ktm.length-1
  result_ktm["temp"]=tempt_ktm[highest]
}
if(dist["distname"]=="knr"){
  tempt_knr.push(dist["temp"])
  
  
  result_knr["distname"]="knr";
  
  tempt_knr.sort((i,j)=>i-j)
  var highest=tempt_knr.length-1
  result_knr["temp"]=tempt_knr[highest]
}
}
  
var result=[result_tvm ,result_ekm,result_tsr,result_apy,result_ktm,result_pkd,result_knr]
console.log(result);
for(let res of result){
  console.log(res["distname"]+" : "+res["temp"]);
}
/*  var result={}
 for(let dist of temp){
   if(dist["distname"] in result){

   }
   else{
     result[dist["distname"]]=dist["temp"]
   }
 }
 console.log(result); */
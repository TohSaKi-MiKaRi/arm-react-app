import { cards } from "./data";
import { useState } from "react";
function IsMember ({ active } : {active:boolean}){
    if(active)
        return <span>✅ Hi, VIP Member.</span>
        else
        return <span>❌ Member Only!!!!</span>
}
function Profile ({id, name, biot, bgProf, userIcon, userName, createdAt, active} :
    {id:number, name:string, biot:any, bgProf:string, userIcon:string, userName:string, createdAt:string, active:boolean 
}) {
    return (
<div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${bgProf})`,color: "#4465EB"}} title="Arm">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              <IsMember active={active} />
            </p>
            
            <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{biot}<br />

            </p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={userIcon} alt="Avatar of Jonathan Reinink"/>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{userName}</p>
              <p className="text-gray-600">{createdAt}</p>
            </div>
          </div>
        </div>
        <a href={`/cards/${id}`} className="text-blue-500 hover:underline">View Details</a>
        </div>
        );
}

export function Mycard (){
  const [active,setActive] = useState(true);
    const name ="Parit Pholnikorn";
    const note ="Web Programming";
    const note2 ="#softwareengineering";
    const chk = true;
    const items = cards.filter(cardItems => cardItems.active === active);
    const cardItems = items.map(cardItem => <>
   <Profile
   id= {cardItem.id}
   name={cardItem.name}
   biot={cardItem.biot}
   bgProf={cardItem.bgProf}
   userIcon={cardItem.userIcon}
   userName={cardItem.userName}
   createdAt={cardItem.createdAt}
   active={cardItem.active}/>
    </>);
    function handleClackActive(){
      setActive(true);
      
      
    }
    function handleClackNonActive(){
      setActive(false);
      
      
    }
    return (
     
      <div className ="m-3 bg-green-400 p-10">
        <h1 className="text-3xl">My Card: {name}</h1>
        <div className="flex flex-row">
        <div className = "basis-1/2 m-2 p-3 bg-green-300 rounded-3xl text-blue-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>{note}
</div>    
       
        <div className = "basis-1/2 m-2 p-3 bg-green-300 rounded-3xl "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
{note2}</div></div>
        {/* <Profile /><hr /> */}
        {cardItems}
        <button className="w-1/2 bg-blue-600 text-red-300 rounded-3xl" onClick={handleClackActive}>Active</button>
        <button className="w-1/2 bg-blue-900 text-red-300 rounded-3xl" onClick={handleClackNonActive}>Non Active</button>
      </div>
       
        
       
);
}
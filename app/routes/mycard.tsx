import { cards } from "./data";
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
        </div>
        );
}

export function Mycard (){
    const name ="Parit Pholnikorn";
    const note ="Web Programming #softwareengineering";
    const chk = true;
    const cardItems = cards.map(cardItem => <>
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
    return (
        <>
        <h1 className="text-3xl">My Card: {name}</h1>
        {/* <Profile /><hr /> */}
        {cardItems}
       
        
        </>
);
}

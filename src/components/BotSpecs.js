import React from "react";

const BotSpecs = props => {
  return (
   <div
     className="ui card"
     key={props.bot.id}
     
     
   >
     <div className="image" onClick ={(bot)=> props.addToArmy(props.bot)}>
       <img alt="oh no!"  src={props.bot.avatar_url} />
     </div>
     <div className="content">
       <div className="header">
         {props.bot.name}
         {/* onClick ={()=> props.addToArmy(props.bot)}  */}
       </div>

       <div className="meta">
         <small>{props.bot.catchphrase}</small>
       </div>
     </div>
     <div className="extra content">
       <span>
         <i className="icon heartbeat" />
         {props.bot.health}
       </span>

       <span>
         <i className="icon lightning" />
         {props.bot.damage}
       </span>
       <span>
         <i className="icon shield" />
         {props.bot.armor}
       </span>
     </div>
   </div>
 );
};
export default BotSpecs;

// const BotSpecs = props => {
//   let { bot } = props;

//   let botType;

//   switch (bot.bot_class) {
//     case "Assault":
//       botType = <i className="icon large circular military" />;
//       break;
//     case "Defender":
//       botType = <i className="icon large circular shield" />;
//       break;
//     case "Support":
//       botType = <i className="icon large circular ambulance" />;
//       break;
//     default:
//       botType = <div />;
//   }

//   return (
//     <div className="ui segment">
//       <div className="ui two column centered grid">
//         <div className="row">
//           <div className="four wide column">
//             <img
//               alt="oh no!"
//               className="ui medium circular image bordered"
//               src={bot.avatar_url}
//             />
//           </div>
//           <div className="four wide column">
//             <h2>Name: {bot.name}</h2>
//             <p>
//               <strong>Catchphrase: </strong>
//               {bot.catchphrase}
//             </p>
//             <strong>
//               Class: {bot.bot_class} {botType}
//             </strong>
//             <br />
//             <div className="ui segment">
//               <div className="ui three column centered grid">
//                 <div className="row">
//                   <div className="column">
//                     <i className="icon large circular red heartbeat" />
//                     <strong>{bot.health}</strong>
//                   </div>
//                   <div className="column">
//                     <i className="icon large circular yellow lightning" />
//                     <strong>{bot.damage}</strong>
//                   </div>
//                   <div className="column">
//                     <i className="icon large circular blue shield" />
//                     <strong>{bot.armor}</strong>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               className="ui button fluid"
//               onClick={() =>
//                 console.log('connect this to a function that shows all bots')
//               }
//             >
//               Go Back
//             </button>
//             <button
//               className="ui button fluid"
//               onClick={() =>
//                 console.log(
//                   "connect this to a function that adds this bot to your bot army list"
//                 )
//               }
//             >
//               Enlist
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// };



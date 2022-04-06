import React,{Fragment,useEffect,useState} from 'react';
import Avvvatars from 'avvvatars-react'
import styles from './styles.module.css';
import download from "./bot.png";
export const FromChat = ({ text }) => {
   const [replay,setReplay] = useState([]);
   const [loadingBot,setLoadingBot] = useState(false); 
   const [msgNow,setMsgNow] = useState("Hello,What's your name?")
  useEffect(()=>{ 
     if(text.length > 0){
      for(let x of text){
        setReplay([...replay,
          {
           message:x,
           botReplay:msgNow === "Hello,What's your name?"? `Uh good welcome, ${x}`:""
          },
          {
            message:"",
            botReplay:"How can i help you?"
          }
      ]);
      
      }
   
  
      setLoadingBot(true);
      setTimeout(()=>{
      setLoadingBot(false);

      },2000)
     }  
  },[text])
   return (
       <Fragment>
         <ul className={styles.lists}>
             <li className={styles.list}>
             <div className={styles.listContainer}>
             <div className={styles.avatar}>  
             <img src="https://gypsydangerous.github.io/number-guessing-bot/bot.png" alt="Bot Avatar" />
             </div>
             <p className={styles.messageUser}>
              Hello,What's your name?
             </p>
             </div>
             </li>
             {replay.length> 0 && text.length > 0 && replay.map((db,i)=>{
               return( 
               <Fragment key={i}>
             <li className={styles.list} style={{visibility:db.message === ""? 'hidden':'visible',height:db.message === "" ? "0":"3rem"}}>
             <div className={styles.listContainer}>
             <p className={styles.messageUser}>
               {db.message} 
             </p>
             <div className={styles.avatar}>  
             <Avvvatars style='shape' size={40} value="tim@apple.com" />
             </div>
             </div>
             </li>
          
             <li className={styles.list}>
             <div className={styles.listContainer}>
             <div className={styles.avatar}>  
             <img src="https://gypsydangerous.github.io/number-guessing-bot/bot.png" alt="Bot Avatar" />
             </div>
             <p className={styles.messageUser}>
               {loadingBot? 
                <div id={styles.fountainG}>
                  <div id={styles.fountainG_1} className={styles.fountainG}></div>
                  <div id={styles.fountainG_2}  className={styles.fountainG}></div>
                  <div id={styles.fountainG_3}  className={styles.fountainG}></div>
                  <div id={styles.fountainG_4}  className={styles.fountainG}></div>
                
                </div>
               :db.botReplay
              }
             </p>
             </div>
             </li>
                        
          </Fragment>
          )
          })
          }
         </ul>
       </Fragment>
   )
}
import React,{Fragment,useEffect,useState} from 'react';
import Avvvatars from 'avvvatars-react'
import styles from './styles.module.css';
import download from "./bot.png";
export const FromChat = ({ text }) => {
   const [replay,setReplay] = useState("");
   const [loadingBot,setLoadingBot] = useState(false); 
  useEffect(()=>{
    
     if(text === "mohamed"){
      setLoadingBot(true);
 
      setTimeout(()=>{
         
        setReplay("oh, good")
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
             {text.toString().trim() !== ""?
             <li className={styles.list}>
             <div className={styles.listContainer}>
             <p className={styles.messageUser}>
               {text} 
             </p>
             <div className={styles.avatar}>  
             <Avvvatars style='shape' size={40} value="tim@apple.com" />
             </div>
             </div>
             </li>
             :""
             }
             {replay.toString().trim() !== ""  || loadingBot? 
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
              :replay}
             </p>
             </div>
             </li>
             :""
            }

         </ul>
       </Fragment>
   )
}
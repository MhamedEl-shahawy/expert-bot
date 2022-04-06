import React,{useState,useRef} from 'react'
import styles from './styles.module.css'
import {MdForum,MdOutlineSend,MdClose} from "react-icons/md";
import {FromChat} from "./FormChat";
export const ExampleComponent = ({ text }) => {
  const [show,setShow] = useState(true);
  const [userInput,setUserInput] = useState("");
  const [message,setMessage] = useState("");
  const inputMessage = useRef(null);
  const handleChanges = (e)=>{
     e.preventDefault();
    setMessage(inputMessage.current.value);
    inputMessage.current.value = "";
  }
  return <section className={styles.test}>
           <section className={styles.chatBotIcon}>
             <a onClick={()=> setShow(!show)}>
              {show ? 
               <MdForum/>
               :
               <MdClose/>
              }
             </a>
           </section>
           {show ? "":
           <section className={styles.chatContainer}>
             <FromChat text={message} />
             <form className={styles.formMessage} onSubmit={(e)=> handleChanges(e)}>
                <div className={styles.messageContainer}>
                  <input type="text" ref={inputMessage} className={styles.messageInput} id="message" placeholder='    '/>
                  <label htmlFor='message' className={styles.sendIcon}><MdOutlineSend/></label>

                </div>
             </form>
           </section>
           }
         </section>
}

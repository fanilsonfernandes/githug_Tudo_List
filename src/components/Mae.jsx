;import React, {useState} from 'react';
import styles from './Mae.module.css';
import  {PlusCircle}  from 'phosphor-react'
import Clipboard from '../esesst/Clipboard.svg';
import { Comment } from './Comment'








export function Mae(props) {

    const [comments,setcomment] = useState([
        'post miuto bacana!'

    ]);

   const [newCommentInput, setnewCommentInput]= useState('')


    function handleCreatNewComment(event){
        event.preventDefault();
        const  newCommentText=event.target.comments.value
        
        setcomment([...comments, newCommentText ]);
        setnewCommentInput('');

      

        
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
       setnewCommentInput(event.target.value);
    }

    function handleNewCommentInvald(){
        event.target.setCustomValidity('Esse campo e obrigatorio !');
    }

    function deleteComments(commentToDelete){
        const commentsWithoutDeleteOne = comments.filter(comment =>{
            return comments != commentToDelete
        })
      
        setcomment(commentsWithoutDeleteOne);
    }


    
   
    return (
<div className={styles.butForm}>
<form onSubmit={ handleCreatNewComment}>
<input
name="comments"
value={newCommentInput}
 placeholder= "Adicione uma nova tarefa" 
 onChange={handleNewCommentChange}
 onInvalid={handleNewCommentInvald}
 required
/>


            <button type="submi">Criar
                <PlusCircle className={styles.icon} size={20}/>
            </button>
            </form>
         
            <div className={styles.task}>
               <div className={styles.tpc}>
                <div className={styles.twoBox}>
                    <div className={styles.boxFirst}>
                <span className={styles.tareCriada}>Tarefas criadas</span>
                <span>02</span>
                </div>
                
                <div className={styles.boxSecond}>
                    <span className={styles.tareConcluida}>Concluídas</span>
                <span>02</span>
                </div>
               
                </div>
              
              
                </div> 
               
                        
                <div className={styles.empt} >
          

                   <img src={Clipboard} alt="icon"/>
                    <div className={styles.text}>
                    <p>Você ainda não tem tarefas cadastradas </p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                 
                </div>
                {comments.map(comment=>{
                    return (
                    <Comment  
                     key={comment} 
                     content={comments} 
                      ondeleteComments={deleteComments}
                      />)
                         
                    
                })}
            </div>
            
           </div>
            
    


    )
}
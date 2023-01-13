import {Circle, Trash, Check} from 'phosphor-react'
import { TaskModel } from '../../shared/models/TaskModel'
import styles from './Task.module.css'

interface ITaskProps{
  value: TaskModel
  onCheck: (id:string) => void
  onDelete: (id:string)=>void
}

export function Task({value, onCheck, onDelete}:ITaskProps) {

  function handleTask() {
    onCheck(value.id)
  }

  function handleDeleteTask(){
    onDelete(value.id)
  }

  return(
    <div className={styles.taskContainer}>
      {value.isSolved
        ?(<div className={styles.taskCheck} onClick={handleTask}><Check size={16} /></div>)
        :(<Circle size={24} className={styles.taskNoCheck} onClick={handleTask}/>)}
      <p onClick={handleTask} className={value.isSolved
        ? styles.taskDescriptionChecked 
        : styles.taskDescription}>
          {value.description}
      </p>
      <button className={styles.taskDelete}>
        <Trash size={24} onClick={handleDeleteTask}/>
      </button>
    </div>
  )
}
import { PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import clipboardSVG from './assets/clipboard.svg'
import { TaskModel } from './shared/models/TaskModel'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './components/Task/Task'

export function App() {

  const [description, setDescription] = useState<string>('')

  const [tasks, setTasks] = useState<TaskModel[]>([new TaskModel('Criar Layout'),
  new TaskModel('Criar Projeto'),
  new TaskModel('Aplicar protótipo')])

  function countSolvedTasks(): number {
    return tasks.filter(task=>task.isSolved).length
  }

  function handleDescription(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value)
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()
    const task = new TaskModel(description)
    setTasks([...tasks, task])
    setDescription('')
  }

  function toogleTask(id:string){
    const task = tasks.find(item => item.id == id)
    task?.handleSolved()
    if(task){
      setTasks([...tasks])
    }
  }

  function deleteTask(id:string) {
    const indextask = tasks.findIndex(task => task.id == id)
    if(indextask > -1){
      const newTasks = tasks.filter(task=>task.id !== id)
      setTasks(newTasks)
    }
  }

  function renderTasks() {
    return tasks.map(task=><Task key={task.id} value={task} onCheck={toogleTask} onDelete={deleteTask}/>)
  }

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.formContainer}>
        <form onSubmit={handleCreateTask} className={styles.form}>
          <input type="text" placeholder='Adicione uma nova tarefa' value={description} onChange={handleDescription} required/>
          <button disabled={!description.length}>
            <span>Criar</span>
            <PlusCircle size={16}/>
          </button>
        </form>
      </div>
      <main className={styles.main}>
        <div className={styles.info}>
          <div>
            Tarefas criadas <span> {tasks.length} </span>
          </div>
          <div>
            Concluídas <span>{tasks.length? `${countSolvedTasks()} de ${tasks.length}`: `0`} </span>
          </div>
        </div>
        <div className={styles.taskContainer}>
          {tasks.length ?
          <div className={styles.tasks}>
            {renderTasks()}
          </div>
          :(
            (<div className={styles.tasksEmpty}>
              <div className={styles.message}>
                <img src={clipboardSVG} alt="clipboard image" />
                <div>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </div>
            </div>)
          )
          }
        </div>
      </main>
      
    </div>
  )
}


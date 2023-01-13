import { PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import clipboardSVG from './assets/clipboard.svg'

export function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder='Adicione uma nova tarefa'/>
          <button>
            <span>Criar</span>
            <PlusCircle size={16}/>
          </button>
        </form>
      </div>
      <main className={styles.main}>
        <div className={styles.info}>
          <div>
            Tarefas criadas <span> 0 </span>
          </div>
          <div>
            Concluídas <span> 0 </span>
          </div>
        </div>
        <div className={styles.taskContainer}>
          <div className={styles.tasksEmpty}>
            <div className={styles.message}>
              <img src={clipboardSVG} alt="clipboard image" />
              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  )
}


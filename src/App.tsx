import { PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import { Header } from './components/Header/Header'

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
    </div>
  )
}


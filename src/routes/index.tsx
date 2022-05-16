import { Routes, Route } from 'react-router-dom'
import Daily from './daily'
import Login from './login'
import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="daily" element={<Daily />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

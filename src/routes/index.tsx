import { Routes, Route } from 'react-router-dom'
import Daily from './daily'
import Login from './login'
import Main from './main'
import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="main/*" element={<Main />}>
            <Route path="" element={<Daily />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

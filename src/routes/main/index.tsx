import { Outlet } from 'react-router-dom'
import styles from './main.module.scss'

// 로그인 후 메인 페이지
// 헤더 풋터 사이에 메인 페이지
const Main = () => {
  return (
    <div className={styles.main}>
      <div>헤더</div>
      <Outlet />
      <div>풋터</div>
    </div>
  )
}

export default Main

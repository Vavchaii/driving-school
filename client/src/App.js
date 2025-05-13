import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import './App.css'
import LoginForm from './components/Auth/LoginForm'
import { observer } from 'mobx-react-lite'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="personal" element={<LoginForm />} />
          <Route path="about" element={<h1>О нас</h1>} />
          <Route path="contacts" element={<h1>Контакты</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default observer(App)

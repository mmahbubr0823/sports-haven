
import { DownloadOutlined } from '@ant-design/icons'
import './App.css'
import { Button, } from 'antd'
function App() {
  

  return (
    <>
     <h1>hellow</h1>
     <Button className='bg-yellow-400' icon={<DownloadOutlined/>}>
            Download
          </Button>
    </>
  )
}

export default App

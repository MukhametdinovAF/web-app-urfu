//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { AppList } from './features/apps/AppList'
import { EditAppButton } from './features/apps/EditAppButton'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//import './jstests.ts'

const queryClient = new QueryClient()

function App() {

 

  // const [apps, setApps] = useState<AppType[]>([])

  // useEffect(() => {
  //   reloadApps()
  // },[]) 

  // const reloadApps = async () => {
  //   try {
  //     const apps = await ky.get('http://localhost:3000/apps').json<AppType[]>()
  //     setApps(apps)
  //   }
  //   catch (err){
  //     console.error(err)
  //   }
  // }


  

  return <>
    <QueryClientProvider client={queryClient}>
    <EditAppButton/>
    <AppList/>
    </QueryClientProvider>
  </>
}

export default App

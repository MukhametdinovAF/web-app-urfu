//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { FormEventHandler, useEffect, useState } from 'react'
import './App.css'
import ky from 'ky'
//import './jstests.ts'

type AppType = {
  id: number,
  name: string,
  url: string,
  healthy: boolean
}

function App() {

  const [apps, setApps] = useState<AppType[]>([])

  useEffect(() => {
    reloadApps()
  },[]) 

  const reloadApps = async () => {
    try {
      const apps = await ky.get('http://localhost:3000/apps').json<AppType[]>()
      setApps(apps)
    }
    catch (err){
      console.error(err)
    }
  }

  const handleAdd: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const app = Object.fromEntries(formData.entries()) as never as AppType
    console.log(app.name, app.url)
    const createdApp = await ky.post('http://localhost:3000/apps', {json: {healthy: false, ...app} }).json<AppType>()
    await reloadApps()
    e.currentTarget.reset()
  }

  async function removeApp(app) {
    await ky.delete(`http://localhost:3000/apps/${app.id}`)
    await reloadApps()
  }

  return <>
    <form onSubmit={handleAdd}>
      <input type='text' name='name'></input>
      <br />
      <input type='text' name='url'></input>
      <br />
      <button type='submit'>Добавить</button>
    </form>

    {apps.map(app => {
      return <div>
        {app.name}
        <a href={app.url}>{app.url}</a>
        {app.healthy ? 'HEALTHY' : 'UNHEALTHY'}
        <button onClick={() => removeApp(app)}>Удалить</button>
      </div>
    })}
  </>
}

export default App

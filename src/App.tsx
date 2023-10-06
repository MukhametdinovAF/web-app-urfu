//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { FormEventHandler, useState } from 'react'
import './App.css'
//import './jstests.ts'

const array = [1, 2, 3]

const appsData = array.map(elem => {
  return {
    id: elem,
    name: `app${elem}`,
    url: `http://app${elem}.ru`,
    healthy: false
  }
})

type AppType = {
  id: number,
  name: string,
  url: string,
  healthy: boolean
}

function App() {

  const [apps, setApps] = useState<AppType[]>(appsData)

  const handleAdd: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const app = Object.fromEntries(formData.entries()) as never as AppType
    console.log(app.name, app.url)
    setApps([...apps, { id: 4, healthy: false, ...app }])
    e.currentTarget.reset()
  }

  function removeApp(app) {
    console.log('click')
    const index = apps.indexOf(app)
    const copy = [...apps]
    copy.splice(index, 1)
    setApps(copy)
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

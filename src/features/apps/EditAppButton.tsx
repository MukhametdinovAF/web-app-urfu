import React, { FormEventHandler } from 'react'
import { AppType } from './AppType'
import ky from 'ky'

export const EditAppButton: React.FC = React.memo(()=>{


  const handleAdd: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const app = Object.fromEntries(formData.entries()) as never as AppType
    await ky.post('http://localhost:3000/apps', {
        json: {healthy: false, ...app}
     }).json<AppType>()
    //await reloadApps()
    e.currentTarget.reset()
  }
  
    return <form onSubmit={handleAdd}>
    <input type='text' name='name'></input>
    <br />
    <input type='text' name='url'></input>
    <br />
    <button type='submit'>Добавить</button>
  </form>
})
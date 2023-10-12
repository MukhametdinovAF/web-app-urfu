import { useQuery } from '@tanstack/react-query'
import ky from 'ky'
import React from 'react'
import { AppType } from './AppType'

export const AppList: React.FC = React.memo(()=>{

    const {data: apps} = useQuery({ 
        queryKey: ['apps'], 
        queryFn: ()=> ky.get('http://localhost:3000/apps').json<AppType[]>()
         })
    
    async function removeApp(app) {
        await ky.delete(`http://localhost:3000/apps/${app.id}`)
        //await reloadApps()
      }

    return <>
        {apps?.map(app => {
            return <div key = {app.id}>
                 {app.name}
                <a href={app.url}>{app.url}</a>
                {app.healthy ? 'HEALTHY' : 'UNHEALTHY'}
                 <button onClick={() => removeApp(app)}>Удалить</button>
             </div>
      })}
</>
})
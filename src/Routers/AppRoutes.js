import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Login } from '../Pages'
import { MovieRoutes } from './MovieRoutes'



export const AppRoutes = () => {

    return (
        <>
            <Routes>
                {/* Carga login de forma automática. Si no cae ahí, se redirije a 'MovieRoutes', en donde se resuelve el comodín */}
                <Route path='/login' element={<Login/>}/>
                <Route path='/*' element={<MovieRoutes/>}/>
            </Routes>
        </>
    )

}

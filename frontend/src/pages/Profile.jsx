import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

    return (
        <section className='flex items-center'>
            <div className='mx-auto flex max-w-96 w-full flex-col items-center gap-4'>

                <h1 className='text-3xl font-bold text-black'>Olá, usuário!</h1>
                
                <div className='hidden lg:flex items-center border border-gray-300 pr-4 pl-6 py-2 rounded-full shadow-md'>
                    <Link to='/' className='pr-4 border-r border-r-gray-300'>Meu perfil</Link>
                    <Link to='/' className='px-4 border-r border-r-gray-300 text-primary-400'>Minhas Reservas</Link>
                    <Link to='/' className='px-4 text-red'>Sair</Link>
                </div>

            </div>
        </section>
    )
}

export default Profile;

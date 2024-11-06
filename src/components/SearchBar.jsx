    import React, { useState } from 'react'
    import { useForm } from 'react-hook-form'
    import { Input } from '../index'
    import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




    const SearchBar = () => {
        const { register, handleSubmit, setValue, watch } = useForm()
        const search = async (data) => {
            try {
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        const clearSearch = () => {
            setValue("search", "")
        }
        const searchTerm = watch("search");
        return (

            <form className='flex items-center' onSubmit={handleSubmit(search)}>
                <div className=' sm:pr-[2%]'><FontAwesomeIcon icon={faMagnifyingGlass} className='sm:text-[18px]'
                /></div>
                <Input
                    type="text"
                    className=' text-white bg-black sm:w-[22rem]  outline-none'
                    placeholder="Search songs, artists, podcasts "                    
                    {...register("search")}
                    
                />
                <div className=' flex justify-center items-center sm:w-[5vw] '>
                    {searchTerm && <button type='button' onClick={clearSearch} className='text-white sm:text-[1.7rem] sm:p-[3px_5px]'>X</button>}
                </div>
            </form>

        )
    }

    export default SearchBar

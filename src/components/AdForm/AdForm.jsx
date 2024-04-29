import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './AdForm.css'

export const AdForm = ({ onSubmit, ad }) => {
    const [imageUrl, setImageUrl] = useState(ad ? ad.image : null)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setImageUrl(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const onSubmitHandler = (data) => {
        const adData = {
            id: ad?.id || generateUniqueId(),
            ...data,
            image: imageUrl,
        }
        onSubmit(adData)
        reset()
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        {...register('title', { required: true })}
                        defaultValue={ad ? ad.title : ''}
                        type="text"
                        id="title"
                    />
                    {errors.title && (
                        <span className="error">Title is required</span>
                    )}
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        {...register('description', { required: true })}
                        defaultValue={ad ? ad.description : ''}
                        id="description"
                    />
                    {errors.description && (
                        <span className="error">Description is required</span>
                    )}
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        {...register('image', { required: true })}
                        onChange={handleImageChange}
                        id="image"
                    />
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Image Preview"
                            className="image-preview"
                        />
                    )}
                    {errors.image && (
                        <span className="error">Image is required</span>
                    )}
                </div>
                <button type="submit">{ad ? 'Update' : 'Create'}</button>
            </form>
        </div>
    )
}

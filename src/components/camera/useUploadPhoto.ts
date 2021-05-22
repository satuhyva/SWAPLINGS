import AppContext from '../../app-state/AppContext'
import { useContext, useState } from 'react'
import axios from 'axios'
import { LOCALHOST_REST } from '@env'
import { CameraCapturedPicture } from 'expo-camera'
import { dataURLToBlob } from 'blob-util'
import { UploadedImageType } from '../../types/item/UploadedImageType'


type UseSavePhotoType = {
    uploadPhoto: (photo: CameraCapturedPicture) => Promise<UploadedImageType | undefined>,
}

type UploadImageServerResponseType = {
    public_id: string,
    secure_url: string    
}



export const useUploadPhoto = (): UseSavePhotoType => {

    const { state } = useContext(AppContext)
    const loggedInUser = state.loggedInUser

    const uploadPhoto = async (photo: CameraCapturedPicture): Promise<UploadedImageType | undefined> => {
        console.log('upp', loggedInUser)
        if (loggedInUser && loggedInUser.jwtToken) {
            console.log('dfdfdfdf')
            const formData = new FormData()
            if (photo && photo.uri) {
                const photoBlob = dataURLToBlob(photo.uri)
                formData.append('image', photoBlob)
            }
            const configurations = {
                headers: {
                    'authorization': loggedInUser.jwtToken,
                    'content-type': 'multipart/form-data'
                }
            }
            try {
                const uploadImageResponse = await axios.post(LOCALHOST_REST, formData, configurations)
                const uploadedImageData = parseUploadServerResponseData(uploadImageResponse.data)
                return { ...uploadedImageData, clientUrl: photo.uri }
            } catch (error) {
                console.log('error', error)
            }
        }
        return undefined
    }


    return {
        uploadPhoto,
    }

}


const parseUploadServerResponseData = (responseData: unknown): UploadedImageType  => {
    const data = responseData as UploadImageServerResponseType
    return {
        publicId: parseText(data.public_id, 'Uploaded image public id'),
        secureUrl: parseText(data.secure_url, 'Uploaded image secure url'), 
        clientUrl: undefined
    }
}


const parseText = (text: unknown, target: string): string => {
    if (!text || !isString(text)) throw new Error(`When present, ${target} must be string.`)
    return text
}


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String
}
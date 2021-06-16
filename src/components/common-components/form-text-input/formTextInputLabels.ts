import { ADD_VALIDATION_CONSTANTS } from '../../add/validations'




    export const placeHolders = {
        username: '', //'Username',
        password: '', //'Password',
        passwordConfirm: '', //'Confirm password',
        email: '', //'Email',
        itemTitle: '',
        itemDescription: '',
        itemBrand: '',
        searchTitle: 'e.g. table, sofa, chair',
        searchDescription: 'e.g. living room, white, like new',
        searchBrand: 'e.g. Interface, Pohjanmaan',
        matchPost: 'Type a new message here...'
    }

    export const labels = {
        username: 'Username',
        password: 'Password',
        passwordConfirm: 'Confirm password',
        email: 'Email (optional, for password reset purpose)',
        itemTitle: 'Give a short title (e.g. bread maker, microwave oven)',
        itemDescription: 'Describe the item shortly (e.g. color, condition)',
        itemBrand: 'Brand and possible model (optional)',
        searchTitle: '',
        searchDescription: '',
        searchBrand: '',
        matchPost: ''
    }
    
    export const labels_RED_TITLE = {
        username: 'Username',
        password: 'Password',
        passwordConfirm: 'Confirm password',
        email: 'Email (optional, for password reset purpose)',
        itemTitle: `Title (${ADD_VALIDATION_CONSTANTS.titleMin}-${ADD_VALIDATION_CONSTANTS.titleMax} characters) is required`,
        itemDescription: `Description (${ADD_VALIDATION_CONSTANTS.descriptionMin}-${ADD_VALIDATION_CONSTANTS.descriptionMax} characters) is required`,
        itemBrand: `Brand (${ADD_VALIDATION_CONSTANTS.brandMin}-${ADD_VALIDATION_CONSTANTS.brandMax} characters) is required`,
        searchTitle: '',
        searchDescription: '',
        searchBrand: '',
        matchPost: 'Message must be at least 1 characters long!'
    }
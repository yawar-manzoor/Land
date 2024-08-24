import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
    name: 'forms',
    initialState: {
        isEditable: false,
        LandAssetInfo: {
            id: '',
            landInformation: '',
            location: '',
            assetCode: '',
            subAssetCode: '',
            assetName: '',
            subAssetName: '',
            businessPlan: '',
            city: '',
            district: '',
            wltStatus: '',
            area: '',
            landStatus: '',
            landType: '',
            landUse: '',
        },
        LandTitleInfo: {
            status: '',
            number: '',
            owner: '',
            type: '',
        },
    },
    reducers: {
        setEditable(state, action) {
            state.isEditable = action.payload
        },
        setInitialLandAssetInfo(state, action) {
            state.LandAssetInfo = action.payload
        },
        setLandTitleInfo: (state, action) => {
            state.LandTitleInfo = action.payload
        },
        updateLandAssetInfo(state, action) {
            state.LandAssetInfo = {
                ...state.LandAssetInfo,
                ...action.payload,
            }
        },
        updateLandTitleInfo: (state, action) => {
            state.LandTitleInfo = { ...state.LandTitleInfo, ...action.payload }
        },
        clearLandData(state) {
            state.LandAssetInfo = {
                id: '',
                landInformation: '',
                location: '',
                assetCode: '',
                subAssetCode: '',
                assetName: '',
                subAssetName: '',
                businessPlan: '',
                city: '',
                district: '',
                wltStatus: '',
                area: '',
                landStatus: '',
                landType: '',
                landUse: '',
            }
        },
        clearLandTitleData(state) {
            state.LandAssetInfo = {
                status: '',
                owner: '',
                number: '',
                type: '',
            }
        },
    },
})

export const {
    setEditable,
    setInitialLandAssetInfo,
    setLandTitleInfo,
    updateLandAssetInfo,
    updateLandTitleInfo,
    clearLandData,
    clearLandTitleData,
} = formSlice.actions
export default formSlice.reducer

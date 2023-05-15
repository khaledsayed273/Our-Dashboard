import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    anchorEl: false,
    mobileMoreAnchorEl: false,
    menuId :'primary-search-account-menu',
    mobileMenuId : 'primary-search-account-menu-mobile',
    user: {
        id: 1,
        firstName: "khaled",
        lastName: "sayed",
        email: "khaled15421@sd.com",
        password: "123456",
        img: "https://mui.com/static/images/avatar/2.jpg",
    },
    Notification: false,
    
}



const HeaderSlice = createSlice({
    name: "HeaderSlice",
    initialState,
    reducers: {
        HandleClose: (state) => {
            if (state.anchorEl) {
                state.anchorEl = false
            }
        },
        handleProfileMenuOpenFromSlice: (state, action) => {
            state.anchorEl = action.payload
        },
        handleMobileMenuClose: (state) => {
            state.mobileMoreAnchorEl = false
        },
        handleMobileMenuOpenFromSlice: (state, action) => {
            state.mobileMoreAnchorEl = action.payload
        },
        HandleNotfication: (state) => {
            state.Notification = !state.Notification;
        },

        handleMenuClose: (state) => {
            state.anchorEl = null
        },

    },
    

})


export const {
    HandleClose,
    handleProfileMenuOpenFromSlice,
    handleMobileMenuClose,
    HandleNotfication,
    HandleMessage,
    handleMenuClose,
    handleMobileMenuOpenFromSlice
} = HeaderSlice.actions


export default HeaderSlice.reducer
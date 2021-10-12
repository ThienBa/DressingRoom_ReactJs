import { TRY_ON_CLOTHES } from "../Types/ExerciseDressingRoomTypes"

const initialState = {
    model: [
        {
            "id": "hairstyle_3",
            "type": "hairstyle",
            "name": "Hairstyle 3",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/DressingRoom/hairstyle/hairstyle3_show.jpg",
            "imgSrc_png": "./images/DressingRoom/hairstyle/hairstyle3.png"
        },
        {
            "id": "topcloth_4",
            "type": "topclothes",
            "name": "Top Cloth 4",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/DressingRoom/clothes/topcloth4_show.jpg",
            "imgSrc_png": "./images/DressingRoom/clothes/topcloth4.png"
        },
        {
            "id": "necklace_3",
            "type": "necklaces",
            "name": "Necklace 3",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/DressingRoom/necklaces/necklace3_show.jpg",
            "imgSrc_png": "./images/DressingRoom/necklaces/necklace3.png"
        },
        {
            "id": "botcloth_5",
            "type": "botclothes",
            "name": "Bot Cloth 5",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/DressingRoom/clothes/botcloth5_show.jpg",
            "imgSrc_png": "./images/DressingRoom/clothes/botcloth5.png"
        },
        {
            "id": "handbag_3",
            "type": "handbags",
            "name": "Handbag 3",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/DressingRoom/handbags/handbag3_show.jpg",
            "imgSrc_png": "./images/DressingRoom/handbags/handbag3.png"
        },
        {
            "id": "shoes_5",
            "type": "shoes",
            "name": "Shoes 5",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/DressingRoom/shoes/shoes5_show.jpg",
            "imgSrc_png": "./images/DressingRoom/shoes/shoes5.png"
        },
        {
            "id": "background_1",
            "type": "background",
            "name": "Background 1",
            "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            "imgSrc_jpg": "./images/DressingRoom/background/background1_show.jpg",
            "imgSrc_png": "./images/DressingRoom/background/background1.jpg"
        },
    ]
}

export const ExerciseDressingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRY_ON_CLOTHES: {
            let modelUpdate = [...state.model]
            modelUpdate.map((item, index) => {
                if (item.type === action.TabPaneItem.type) {
                    modelUpdate[index] = action.TabPaneItem;
                }
            })
            return { ...state, model: modelUpdate }
        }
        default:
            return { ...state }
    }
}


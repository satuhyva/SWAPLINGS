import { Dimensions } from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SWIPE_OUT_DURATION = 250
export const SWIPE_LEFT_TRESHOLD = SCREEN_WIDTH * 0.5
export const CARD_WIDTH = SCREEN_WIDTH * 0.8
export const CARD_HEIGHT = SCREEN_HEIGHT * 0.6
export const SPACING = 10

export const MIDDLE_CARD_ORIGO = { 
    x: (SCREEN_WIDTH - CARD_WIDTH) / 2,
    y: 0
}
export const LEFT_CARD_ORIGO = { 
    x: MIDDLE_CARD_ORIGO.x - CARD_WIDTH - SPACING,
    y: 0
}
export const LEFTMOST_CARD_ORIGO = { 
    x: MIDDLE_CARD_ORIGO.x - 2 * (CARD_WIDTH + SPACING),
    y: 0
}
export const RIGHT_CARD_ORIGO = { 
    x: MIDDLE_CARD_ORIGO.x + CARD_WIDTH + SPACING,
    y: 0
}
export const RIGHTMOST_CARD_ORIGO = { 
    x: MIDDLE_CARD_ORIGO.x + 2 * (CARD_WIDTH + SPACING),
    y: 0
}


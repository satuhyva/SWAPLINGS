
export enum PriceGroupEnum {
    GROUP_1 = '0-50',
    GROUP_2 = '50-250',
    GROUP_3 = '>250'
}


export const priceGroups = [
    { groupEnum: PriceGroupEnum.GROUP_1, text: '0 - 50 €' },
    { groupEnum: PriceGroupEnum.GROUP_2, text: '50 - 250 €' },
    { groupEnum: PriceGroupEnum.GROUP_3, text: '> 250 €' },
]
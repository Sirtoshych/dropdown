import {Integration} from "../types";

const MOCKED_INTEGRATIONS = [
    {label: 'ActiveCampaign', img: '/images/activecampaign.svg', id: '2-1'},
    {label: 'Woocommerce', img: '/images/woo.svg', id: '2-2'},
    {label: 'Instagram', img: '/images/instagram.svg', id: '2-3'},
    {label: 'Shopify', img: '/images/shopify.svg', id: '2-4'},
    {label: 'Google analytics', img: '/images/googleAnalytics.svg', id: '2-5'},
]


export const getIntegrations = async (searchText: string = ''): Promise<Array<Integration>> => {
    return new Promise((res)=>{
        const filtered = MOCKED_INTEGRATIONS.filter(({label}) =>
            label.toLowerCase().includes(searchText.toLowerCase()));
        res(filtered)
    })
}
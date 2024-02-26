
import { BiHomeAlt, BiShoppingBag, BiDollarCircle } from "react-icons/bi";
import { VscFeedback } from 'react-icons/vsc';
import { FiPhoneCall } from 'react-icons/fi'

export const TopNav = [
    { id: '1', name: 'Home', link: '/', icon: < BiHomeAlt /> },
    {
        id: '2', name: 'Shop', icon: <BiShoppingBag />, child: [
            { id: 'child1', nameChild1: 'All', linkChild: '/shop/all', child: [] },
            {
                id: 'child2', nameChild1: 'Plants', child: [

                    { id: 'plant1', nameChild2: 'Bonsai', link: '/shop/all/tree/bonsai' },
                    { id: 'plant2', nameChild2: 'Flowering Shrubs', link: '/shop/all/tree/floweringshrubs' },
                    { id: 'plant3', nameChild2: 'Indoor', link: '/shop/all/tree/indoor' },
                    { id: 'plant4', nameChild2: 'Outdoor', link: '/shop/all/tree/outdoor' },
                    { id: 'plant5', nameChild2: 'Succulent', link: '/shop/all/tree/succulent' },


                ]
            },
            { id: 'child3', nameChild1: 'Tools', linkChild: '/shop/tool', child: [] },
            { id: 'child4', nameChild1: 'Fertilizer', linkChild: '/shop/fertilizer', child: [] },
        ]
    },
    {
        id: '3', name: 'Services',  icon: <BiDollarCircle />, child: [
            { id: 'child1', nameChild1: 'All Service', linkChild: '/service', child: [] },
            { id: 'child2', nameChild1: 'Workshop', linkChild: '/service/workshop', child: [] },

            { id: 'child3', nameChild1: 'Gift', linkChild: '/service/gift', child: [] },
            { id: 'child4', nameChild1: 'Decord', linkChild: '/service/decord', child: [] },

        ]
    },
    { id: '5', name: "Blog", link: '/blog', icon: <VscFeedback /> },
    { id: '4', name: "FeedBack", link: '/feedback', icon: <FiPhoneCall /> },
    // {id:'5',name:"Contact Us",link:'/contactUs',icon:<FiPhoneCall/>}
]

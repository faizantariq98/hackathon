import { defineField } from "sanity";

export const Product={
    name:"product",
    type:"document",
    title:"Products",
    fields:[
        {
            name:"productName",
            title:"Product Title",
            type:"string"
        },
        {
            name:"size",
            title:"Product Size",
            type:"string"
        },
        {
            name:"description",
            title:"Product Description",
            type:"string"
        },
        {
            name:"price",
            title:"Product Price per piece",
            type:"number"
        },
        {
            name:'discount',
            title:"Product discount per piece in percent",
            type:"number"
        },
        {
            name:'image',
            title:'Product Image',
            type:"array",
            of:[{
                name:"img",
                title:"image",
                type:"image"
            }]
        },
        {
            name:'dressType',
            title:'dresstype',
            type:'string'
        },
        defineField({
            name:'category',
            title:"Product Category",
            type:"reference",
            to:[
                {
                    type:'category'
                }
            ]
        })
        
    ]
}
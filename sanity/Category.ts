import {defineType,defineField} from 'sanity';

export const Category = defineType({
    name:'category',
    title:'Category',
    type:'document',
    fields:[
        defineField({
        name:'name',
        title:'Category Name',
        type:'string',
    })]
})
import { type SchemaTypeDefinition } from 'sanity'
import {Product} from './Product'
import { Category } from './Category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product,Category],
}

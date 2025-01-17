import { type SchemaTypeDefinition } from 'sanity'
import home from './schemas/home'
import abtTheme from './schemas/abtTheme'
import bestPeople from './schemas/bestPeople'
import category from './schemas/category'
import chooseUs from './schemas/chooseUs'
import members from './schemas/members'
import product from './schemas/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ home,
    abtTheme,
    bestPeople,
    category,
    chooseUs,
    members,
    product,
    
  ],
}

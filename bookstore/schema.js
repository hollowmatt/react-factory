import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema
} from 'graphql';
import {
  getTypeFields,
  setTypeFields
} from '@risingstack/graffiti-mongoose/lib/type';
import { getModels } from '@risingstack/graffiti-mongoose/lib/model';
import { getFields } from '@risingstack/graffiti-mongoose/lib/schema';
import getFieldList from '@risingstack/graffiti-mongoose/lib/query/projection';
import { Author, Book } from './models';

/**
 * If you're coming to GraphQL for the first time this file might look more
 * complicated than it actually is. If you're using `graffiti-mongoose` it
 * includes a `getSchema` helper that does most of the work for you.
 *
 * However, in thise case we're extending some of the types generated by
 * `graffiti-mongoose`. In the long term, `graffiti-mongoose` should provide
 * native 'hooks' for extending the default behavior. But for now, we're dipping
 * in to these objects and adding the types that we need.
 **/

// These are the models defined by our apps
const mongooseModels = [ Author, Book ];

export const graffitiModels = getModels(mongooseModels);
export const graffitiFields = getFields(graffitiModels);

export const rootQuery = graffitiFields.query._typeConfig;
export const rootMutation = graffitiFields.mutation._typeConfig;

export const AuthorType = rootQuery.fields.author.type;
export const BookType = rootQuery.fields.author.type;

// see: https://github.com/RisingStack/graffiti-mongoose/blob/master/src/query/query.js#L30
function getOneByConditions(Collection, conditions, context, info) {
  const projection = getFieldList(info);
  return Collection.findOne(conditions).then((result) => {
    if (result) {
      return {
        ...result,
        _type: Collection.modelName
      };
    }

    return null;
  });
}

/**
 * This function allows us to search for a book by the `slug`.
 * 
 * Given a node, we're going to patch the original types (which were generated
 * by graffitti-mongoose). Here we tell GraphQL that we want to make `id`
 * optional and allow `slug` as an argument when searching for a book. We then
 * customize the resolve function to add in that functionality.
 **/
let extendBookLookup = (bookNode) => {
  // make id optional
  bookNode.args.id = {
    name: 'id',
    type: GraphQLID
  }

  // add an optional "slug" argument
  bookNode.args.slug = {
    name: 'slug',
    type: GraphQLString
  }

  // Monkey-patch the original resolver function for querying a single
  // book. The goal here is to search for a book by `slug`.
  // 
  // A future task would be to submit a pull request to graffitti-mongoose that
  // automatically allows this for every unique, indexed field
  // 
  // see: https://github.com/RisingStack/graffiti-mongoose/blob/master/src/query/query.js#L122
  let originalResolver = bookNode.resolve
  bookNode.resolve = function bookNodeResolve(root, {
    id, slug, ...args
  }, context, info) {
    if(slug) {
      const Collection = graffitiModels.Book.model.collection;
      return getOneByConditions(Collection, { slug: slug }, context, info);
    } else {
      return originalResolver(root, args, context, info);
    }
  }
}

extendBookLookup(rootQuery.fields.book); // mutates rootQuery
extendBookLookup(getTypeFields(rootQuery.fields.viewer.type).book); // mutates viewer

/*
 * Create the Schema
 */
const fields = {
  query: new GraphQLObjectType(rootQuery),
  mutation: new GraphQLObjectType(rootMutation)
};

const schema = new GraphQLSchema(fields);

export default schema;

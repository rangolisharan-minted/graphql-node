const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} = require('graphql');


const GQLNonNullStringType = new GraphQLNonNull(GraphQLString);

const ArtistLocationType = new GraphQLObjectType({
  name: 'location',
  fields: {
    visible_location: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.visible_location,
    },
    city: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.city,
    },
    state: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.state,
    },
    country: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.country,
    },
  },
});


const ImagesType = new GraphQLObjectType({
  name: 'images',
  fields: {
    image_type: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: n => n.image_type,
    },
    caption: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: n => n.caption,
    },
    message: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: n => n.message,
    },
    url: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n.url,
    },
  },
});


const AttributesDesignType = new GraphQLObjectType({
  name: 'design',
  fields: {
    id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLID),
      resolve: n => n._source.id,
    },
    is_design_winner: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: n => n._source.is_design_winner,
    },
  },
});


const BreadcrumbsType = new GraphQLObjectType({
  name: 'breadcrumbs',
  fields: {
    url: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.url,
    },
    label: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.label,
    },
  },
});


const AssociatedPkDataType = new GraphQLObjectType({
  name: 'associated_pk_data',
  fields: {
    url: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.url,
    },
    product_kind: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.product_kind,
    },
    image_url: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.image_url,
    },
    description: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.description,
    },
  },
});


const AttributesDefaultShippingMethodType = new GraphQLObjectType({
  name: 'default_shipping_method',
  fields: {
    displayName: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.displayName,
    },
    id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLID),
      resolve: n => n._source.id,
    },
  },
});


const OptionRelationshipsType = new GraphQLObjectType({
  name: 'option_relationships',
  fields: {
    relationship_type: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n.relationship_type,
    },
    origin_option: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n.origin_option,
    },
    sort_order: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      resolve: n => n.sort_order,
    },
    destination_option: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n.destination_option,
    },
  },
});


const ArtistType = new GraphQLObjectType({
  name: 'artistType',
  fields: {
    is_minted_user: {
      description: 'enter your description',
      type: GraphQLBoolean,
      resolve: n => n._source.artist.is_minted_user,
    },
    first_name: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.artist.first_name,
    },
    last_name: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.artist.last_name,
    },
    user_id: {
      description: 'enter your description',
      type: GraphQLInt,
      resolve: n => n._source.artist.user_id,
    },
    account_id: {
      description: 'enter your description',
      type: GraphQLInt,
      resolve: n => n._source.artist.account_id,
    },
    product_skus: {
      description: 'enter your description',
      type: new GraphQLList(GraphQLString),
      resolve: n => n._source.artist.product_skus,
    },
    url: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.artist.url,
    },
    philosophy: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: n => n._source.artist.philosophy,
    },
    location: {
      description: 'enter your description',
      type: ArtistLocationType,
      resolve: n => n._source.artist.location,
    },
    commission_request_url: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: n => n._source.artist.commission_request_url,
    },
    images: {
      description: 'enter your description',
      type: new GraphQLList(ImagesType),
      resolve: n => n._source.artist.images,
    },
    name: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: n => n._source.artist.name,
    },
  },
});

const AttributesType = new GraphQLObjectType({
  name: 'attributes',
  fields: {
    business_category: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.business_category,
    },
    alert_messages: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      resolve: n => n._source.attributes.alert_messages,
    },
    sku_group: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.sku_group,
    },
    special_feature: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.special_feature,
    },
    design: {
      description: 'enter your description',
      type: new GraphQLNonNull(AttributesDesignType),
      resolve: n => n._source.attributes.design,
    },
    first_photo_slot_dimensions: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.first_photo_slot_dimensions,
    },
    og_title: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.og_title,
    },
    description: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.description,
    },
    style: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      resolve: n => n._source.attributes.style,
    },
    breadcrumbs: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(BreadcrumbsType)),
      resolve: n => n._source.attributes.breadcrumbs,
    },
    num_cover_photos: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      resolve: n => n._source.attributes.num_cover_photos,
    },
    associated_pk_data: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(AssociatedPkDataType)),
      resolve: n => n._source.attributes.associated_pk_data,
    },
    is_customizable: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: n => n._source.attributes.is_customizable,
    },
    og_description: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.og_description,
    },
    default_quantity: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      resolve: n => n._source.attributes.default_quantity,
    },
    tags: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      resolve: n => n._source.attributes.tags,
    },
    artist_user_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      resolve: n => n._source.attributes.artist_user_id,
    },
    occasion: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      resolve: n => n._source.attributes.occasion,
    },
    is_commissionable: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: n => n._source.attributes.is_commissionable,
    },
    family_name: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.family_name,
    },
    name: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.name,
    },
    text_placement: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      resolve: n => n._source.attributes.text_placement,
    },
    highlight: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.attributes.highlight,
    },
    default_shipping_method: {
      description: 'enter your description',
      type: new GraphQLNonNull(AttributesDefaultShippingMethodType),
      resolve: n => n._source.attributes.default_shipping_method,
    },
  },
});

module.exports = new GraphQLObjectType({
  name: 'productDataQueryType',
  fields: {
    sku: {
            // description: 'enter your description',
      type: GQLNonNullStringType,
            // resolve: (n) => n._source["sku"],
      resolve: n => n._source.sku,
    },
    aggregation_id: {
            // description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.aggregation_id,
    },
    description: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: n => JSON.stringify(n._source.description),
    },
    artist: {
      description: 'enter your description',
      type: new GraphQLObjectType({
        name: 'artist',
        fields: {
          is_minted_user: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            resolve: n => n._source.artist.is_minted_user,
          },
          first_name: {
            description: 'enter your description',
            type: GQLNonNullStringType,
            resolve: n => n._source.artist.first_name,
          },
          last_name: {
            description: 'enter your description',
            type: GQLNonNullStringType,
            resolve: n => n._source.artist.last_name,
          },
          user_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            resolve: n => n._source.artist.user_id,
          },
          account_id: {
            description: 'enter your description',
            type: GraphQLInt,
            resolve: n => n._source.artist.account_id,
          },
          product_skus: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            resolve: n => n._source.artist.product_skus,
          },
          url: {
            description: 'enter your description',
            type: GQLNonNullStringType,
            resolve: n => n._source.artist.url,
          },
          philosophy: {
            description: 'enter your description',
            type: GQLNonNullStringType,
            resolve: n => n._source.artist.philosophy,
          },
          location: {
            description: 'enter your description',
            type: new GraphQLNonNull(ArtistLocationType),
            resolve: n => n._source.artist.location,
          },
          commission_request_url: {
            description: 'enter your description',
            type: GQLNonNullStringType,
            resolve: n => n._source.artist.commission_request_url,
          },
          images: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(ImagesType)),
            resolve: n => n._source.artist.images,
          },
          name: {
            description: 'enter your description',
            type: GQLNonNullStringType,
            resolve: n => n._source.artist.name,
          },
        },
      }),
      resolve: n => n,
    },
    schema_version: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLInt),
      resolve: n => n._source.schema_version,
    },
    id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLID),
      resolve: n => n._source.id,
    },
    product_kind: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => n._source.product_kind,
    },
    updated_at_utc: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: n => n._source.updated_at_utc,
    },
    attributes: {
      description: 'enter your description',
      type: new GraphQLNonNull(AttributesType),
      resolve: n => n,
    },
    variants: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      resolve: n => n._source.variants,
    },
    options: {
      description: 'enter your description',
      type: GQLNonNullStringType,
      resolve: n => JSON.stringify(n._source.options),
    },
    skus: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
      resolve: n => n._source.skus,
    },
    option_relationships: {
      description: 'enter your description',
      type: new GraphQLNonNull(new GraphQLList(OptionRelationshipsType)),
      resolve: n => n._source.option_relationships,
    },
    default_variant: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: n => JSON.stringify(n._source.default_variant),
    },
  },
});

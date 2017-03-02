const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull,
} = require('graphql');


const DescriptionType = new GraphQLObjectType({
    name: 'description',
    fields: {},
});


const AttributesDesignType = new GraphQLObjectType({
    name: 'design',
    fields: {},
});

const AttributesDefaultShippingMethodType = new GraphQLObjectType({
    name: 'default_shipping_method',
    fields: {},
});


const OptionsType = new GraphQLObjectType({
    name: 'options',
    fields: {},
});


const AssociatedPkDataType = new GraphQLObjectType({
    name: 'associated_pk_data',
    fields: {
        url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for url
            resolve: () => null,
        },
        product_kind: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_kind
            resolve: () => null,
        },
        image_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for image_url
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
    },
});



const ImagesType = new GraphQLObjectType({
    name: 'images',
    fields: {
        image_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for image_type
            resolve: () => null,
        },
        caption: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for caption
            resolve: () => null,
        },
        message: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for message
            resolve: () => null,
        },
        url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for url
            resolve: () => null,
        }
    },
});

const ArtistLocationType = new GraphQLObjectType({
    name: 'location',
    fields: {
        visible_location: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for visible_location
            resolve: () => null,
        },
        city: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for city
            resolve: () => null,
        },
        state: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for state
            resolve: () => null,
        },
        country: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for country
            resolve: () => null,
        }
    },
});


const BreadcrumbsType = new GraphQLObjectType({
    name: 'breadcrumbs',
    fields: {
        url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for url
            resolve: () => null,
        },
        label: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for label
            resolve: () => null,
        }
    },
});


const ArtistType = new GraphQLObjectType({
    name: 'artist',
    fields: {
        is_minted_user: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for is_minted_user
            resolve: () => null,
        },
        first_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for first_name
            resolve: () => null,
        },
        last_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for last_name
            resolve: () => null,
        },
        user_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for user_id
            resolve: () => null,
        },
        account_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for account_id
            resolve: () => null,
        },
        product_skus: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for product_skus
            resolve: () => null,
        },
        url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for url
            resolve: () => null,
        },
        philosophy: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for philosophy
            resolve: () => null,
        },
        location: {
            description: 'enter your description',
            type: new GraphQLNonNull(ArtistLocationType),
            // TODO: Implement resolver for location
            resolve: () => null,
        },
        commission_request_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for commission_request_url
            resolve: () => null,
        },
        images: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(ImagesType)),
            // TODO: Implement resolver for images
            resolve: () => null,
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
            resolve: () => null,
        }
    },
});


const AttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        business_category: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for business_category
            resolve: () => null,
        },
        alert_messages: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for alert_messages
            resolve: () => null,
        },
        sku_group: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for sku_group
            resolve: () => null,
        },
        special_feature: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for special_feature
            resolve: () => null,
        },
        design: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDesignType),
            // TODO: Implement resolver for design
            resolve: () => null,
        },
        first_photo_slot_dimensions: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for first_photo_slot_dimensions
            resolve: () => null,
        },
        og_title: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for og_title
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        style: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for style
            resolve: () => null,
        },
        breadcrumbs: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(BreadcrumbsType)),
            // TODO: Implement resolver for breadcrumbs
            resolve: () => null,
        },
        num_cover_photos: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for num_cover_photos
            resolve: () => null,
        },
        associated_pk_data: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(AssociatedPkDataType)),
            // TODO: Implement resolver for associated_pk_data
            resolve: () => null,
        },
        is_customizable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for is_customizable
            resolve: () => null,
        },
        og_description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for og_description
            resolve: () => null,
        },
        default_quantity: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for default_quantity
            resolve: () => null,
        },
        tags: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for tags
            resolve: () => null,
        },
        artist_user_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for artist_user_id
            resolve: () => null,
        },
        occasion: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for occasion
            resolve: () => null,
        },
        is_commissionable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for is_commissionable
            resolve: () => null,
        },
        family_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for family_name
            resolve: () => null,
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
            resolve: () => null,
        },
        text_placement: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for text_placement
            resolve: () => null,
        },
        highlight: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for highlight
            resolve: () => null,
        },
        default_shipping_method: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDefaultShippingMethodType),
            // TODO: Implement resolver for default_shipping_method
            resolve: () => null,
        }
    },
});


const OptionRelationshipsType = new GraphQLObjectType({
    name: 'option_relationships',
    fields: {
        relationship_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for relationship_type
            resolve: () => null,
        },
        origin_option: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for origin_option
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        destination_option: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for destination_option
            resolve: () => null,
        }
    },
});


module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        sku: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for sku
            resolve: () => null,
        },
        aggregation_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for aggregation_id
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(DescriptionType),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        is_minted_user: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for is_minted_user
            resolve: () => null,
        },
        first_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for first_name
            resolve: () => null,
        },
        last_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for last_name
            resolve: () => null,
        },
        user_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for user_id
            resolve: () => null,
        },
        account_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for account_id
            resolve: () => null,
        },
        product_skus: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for product_skus
            resolve: () => null,
        },
        url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for url
            resolve: () => null,
        },
        philosophy: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for philosophy
            resolve: () => null,
        },
        visible_location: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for visible_location
            resolve: () => null,
        },
        city: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for city
            resolve: () => null,
        },
        state: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for state
            resolve: () => null,
        },
        country: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for country
            resolve: () => null,
        },
        location: {
            description: 'enter your description',
            type: new GraphQLNonNull(ArtistLocationType),
            // TODO: Implement resolver for location
            resolve: () => null,
        },
        commission_request_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for commission_request_url
            resolve: () => null,
        },
        image_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for image_type
            resolve: () => null,
        },
        caption: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for caption
            resolve: () => null,
        },
        message: {
            description: 'enter your description',
            type: null,
            // TODO: Implement resolver for message
            resolve: () => null,
        },
        url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for url
            resolve: () => null,
        },
        images: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(ImagesType)),
            // TODO: Implement resolver for images
            resolve: () => null,
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
            resolve: () => null,
        },
        artist: {
            description: 'enter your description',
            type: new GraphQLNonNull(ArtistType),
            // TODO: Implement resolver for artist
            resolve: () => null,
        },
        schema_version: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for schema_version
            resolve: () => null,
        },
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
            resolve: () => null,
        },
        product_kind: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_kind
            resolve: () => null,
        },
        updated_at_utc: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for updated_at_utc
            resolve: () => null,
        },
        business_category: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for business_category
            resolve: () => null,
        },
        alert_messages: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for alert_messages
            resolve: () => null,
        },
        sku_group: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for sku_group
            resolve: () => null,
        },
        special_feature: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for special_feature
            resolve: () => null,
        },
        design: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDesignType),
            // TODO: Implement resolver for design
            resolve: () => null,
        },
        first_photo_slot_dimensions: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for first_photo_slot_dimensions
            resolve: () => null,
        },
        og_title: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for og_title
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        style: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for style
            resolve: () => null,
        },
        url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for url
            resolve: () => null,
        },
        label: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for label
            resolve: () => null,
        },
        breadcrumbs: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(BreadcrumbsType)),
            // TODO: Implement resolver for breadcrumbs
            resolve: () => null,
        },
        num_cover_photos: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for num_cover_photos
            resolve: () => null,
        },
        url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for url
            resolve: () => null,
        },
        product_kind: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for product_kind
            resolve: () => null,
        },
        image_url: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for image_url
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        associated_pk_data: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(AssociatedPkDataType)),
            // TODO: Implement resolver for associated_pk_data
            resolve: () => null,
        },
        is_customizable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for is_customizable
            resolve: () => null,
        },
        og_description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for og_description
            resolve: () => null,
        },
        default_quantity: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for default_quantity
            resolve: () => null,
        },
        tags: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for tags
            resolve: () => null,
        },
        artist_user_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for artist_user_id
            resolve: () => null,
        },
        occasion: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for occasion
            resolve: () => null,
        },
        is_commissionable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for is_commissionable
            resolve: () => null,
        },
        family_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for family_name
            resolve: () => null,
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
            resolve: () => null,
        },
        text_placement: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for text_placement
            resolve: () => null,
        },
        highlight: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for highlight
            resolve: () => null,
        },
        default_shipping_method: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDefaultShippingMethodType),
            // TODO: Implement resolver for default_shipping_method
            resolve: () => null,
        },
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        variants: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for variants
            resolve: () => null,
        },
        options: {
            description: 'enter your description',
            type: new GraphQLNonNull(OptionsType),
            // TODO: Implement resolver for options
            resolve: () => null,
        },
        skus: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for skus
            resolve: () => null,
        },
        relationship_type: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for relationship_type
            resolve: () => null,
        },
        origin_option: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for origin_option
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        destination_option: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for destination_option
            resolve: () => null,
        },
        option_relationships: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(OptionRelationshipsType)),
            // TODO: Implement resolver for option_relationships
            resolve: () => null,
        },
    }),
});

const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull
} = require('graphql')


const DescriptionType = new GraphQLObjectType({
    name: 'description',
    fields: {
        HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for HPC
            resolve: () => null,
        },
        HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for HYC
            resolve: () => null,
        },
        HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for HMC
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
            type: null,
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
            type: new GraphQLNonNull(new GraphQLList(null)),
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


const AttributesDesignType = new GraphQLObjectType({
    name: 'design',
    fields: {
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
            resolve: () => null,
        },
        is_design_winner: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for is_design_winner
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
        }
    },
});


const AttributesDefaultShippingMethodType = new GraphQLObjectType({
    name: 'default_shipping_method',
    fields: {
        displayName: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for displayName
            resolve: () => null,
        },
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
            resolve: () => null,
        }
    },
});


const OptionsType = new GraphQLObjectType({
    name: 'options',
    fields: {
        format: {
            description: 'enter your description',
            type: new GraphQLNonNull(OptionsFormatType),
            // TODO: Implement resolver for format
            resolve: () => null,
        },
        color: {
            description: 'enter your description',
            type: new GraphQLNonNull(OptionsColorType),
            // TODO: Implement resolver for color
            resolve: () => null,
        },
        photo: {
            description: 'enter your description',
            type: new GraphQLNonNull(OptionsPhotoType),
            // TODO: Implement resolver for photo
            resolve: () => null,
        },
        greeting: {
            description: 'enter your description',
            type: new GraphQLNonNull(OptionsGreetingType),
            // TODO: Implement resolver for greeting
            resolve: () => null,
        },
        shape: {
            description: 'enter your description',
            type: new GraphQLNonNull(OptionsShapeType),
            // TODO: Implement resolver for shape
            resolve: () => null,
        },
        paper: {
            description: 'enter your description',
            type: new GraphQLNonNull(OptionsPaperType),
            // TODO: Implement resolver for paper
            resolve: () => null,
        },
        form_factor: {
            description: 'enter your description',
            type: new GraphQLNonNull(OptionsFormFactorType),
            // TODO: Implement resolver for form_factor
            resolve: () => null,
        },
        print_method: {
            description: 'enter your description',
            type: new GraphQLNonNull(OptionsPrintMethodType),
            // TODO: Implement resolver for print_method
            resolve: () => null,
        }
    },
});


const OptionsFormatType = new GraphQLObjectType({
    name: 'format',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(FormatAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        values: {
            description: 'enter your description',
            type: new GraphQLNonNull(FormatValuesType),
            // TODO: Implement resolver for values
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const FormatAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        default_value: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for default_value
            resolve: () => null,
        },
        warn_on_incompatible: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for warn_on_incompatible
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        show_single: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_single
            resolve: () => null,
        },
        auto_selectable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for auto_selectable
            resolve: () => null,
        },
        requires_selection: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for requires_selection
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        },
        show_invalid_options: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_invalid_options
            resolve: () => null,
        },
        show_price_delta: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_price_delta
            resolve: () => null,
        },
        single_value_show_label: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for single_value_show_label
            resolve: () => null,
        }
    },
});


const FormatValuesType = new GraphQLObjectType({
    name: 'values',
    fields: {
        Fold - Over(Message Inside): {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesFoldOver0MessageInside0Type),
            // TODO: Implement resolver for Fold-Over (Message Inside)
            resolve: () => null,
        },
        fold - over(blank inside): {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesFoldOver0BlankInside0Type),
            // TODO: Implement resolver for fold-over (blank inside)
            resolve: () => null,
        },
        flat card: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesFlatCardType),
            // TODO: Implement resolver for flat card
            resolve: () => null,
        }
    },
});


const ValuesFoldOver0MessageInside0Type = new GraphQLObjectType({
    name: 'Fold-Over (Message Inside)',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(Fold - Over(Message Inside) AttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const Fold - Over(Message Inside) AttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        }
    },
});


const ValuesFoldOver0BlankInside0Type = new GraphQLObjectType({
    name: 'fold-over (blank inside)',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(Fold - over(blank inside) AttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const Fold - over(blank inside) AttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        }
    },
});


const ValuesFlatCardType = new GraphQLObjectType({
    name: 'flat card',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(Flat cardAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const Flat cardAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        }
    },
});


const OptionsColorType = new GraphQLObjectType({
    name: 'color',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(ColorAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        values: {
            description: 'enter your description',
            type: new GraphQLNonNull(ColorValuesType),
            // TODO: Implement resolver for values
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const ColorAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        default_value: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for default_value
            resolve: () => null,
        },
        warn_on_incompatible: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for warn_on_incompatible
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        show_single: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_single
            resolve: () => null,
        },
        auto_selectable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for auto_selectable
            resolve: () => null,
        },
        requires_selection: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for requires_selection
            resolve: () => null,
        },
        swatch_shape: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for swatch_shape
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        },
        show_invalid_options: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_invalid_options
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        }
    },
});


const ColorValuesType = new GraphQLObjectType({
    name: 'values',
    fields: {
        A: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesAType),
            // TODO: Implement resolver for A
            resolve: () => null,
        },
        C: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesCType),
            // TODO: Implement resolver for C
            resolve: () => null,
        },
        B: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesBType),
            // TODO: Implement resolver for B
            resolve: () => null,
        },
        D: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesDType),
            // TODO: Implement resolver for D
            resolve: () => null,
        }
    },
});


const ValuesAType = new GraphQLObjectType({
    name: 'A',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(AAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(ASortOrderType),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const AAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        color_choice_index: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorChoiceIndexType),
            // TODO: Implement resolver for color_choice_index
            resolve: () => null,
        },
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDbIdType),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDisplayNameType),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        color_code: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for color_code
            resolve: () => null,
        },
        searchable_color: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesSearchableColorType),
            // TODO: Implement resolver for searchable_color
            resolve: () => null,
        },
        color_palette: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorPaletteType),
            // TODO: Implement resolver for color_palette
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesSortOrderType),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        color_string: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorStringType),
            // TODO: Implement resolver for color_string
            resolve: () => null,
        }
    },
});


const AttributesColorChoiceIndexType = new GraphQLObjectType({
    name: 'color_choice_index',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesDbIdType = new GraphQLObjectType({
    name: 'db_id',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesDisplayNameType = new GraphQLObjectType({
    name: 'display_name',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesSearchableColorType = new GraphQLObjectType({
    name: 'searchable_color',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesColorPaletteType = new GraphQLObjectType({
    name: 'color_palette',
    fields: {},
});


const AttributesSortOrderType = new GraphQLObjectType({
    name: 'sort_order',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesColorStringType = new GraphQLObjectType({
    name: 'color_string',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const ASortOrderType = new GraphQLObjectType({
    name: 'sort_order',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const ValuesCType = new GraphQLObjectType({
    name: 'C',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(CAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(CSortOrderType),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const CAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        color_choice_index: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorChoiceIndexType),
            // TODO: Implement resolver for color_choice_index
            resolve: () => null,
        },
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDbIdType),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDisplayNameType),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        color_code: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for color_code
            resolve: () => null,
        },
        searchable_color: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesSearchableColorType),
            // TODO: Implement resolver for searchable_color
            resolve: () => null,
        },
        color_palette: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorPaletteType),
            // TODO: Implement resolver for color_palette
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesSortOrderType),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        color_string: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorStringType),
            // TODO: Implement resolver for color_string
            resolve: () => null,
        }
    },
});


const AttributesColorChoiceIndexType = new GraphQLObjectType({
    name: 'color_choice_index',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesDbIdType = new GraphQLObjectType({
    name: 'db_id',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesDisplayNameType = new GraphQLObjectType({
    name: 'display_name',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesSearchableColorType = new GraphQLObjectType({
    name: 'searchable_color',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesColorPaletteType = new GraphQLObjectType({
    name: 'color_palette',
    fields: {},
});


const AttributesSortOrderType = new GraphQLObjectType({
    name: 'sort_order',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesColorStringType = new GraphQLObjectType({
    name: 'color_string',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const CSortOrderType = new GraphQLObjectType({
    name: 'sort_order',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const ValuesBType = new GraphQLObjectType({
    name: 'B',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(BAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(BSortOrderType),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const BAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        color_choice_index: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorChoiceIndexType),
            // TODO: Implement resolver for color_choice_index
            resolve: () => null,
        },
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDbIdType),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDisplayNameType),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        color_code: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for color_code
            resolve: () => null,
        },
        searchable_color: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesSearchableColorType),
            // TODO: Implement resolver for searchable_color
            resolve: () => null,
        },
        color_palette: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorPaletteType),
            // TODO: Implement resolver for color_palette
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesSortOrderType),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        color_string: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorStringType),
            // TODO: Implement resolver for color_string
            resolve: () => null,
        }
    },
});


const AttributesColorChoiceIndexType = new GraphQLObjectType({
    name: 'color_choice_index',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesDbIdType = new GraphQLObjectType({
    name: 'db_id',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesDisplayNameType = new GraphQLObjectType({
    name: 'display_name',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesSearchableColorType = new GraphQLObjectType({
    name: 'searchable_color',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesColorPaletteType = new GraphQLObjectType({
    name: 'color_palette',
    fields: {},
});


const AttributesSortOrderType = new GraphQLObjectType({
    name: 'sort_order',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesColorStringType = new GraphQLObjectType({
    name: 'color_string',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const BSortOrderType = new GraphQLObjectType({
    name: 'sort_order',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const ValuesDType = new GraphQLObjectType({
    name: 'D',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(DAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(DSortOrderType),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const DAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        color_choice_index: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorChoiceIndexType),
            // TODO: Implement resolver for color_choice_index
            resolve: () => null,
        },
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDbIdType),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesDisplayNameType),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        color_code: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for color_code
            resolve: () => null,
        },
        searchable_color: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesSearchableColorType),
            // TODO: Implement resolver for searchable_color
            resolve: () => null,
        },
        color_palette: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorPaletteType),
            // TODO: Implement resolver for color_palette
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesSortOrderType),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        color_string: {
            description: 'enter your description',
            type: new GraphQLNonNull(AttributesColorStringType),
            // TODO: Implement resolver for color_string
            resolve: () => null,
        }
    },
});


const AttributesColorChoiceIndexType = new GraphQLObjectType({
    name: 'color_choice_index',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesDbIdType = new GraphQLObjectType({
    name: 'db_id',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesDisplayNameType = new GraphQLObjectType({
    name: 'display_name',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesSearchableColorType = new GraphQLObjectType({
    name: 'searchable_color',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesColorPaletteType = new GraphQLObjectType({
    name: 'color_palette',
    fields: {},
});


const AttributesSortOrderType = new GraphQLObjectType({
    name: 'sort_order',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const AttributesColorStringType = new GraphQLObjectType({
    name: 'color_string',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const DSortOrderType = new GraphQLObjectType({
    name: 'sort_order',
    fields: {
        MIN - 3 NB - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-3NB-HMC
            resolve: () => null,
        },
        MIN - IOZ - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-IOZ-HPC
            resolve: () => null,
        },
        MIN - 004 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-004-HYC
            resolve: () => null,
        },
        MIN - HHS - HMC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-HHS-HMC
            resolve: () => null,
        },
        MIN - L64 - HYC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-L64-HYC
            resolve: () => null,
        },
        MIN - 1 B7 - HPC: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for MIN-1B7-HPC
            resolve: () => null,
        }
    },
});


const OptionsPhotoType = new GraphQLObjectType({
    name: 'photo',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(PhotoAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        values: {
            description: 'enter your description',
            type: new GraphQLNonNull(PhotoValuesType),
            // TODO: Implement resolver for values
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const PhotoAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        default_value: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for default_value
            resolve: () => null,
        },
        warn_on_incompatible: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for warn_on_incompatible
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        show_single: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_single
            resolve: () => null,
        },
        auto_selectable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for auto_selectable
            resolve: () => null,
        },
        requires_selection: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for requires_selection
            resolve: () => null,
        },
        show_invalid_options: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_invalid_options
            resolve: () => null,
        }
    },
});


const PhotoValuesType = new GraphQLObjectType({
    name: 'values',
    fields: {
        1 _portrait--portrait: {
            description: 'enter your description',
            type: new GraphQLNonNull(Values1Portrait0PortraitType),
            // TODO: Implement resolver for 1_portrait--portrait
            resolve: () => null,
        },
        1 _landscape--landscape: {
            description: 'enter your description',
            type: new GraphQLNonNull(Values1Landscape0LandscapeType),
            // TODO: Implement resolver for 1_landscape--landscape
            resolve: () => null,
        }
    },
});


const Values1Portrait0PortraitType = new GraphQLObjectType({
    name: '1_portrait--portrait',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(1 _portrait--portraitAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const 1 _portrait--portraitAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        num_of_photos: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for num_of_photos
            resolve: () => null,
        },
        photo_orientation: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for photo_orientation
            resolve: () => null,
        },
        orientation: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for orientation
            resolve: () => null,
        }
    },
});


const Values1Landscape0LandscapeType = new GraphQLObjectType({
    name: '1_landscape--landscape',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(1 _landscape--landscapeAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const 1 _landscape--landscapeAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        num_of_photos: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for num_of_photos
            resolve: () => null,
        },
        photo_orientation: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for photo_orientation
            resolve: () => null,
        },
        orientation: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for orientation
            resolve: () => null,
        }
    },
});


const OptionsGreetingType = new GraphQLObjectType({
    name: 'greeting',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(GreetingAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        values: {
            description: 'enter your description',
            type: new GraphQLNonNull(GreetingValuesType),
            // TODO: Implement resolver for values
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const GreetingAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        default_value: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for default_value
            resolve: () => null,
        },
        warn_on_incompatible: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for warn_on_incompatible
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        show_single: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_single
            resolve: () => null,
        },
        auto_selectable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for auto_selectable
            resolve: () => null,
        },
        requires_selection: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for requires_selection
            resolve: () => null,
        },
        show_invalid_options: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_invalid_options
            resolve: () => null,
        }
    },
});


const GreetingValuesType = new GraphQLObjectType({
    name: 'values',
    fields: {
        christmas: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesChristmasType),
            // TODO: Implement resolver for christmas
            resolve: () => null,
        }
    },
});


const ValuesChristmasType = new GraphQLObjectType({
    name: 'christmas',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(ChristmasAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const ChristmasAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        skus: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for skus
            resolve: () => null,
        }
    },
});


const OptionsShapeType = new GraphQLObjectType({
    name: 'shape',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(ShapeAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        values: {
            description: 'enter your description',
            type: new GraphQLNonNull(ShapeValuesType),
            // TODO: Implement resolver for values
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const ShapeAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        default_value: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for default_value
            resolve: () => null,
        },
        warn_on_incompatible: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for warn_on_incompatible
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        show_single: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_single
            resolve: () => null,
        },
        auto_selectable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for auto_selectable
            resolve: () => null,
        },
        requires_selection: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for requires_selection
            resolve: () => null,
        },
        show_invalid_options: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_invalid_options
            resolve: () => null,
        }
    },
});


const ShapeValuesType = new GraphQLObjectType({
    name: 'values',
    fields: {
        B: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesBType),
            // TODO: Implement resolver for B
            resolve: () => null,
        },
        default: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesDefaultType),
            // TODO: Implement resolver for default
            resolve: () => null,
        },
        J: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesJType),
            // TODO: Implement resolver for J
            resolve: () => null,
        },
        O: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesOType),
            // TODO: Implement resolver for O
            resolve: () => null,
        },
        N: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesNType),
            // TODO: Implement resolver for N
            resolve: () => null,
        },
        Z: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesZType),
            // TODO: Implement resolver for Z
            resolve: () => null,
        }
    },
});


const ValuesBType = new GraphQLObjectType({
    name: 'B',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(BAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const BAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
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


const ValuesDefaultType = new GraphQLObjectType({
    name: 'default',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(DefaultAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const DefaultAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
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


const ValuesJType = new GraphQLObjectType({
    name: 'J',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(JAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const JAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
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


const ValuesOType = new GraphQLObjectType({
    name: 'O',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(OAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const OAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
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


const ValuesNType = new GraphQLObjectType({
    name: 'N',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(NAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const NAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
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


const ValuesZType = new GraphQLObjectType({
    name: 'Z',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(ZAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const ZAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
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


const OptionsPaperType = new GraphQLObjectType({
    name: 'paper',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(PaperAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        values: {
            description: 'enter your description',
            type: new GraphQLNonNull(PaperValuesType),
            // TODO: Implement resolver for values
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const PaperAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        default_value: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for default_value
            resolve: () => null,
        },
        warn_on_incompatible: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for warn_on_incompatible
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        show_single: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_single
            resolve: () => null,
        },
        auto_selectable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for auto_selectable
            resolve: () => null,
        },
        requires_selection: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for requires_selection
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        },
        show_invalid_options: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_invalid_options
            resolve: () => null,
        },
        show_price_delta: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_price_delta
            resolve: () => null,
        },
        single_value_show_label: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for single_value_show_label
            resolve: () => null,
        }
    },
});


const PaperValuesType = new GraphQLObjectType({
    name: 'values',
    fields: {
        DoubleThick: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesDoubleThickType),
            // TODO: Implement resolver for DoubleThick
            resolve: () => null,
        },
        Recycled: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesRecycledType),
            // TODO: Implement resolver for Recycled
            resolve: () => null,
        },
        Signature: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesSignatureType),
            // TODO: Implement resolver for Signature
            resolve: () => null,
        },
        TripleThick: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesTripleThickType),
            // TODO: Implement resolver for TripleThick
            resolve: () => null,
        },
        Pearlescent: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesPearlescentType),
            // TODO: Implement resolver for Pearlescent
            resolve: () => null,
        }
    },
});


const ValuesDoubleThickType = new GraphQLObjectType({
    name: 'DoubleThick',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(DoubleThickAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const DoubleThickAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const ValuesRecycledType = new GraphQLObjectType({
    name: 'Recycled',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(RecycledAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const RecycledAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const ValuesSignatureType = new GraphQLObjectType({
    name: 'Signature',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(SignatureAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const SignatureAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const ValuesTripleThickType = new GraphQLObjectType({
    name: 'TripleThick',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(TripleThickAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const TripleThickAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const ValuesPearlescentType = new GraphQLObjectType({
    name: 'Pearlescent',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(PearlescentAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const PearlescentAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        db_id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for db_id
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        description: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for description
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const OptionsFormFactorType = new GraphQLObjectType({
    name: 'form_factor',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(Form_factorAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        values: {
            description: 'enter your description',
            type: new GraphQLNonNull(Form_factorValuesType),
            // TODO: Implement resolver for values
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const Form_factorAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        default_value: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for default_value
            resolve: () => null,
        },
        warn_on_incompatible: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for warn_on_incompatible
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        show_single: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_single
            resolve: () => null,
        },
        auto_selectable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for auto_selectable
            resolve: () => null,
        },
        requires_selection: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for requires_selection
            resolve: () => null,
        },
        show_invalid_options: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_invalid_options
            resolve: () => null,
        }
    },
});


const Form_factorValuesType = new GraphQLObjectType({
    name: 'values',
    fields: {
        postcard: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesPostcardType),
            // TODO: Implement resolver for postcard
            resolve: () => null,
        },
        standard: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesStandardType),
            // TODO: Implement resolver for standard
            resolve: () => null,
        },
        petite: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesPetiteType),
            // TODO: Implement resolver for petite
            resolve: () => null,
        }
    },
});


const ValuesPostcardType = new GraphQLObjectType({
    name: 'postcard',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(PostcardAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const PostcardAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        dimensions: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for dimensions
            resolve: () => null,
        }
    },
});


const ValuesStandardType = new GraphQLObjectType({
    name: 'standard',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(StandardAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const StandardAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        dimensions: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for dimensions
            resolve: () => null,
        }
    },
});


const ValuesPetiteType = new GraphQLObjectType({
    name: 'petite',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(PetiteAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const PetiteAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        dimensions: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for dimensions
            resolve: () => null,
        }
    },
});


const OptionsPrintMethodType = new GraphQLObjectType({
    name: 'print_method',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(Print_methodAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        values: {
            description: 'enter your description',
            type: new GraphQLNonNull(Print_methodValuesType),
            // TODO: Implement resolver for values
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const Print_methodAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        default_value: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for default_value
            resolve: () => null,
        },
        warn_on_incompatible: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for warn_on_incompatible
            resolve: () => null,
        },
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
            resolve: () => null,
        },
        show_single: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_single
            resolve: () => null,
        },
        auto_selectable: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for auto_selectable
            resolve: () => null,
        },
        requires_selection: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for requires_selection
            resolve: () => null,
        },
        display_sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for display_sort_order
            resolve: () => null,
        },
        show_invalid_options: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for show_invalid_options
            resolve: () => null,
        },
        reset_more_views_carousel: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLBoolean),
            // TODO: Implement resolver for reset_more_views_carousel
            resolve: () => null,
        }
    },
});


const Print_methodValuesType = new GraphQLObjectType({
    name: 'values',
    fields: {
        Standard: {
            description: 'enter your description',
            type: new GraphQLNonNull(ValuesStandardType),
            // TODO: Implement resolver for Standard
            resolve: () => null,
        }
    },
});


const ValuesStandardType = new GraphQLObjectType({
    name: 'Standard',
    fields: {
        attributes: {
            description: 'enter your description',
            type: new GraphQLNonNull(StandardAttributesType),
            // TODO: Implement resolver for attributes
            resolve: () => null,
        },
        sort_order: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLInt),
            // TODO: Implement resolver for sort_order
            resolve: () => null,
        },
        key: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for key
            resolve: () => null,
        }
    },
});


const StandardAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        display_name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for display_name
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


module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
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
            HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for HPC
                resolve: () => null,
            },
            HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for HYC
                resolve: () => null,
            },
            HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for HMC
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
                type: null,
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
                type: new GraphQLNonNull(new GraphQLList(null)),
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
            id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLID),
                // TODO: Implement resolver for id
                resolve: () => null,
            },
            is_design_winner: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for is_design_winner
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
            displayName: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for displayName
                resolve: () => null,
            },
            id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLID),
                // TODO: Implement resolver for id
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
            default_value: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for default_value
                resolve: () => null,
            },
            warn_on_incompatible: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for warn_on_incompatible
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            show_single: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_single
                resolve: () => null,
            },
            auto_selectable: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for auto_selectable
                resolve: () => null,
            },
            requires_selection: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for requires_selection
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            show_invalid_options: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_invalid_options
                resolve: () => null,
            },
            show_price_delta: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_price_delta
                resolve: () => null,
            },
            single_value_show_label: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for single_value_show_label
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(FormatAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            description: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for description
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(Fold - Over(Message Inside) AttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            Fold - Over(Message Inside): {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesFoldOver0MessageInside0Type),
                // TODO: Implement resolver for Fold-Over (Message Inside)
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            description: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for description
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(Fold - over(blank inside) AttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            fold - over(blank inside): {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesFoldOver0BlankInside0Type),
                // TODO: Implement resolver for fold-over (blank inside)
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            description: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for description
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(Flat cardAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            flat card: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesFlatCardType),
                // TODO: Implement resolver for flat card
                resolve: () => null,
            },
            values: {
                description: 'enter your description',
                type: new GraphQLNonNull(FormatValuesType),
                // TODO: Implement resolver for values
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            format: {
                description: 'enter your description',
                type: new GraphQLNonNull(OptionsFormatType),
                // TODO: Implement resolver for format
                resolve: () => null,
            },
            default_value: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for default_value
                resolve: () => null,
            },
            warn_on_incompatible: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for warn_on_incompatible
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            show_single: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_single
                resolve: () => null,
            },
            auto_selectable: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for auto_selectable
                resolve: () => null,
            },
            requires_selection: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for requires_selection
                resolve: () => null,
            },
            swatch_shape: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for swatch_shape
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            show_invalid_options: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_invalid_options
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(ColorAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            color_choice_index: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorChoiceIndexType),
                // TODO: Implement resolver for color_choice_index
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesDbIdType),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesDisplayNameType),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            color_code: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for color_code
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            searchable_color: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesSearchableColorType),
                // TODO: Implement resolver for searchable_color
                resolve: () => null,
            },
            color_palette: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorPaletteType),
                // TODO: Implement resolver for color_palette
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesSortOrderType),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            color_string: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorStringType),
                // TODO: Implement resolver for color_string
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(AAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(ASortOrderType),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            A: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesAType),
                // TODO: Implement resolver for A
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            color_choice_index: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorChoiceIndexType),
                // TODO: Implement resolver for color_choice_index
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesDbIdType),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesDisplayNameType),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            color_code: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for color_code
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            searchable_color: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesSearchableColorType),
                // TODO: Implement resolver for searchable_color
                resolve: () => null,
            },
            color_palette: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorPaletteType),
                // TODO: Implement resolver for color_palette
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesSortOrderType),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            color_string: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorStringType),
                // TODO: Implement resolver for color_string
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(CAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(CSortOrderType),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            C: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesCType),
                // TODO: Implement resolver for C
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            color_choice_index: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorChoiceIndexType),
                // TODO: Implement resolver for color_choice_index
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesDbIdType),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesDisplayNameType),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            color_code: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for color_code
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            searchable_color: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesSearchableColorType),
                // TODO: Implement resolver for searchable_color
                resolve: () => null,
            },
            color_palette: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorPaletteType),
                // TODO: Implement resolver for color_palette
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesSortOrderType),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            color_string: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorStringType),
                // TODO: Implement resolver for color_string
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(BAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(BSortOrderType),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            B: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesBType),
                // TODO: Implement resolver for B
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            color_choice_index: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorChoiceIndexType),
                // TODO: Implement resolver for color_choice_index
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesDbIdType),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesDisplayNameType),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            color_code: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for color_code
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            searchable_color: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesSearchableColorType),
                // TODO: Implement resolver for searchable_color
                resolve: () => null,
            },
            color_palette: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorPaletteType),
                // TODO: Implement resolver for color_palette
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesSortOrderType),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            color_string: {
                description: 'enter your description',
                type: new GraphQLNonNull(AttributesColorStringType),
                // TODO: Implement resolver for color_string
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(DAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            MIN - 3 NB - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-3NB-HMC
                resolve: () => null,
            },
            MIN - IOZ - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-IOZ-HPC
                resolve: () => null,
            },
            MIN - 004 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-004-HYC
                resolve: () => null,
            },
            MIN - HHS - HMC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-HHS-HMC
                resolve: () => null,
            },
            MIN - L64 - HYC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-L64-HYC
                resolve: () => null,
            },
            MIN - 1 B7 - HPC: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for MIN-1B7-HPC
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(DSortOrderType),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            D: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesDType),
                // TODO: Implement resolver for D
                resolve: () => null,
            },
            values: {
                description: 'enter your description',
                type: new GraphQLNonNull(ColorValuesType),
                // TODO: Implement resolver for values
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            color: {
                description: 'enter your description',
                type: new GraphQLNonNull(OptionsColorType),
                // TODO: Implement resolver for color
                resolve: () => null,
            },
            default_value: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for default_value
                resolve: () => null,
            },
            warn_on_incompatible: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for warn_on_incompatible
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            show_single: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_single
                resolve: () => null,
            },
            auto_selectable: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for auto_selectable
                resolve: () => null,
            },
            requires_selection: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for requires_selection
                resolve: () => null,
            },
            show_invalid_options: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_invalid_options
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(PhotoAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            num_of_photos: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for num_of_photos
                resolve: () => null,
            },
            photo_orientation: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for photo_orientation
                resolve: () => null,
            },
            orientation: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for orientation
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(1 _portrait--portraitAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            1 _portrait--portrait: {
                description: 'enter your description',
                type: new GraphQLNonNull(Values1Portrait0PortraitType),
                // TODO: Implement resolver for 1_portrait--portrait
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            num_of_photos: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for num_of_photos
                resolve: () => null,
            },
            photo_orientation: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for photo_orientation
                resolve: () => null,
            },
            orientation: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for orientation
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(1 _landscape--landscapeAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            1 _landscape--landscape: {
                description: 'enter your description',
                type: new GraphQLNonNull(Values1Landscape0LandscapeType),
                // TODO: Implement resolver for 1_landscape--landscape
                resolve: () => null,
            },
            values: {
                description: 'enter your description',
                type: new GraphQLNonNull(PhotoValuesType),
                // TODO: Implement resolver for values
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            photo: {
                description: 'enter your description',
                type: new GraphQLNonNull(OptionsPhotoType),
                // TODO: Implement resolver for photo
                resolve: () => null,
            },
            default_value: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for default_value
                resolve: () => null,
            },
            warn_on_incompatible: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for warn_on_incompatible
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            show_single: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_single
                resolve: () => null,
            },
            auto_selectable: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for auto_selectable
                resolve: () => null,
            },
            requires_selection: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for requires_selection
                resolve: () => null,
            },
            show_invalid_options: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_invalid_options
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(GreetingAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            skus: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for skus
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(ChristmasAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            christmas: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesChristmasType),
                // TODO: Implement resolver for christmas
                resolve: () => null,
            },
            values: {
                description: 'enter your description',
                type: new GraphQLNonNull(GreetingValuesType),
                // TODO: Implement resolver for values
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            greeting: {
                description: 'enter your description',
                type: new GraphQLNonNull(OptionsGreetingType),
                // TODO: Implement resolver for greeting
                resolve: () => null,
            },
            default_value: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for default_value
                resolve: () => null,
            },
            warn_on_incompatible: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for warn_on_incompatible
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            show_single: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_single
                resolve: () => null,
            },
            auto_selectable: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for auto_selectable
                resolve: () => null,
            },
            requires_selection: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for requires_selection
                resolve: () => null,
            },
            show_invalid_options: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_invalid_options
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(ShapeAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(BAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            B: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesBType),
                // TODO: Implement resolver for B
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(DefaultAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            default: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesDefaultType),
                // TODO: Implement resolver for default
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(JAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            J: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesJType),
                // TODO: Implement resolver for J
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(OAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            O: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesOType),
                // TODO: Implement resolver for O
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(NAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            N: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesNType),
                // TODO: Implement resolver for N
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(ZAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            Z: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesZType),
                // TODO: Implement resolver for Z
                resolve: () => null,
            },
            values: {
                description: 'enter your description',
                type: new GraphQLNonNull(ShapeValuesType),
                // TODO: Implement resolver for values
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            shape: {
                description: 'enter your description',
                type: new GraphQLNonNull(OptionsShapeType),
                // TODO: Implement resolver for shape
                resolve: () => null,
            },
            default_value: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for default_value
                resolve: () => null,
            },
            warn_on_incompatible: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for warn_on_incompatible
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            show_single: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_single
                resolve: () => null,
            },
            auto_selectable: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for auto_selectable
                resolve: () => null,
            },
            requires_selection: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for requires_selection
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            show_invalid_options: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_invalid_options
                resolve: () => null,
            },
            show_price_delta: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_price_delta
                resolve: () => null,
            },
            single_value_show_label: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for single_value_show_label
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(PaperAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            description: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for description
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(DoubleThickAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            DoubleThick: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesDoubleThickType),
                // TODO: Implement resolver for DoubleThick
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            description: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for description
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(RecycledAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            Recycled: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesRecycledType),
                // TODO: Implement resolver for Recycled
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            description: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for description
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(SignatureAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            Signature: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesSignatureType),
                // TODO: Implement resolver for Signature
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            description: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for description
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(TripleThickAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            TripleThick: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesTripleThickType),
                // TODO: Implement resolver for TripleThick
                resolve: () => null,
            },
            db_id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for db_id
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            description: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for description
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(PearlescentAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            Pearlescent: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesPearlescentType),
                // TODO: Implement resolver for Pearlescent
                resolve: () => null,
            },
            values: {
                description: 'enter your description',
                type: new GraphQLNonNull(PaperValuesType),
                // TODO: Implement resolver for values
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            paper: {
                description: 'enter your description',
                type: new GraphQLNonNull(OptionsPaperType),
                // TODO: Implement resolver for paper
                resolve: () => null,
            },
            default_value: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for default_value
                resolve: () => null,
            },
            warn_on_incompatible: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for warn_on_incompatible
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            show_single: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_single
                resolve: () => null,
            },
            auto_selectable: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for auto_selectable
                resolve: () => null,
            },
            requires_selection: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for requires_selection
                resolve: () => null,
            },
            show_invalid_options: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_invalid_options
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(Form_factorAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            dimensions: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for dimensions
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(PostcardAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            postcard: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesPostcardType),
                // TODO: Implement resolver for postcard
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            dimensions: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for dimensions
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(StandardAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            standard: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesStandardType),
                // TODO: Implement resolver for standard
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            dimensions: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for dimensions
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(PetiteAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            petite: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesPetiteType),
                // TODO: Implement resolver for petite
                resolve: () => null,
            },
            values: {
                description: 'enter your description',
                type: new GraphQLNonNull(Form_factorValuesType),
                // TODO: Implement resolver for values
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            form_factor: {
                description: 'enter your description',
                type: new GraphQLNonNull(OptionsFormFactorType),
                // TODO: Implement resolver for form_factor
                resolve: () => null,
            },
            default_value: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for default_value
                resolve: () => null,
            },
            warn_on_incompatible: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for warn_on_incompatible
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            show_single: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_single
                resolve: () => null,
            },
            auto_selectable: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for auto_selectable
                resolve: () => null,
            },
            requires_selection: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for requires_selection
                resolve: () => null,
            },
            display_sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for display_sort_order
                resolve: () => null,
            },
            show_invalid_options: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for show_invalid_options
                resolve: () => null,
            },
            reset_more_views_carousel: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for reset_more_views_carousel
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(Print_methodAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            display_name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for display_name
                resolve: () => null,
            },
            attributes: {
                description: 'enter your description',
                type: new GraphQLNonNull(StandardAttributesType),
                // TODO: Implement resolver for attributes
                resolve: () => null,
            },
            sort_order: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for sort_order
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            Standard: {
                description: 'enter your description',
                type: new GraphQLNonNull(ValuesStandardType),
                // TODO: Implement resolver for Standard
                resolve: () => null,
            },
            values: {
                description: 'enter your description',
                type: new GraphQLNonNull(Print_methodValuesType),
                // TODO: Implement resolver for values
                resolve: () => null,
            },
            key: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for key
                resolve: () => null,
            },
            print_method: {
                description: 'enter your description',
                type: new GraphQLNonNull(OptionsPrintMethodType),
                // TODO: Implement resolver for print_method
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
            }
        })
    })
})
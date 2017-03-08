module.exports = {
  _timestamp: {
    enabled: true,
  },
  dynamic_templates: [
    {
      string: {
        mapping: {
          index: 'not_analyzed',
          type: 'string',
        },
        match: '*',
        match_mapping_type: 'string',
      },
    },
  ],
  properties: {
    aggregation_id: {
      type: 'string',
      index: 'not_analyzed',
    },
    artist: {
      properties: {
        account_id: {
          type: 'long',
        },
        commission_request_url: {
          type: 'string',
          index: 'not_analyzed',
        },
        first_name: {
          type: 'string',
          index: 'not_analyzed',
        },
        images: {
          properties: {
            image_type: {
              type: 'string',
              index: 'not_analyzed',
            },
            url: {
              type: 'string',
              index: 'not_analyzed',
            },
          },
        },
        is_minted_user: {
          type: 'boolean',
        },
        last_name: {
          type: 'string',
          index: 'not_analyzed',
        },
        location: {
          properties: {
            city: {
              type: 'string',
              index: 'not_analyzed',
            },
            country: {
              type: 'string',
              index: 'not_analyzed',
            },
            state: {
              type: 'string',
              index: 'not_analyzed',
            },
            visible_location: {
              type: 'string',
              index: 'not_analyzed',
            },
          },
        },
        name: {
          type: 'string',
          index: 'not_analyzed',
        },
        philosophy: {
          type: 'string',
          index: 'not_analyzed',
        },
        product_skus: {
          type: 'string',
          index: 'not_analyzed',
        },
        url: {
          type: 'string',
          index: 'not_analyzed',
        },
        user_id: {
          type: 'long',
        },
      },
    },
    attributes: {
      properties: {
        alert_messages: {
          type: 'string',
          index: 'not_analyzed',
        },
        artist_user_id: {
          type: 'long',
        },
        associated_pk_data: {
          properties: {
            description: {
              type: 'string',
              index: 'not_analyzed',
            },
            image_url: {
              type: 'string',
              index: 'not_analyzed',
            },
            product_kind: {
              type: 'string',
              index: 'not_analyzed',
            },
            url: {
              type: 'string',
              index: 'not_analyzed',
            },
          },
        },
        breadcrumbs: {
          properties: {
            label: {
              type: 'string',
              index: 'not_analyzed',
            },
            url: {
              type: 'string',
              index: 'not_analyzed',
            },
          },
        },
        business_category: {
          type: 'string',
          index: 'not_analyzed',
        },
        default_quantity: {
          type: 'long',
        },
        default_shipping_method: {
          properties: {
            displayName: {
              type: 'string',
              index: 'not_analyzed',
            },
            id: {
              type: 'long',
            },
          },
        },
        description: {
          type: 'string',
          index: 'not_analyzed',
        },
        design: {
          properties: {
            id: {
              type: 'long',
            },
            is_design_winner: {
              type: 'boolean',
            },
          },
        },
        exclusively_from_minted: {
          type: 'boolean',
        },
        family_name: {
          type: 'string',
          index: 'not_analyzed',
        },
        feature_callouts: {
          type: 'string',
          index: 'not_analyzed',
        },
        first_photo_slot_dimensions: {
          type: 'string',
          index: 'not_analyzed',
        },
        format: {
          type: 'string',
          index: 'not_analyzed',
        },
        gender: {
          type: 'string',
          index: 'not_analyzed',
        },
        greeting: {
          type: 'string',
          index: 'not_analyzed',
        },
        highlight: {
          type: 'string',
          index: 'not_analyzed',
        },
        holiday: {
          type: 'string',
          index: 'not_analyzed',
        },
        is_commissionable: {
          type: 'boolean',
        },
        is_customizable: {
          type: 'boolean',
        },
        is_luxury_card: {
          type: 'boolean',
        },
        merchandising_line: {
          type: 'string',
          index: 'not_analyzed',
        },
        name: {
          type: 'string',
          index: 'not_analyzed',
        },
        num_cover_photos: {
          type: 'long',
        },
        occasion: {
          type: 'string',
          index: 'not_analyzed',
        },
        og_description: {
          type: 'string',
          index: 'not_analyzed',
        },
        og_title: {
          type: 'string',
          index: 'not_analyzed',
        },
        printing_method_available: {
          type: 'string',
          index: 'not_analyzed',
        },
        season: {
          type: 'string',
          index: 'not_analyzed',
        },
        sku_group: {
          type: 'string',
          index: 'not_analyzed',
        },
        special_feature: {
          type: 'string',
          index: 'not_analyzed',
        },
        special_tag: {
          type: 'string',
          index: 'not_analyzed',
        },
        style: {
          type: 'string',
          index: 'not_analyzed',
        },
        subject: {
          type: 'string',
          index: 'not_analyzed',
        },
        tags: {
          type: 'string',
          index: 'not_analyzed',
        },
        text_placement: {
          type: 'string',
          index: 'not_analyzed',
        },
        theme: {
          type: 'string',
          index: 'not_analyzed',
        },
        type_of_design: {
          type: 'string',
          index: 'not_analyzed',
        },
      },
    },
    description: {
      properties: {
        BCC: {
          type: 'string',
          index: 'not_analyzed',
        },
        BFC: {
          type: 'string',
          index: 'not_analyzed',
        },
        CHR: {
          type: 'string',
          index: 'not_analyzed',
        },
        DLC: {
          type: 'string',
          index: 'not_analyzed',
        },
        FDC: {
          type: 'string',
          index: 'not_analyzed',
        },
        FHB: {
          type: 'string',
          index: 'not_analyzed',
        },
        FMC: {
          type: 'string',
          index: 'not_analyzed',
        },
        FPC: {
          type: 'string',
          index: 'not_analyzed',
        },
        HAM: {
          type: 'string',
          index: 'not_analyzed',
        },
        HAN: {
          type: 'string',
          index: 'not_analyzed',
        },
        HAP: {
          type: 'string',
          index: 'not_analyzed',
        },
        HBK: {
          type: 'string',
          index: 'not_analyzed',
        },
        HBM: {
          type: 'string',
          index: 'not_analyzed',
        },
        HCP: {
          type: 'string',
          index: 'not_analyzed',
        },
        HFM: {
          type: 'string',
          index: 'not_analyzed',
        },
        HFS: {
          type: 'string',
          index: 'not_analyzed',
        },
        HLC: {
          type: 'string',
          index: 'not_analyzed',
        },
        HLE: {
          type: 'string',
          index: 'not_analyzed',
        },
        HMC: {
          type: 'string',
          index: 'not_analyzed',
        },
        HNP: {
          type: 'string',
          index: 'not_analyzed',
        },
        HNY: {
          type: 'string',
          index: 'not_analyzed',
        },
        HOC: {
          type: 'string',
          index: 'not_analyzed',
        },
        HPC: {
          type: 'string',
          index: 'not_analyzed',
        },
        HYC: {
          type: 'string',
          index: 'not_analyzed',
        },
        LNM: {
          type: 'string',
          index: 'not_analyzed',
        },
        LNY: {
          type: 'string',
          index: 'not_analyzed',
        },
        LPC: {
          type: 'string',
          index: 'not_analyzed',
        },
        MLC: {
          type: 'string',
          index: 'not_analyzed',
        },
        RHS: {
          type: 'string',
          index: 'not_analyzed',
        },
        TMC: {
          type: 'string',
          index: 'not_analyzed',
        },
        TXG: {
          type: 'string',
          index: 'not_analyzed',
        },
        TXP: {
          type: 'string',
          index: 'not_analyzed',
        },
      },
    },
    id: {
      type: 'integer',
    },
    // option_relationships: {
    //   type: 'nested',
    //   properties: {
    //     destination_option: {
    //       type: 'string',
    //       index: 'not_analyzed',
    //     },
    //     origin_option: {
    //       type: 'string',
    //       index: 'not_analyzed',
    //     },
    //     relationship_type: {
    //       type: 'string',
    //       index: 'not_analyzed',
    //     },
    //     sort_order: {
    //       type: 'long',
    //     },
    //   },
    // },
    // options: {
    //   type: 'object',
    //   enabled: false,
    // },
    product_kind: {
      type: 'string',
      index: 'not_analyzed',
    },
    schema_version: {
      type: 'integer',
    },
    sku: {
      type: 'string',
      index: 'not_analyzed',
    },
    skus: {
      type: 'string',
      index: 'not_analyzed',
    },
    updated_at_utc: {
      type: 'date',
      store: true,
      format: 'strict_date_optional_time||epoch_millis',
    },
    variants: {
      type: 'string',
      index: 'not_analyzed',
    },
  },
};

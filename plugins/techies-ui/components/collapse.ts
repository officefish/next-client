export const collapse = {
    
    '.collapse:not(td):not(tr):not(colgroup)': {
        '@apply visible': {}
    },

    '.collapse': {
        '@apply relative grid overflow-hidden': {},
        'grid-template-rows': 'auto 0fr',
        transition: 'grid-template-rows 0.2s'
    },

    [`.collapse-title,
      .collapse > input[type="checkbox"],
      .collapse > input[type="radio"],
      .collapse-content`] : {
        '@apply col-start-1 row-start-1': {}
    },

    [`.collapse > input[type="checkbox"],
      .collapse > input[type="radio"]`]: {
        '@apply appearance-none opacity-0': {}
    },

    '.collapse-content': {
        '@apply col-start-1 row-start-2 invisible min-h-0': {},
        transition: 'visibility 0.2s'
    },

    [`.collapse[open],
      .collapse-open,
      .collapse:focus:not(.collapse-close)`]: {
        'grid-template-rows': 'auto 1fr'
    },

    [`.collapse:not(.collapse-close):has(> input[type="checkbox"]:checked),
      .collapse:not(.collapse-close):has(> input[type="radio"]:checked)`]: {
        'grid-template-rows': 'auto 1fr'
    },

    [`.collapse[open] .collapse-content,
      .collapse-open .collapse-content,
      .collapse:focus:not(.collapse-close) .collapse-content,
      .collapse:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-content,
      .collapse:not(.collapse-close) input[type="radio"]:checked ~ .collapse-content`]: {
        '@apply visible min-h-fit': {}
    }
}
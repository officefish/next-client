export const navbar = {
    
    '.navbar': {
        '@apply flex items-center': {}
    },

    ':where(.navbar > *)': {
        '@apply inline-flex items-center': {}
    },

    '.navbar-start': {
        width: '50%',
        'justify-content': 'flex-start'
    },

    '.navbar-center': {
        'flex-shrink': 0
    },

    '.navbar-end': {
        width: '50%',
        'justify-content': 'flex-end'
    }
}
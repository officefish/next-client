
export const chat = {

    '.chat': {

        '@apply grid grid-cols-2 gap-x-3 py-1': {},
    
        '&-image': {
            '@apply self-end row-span-2': {}
        },
    
        '&-header': {
            '@apply text-sm row-start-1': {},

            '@apply text-neutral-content': {},
            ':is(.dark) &': {
                '@apply text-neutral-content-dark': {},
            }

        },
    
        '&-footer': {
            '@apply text-sm row-start-3': {},
            
            '@apply text-neutral-content': {},
            ':is(.dark) &': {
                '@apply text-neutral-content-dark': {},
            }
        },
    
        '&-bubble': {
            '@apply block w-fit px-4 py-2 relative': {},
            'max-width': '90%',
          
            '&:before': {
                '@apply w-3 h-3 absolute bottom-0': {},
                'background-color': 'inherit',
                'content': "''",
                'mask-size': 'contain',
                'mask-repeat': 'no-repeat',
                'mask-position': 'center'
            }
        },
    
        '&-start': {
            '@apply place-items-start': {},
            'grid-template-columns': 'auto 1fr',
            
            '.chat-header': {
                '@apply col-start-2': {}
            },
    
            '.chat-footer': {
                '@apply col-start-2': {}
            },
    
            '.chat-image': {
                '@apply col-start-1': {}
            },
    
            '.chat-bubble': {
                '@apply col-start-2': {},
                '&:before': {
                    'mask-image': `url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e")`,
                    [`[dir="rtl"] &`]: {
                        'mask-image': `url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e")`
                    }
                }
            }
        },
    
        '&-end': {
            '@apply place-items-end': {},
            'grid-template-columns': '1fr auto',
            '.chat-header': {
                '@apply col-start-1': {}
            },
    
            '.chat-footer': {
                '@apply col-start-1': {}
            },
    
            '.chat-image': {
                '@apply col-start-2': {}
            },
    
            '.chat-bubble': {
                '@apply col-start-1': {},
                '&:before': {
                    'mask-image': `url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e")`,
                    [`[dir="rtl"] &`]: {
                        'mask-image': `url("data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e")`
                    }
                }
            }
        }
    }

   
}
export const modal = {
    
    '.modal': {
        '@apply pointer-events-none invisible fixed inset-0 flex justify-center opacity-0': {},
        'z-index': 999
    },

    ':where(.modal)': {
        '@apply items-center': {}
    },
    
    '.modal-box': {
        'max-height': 'calc(100vh - 5em)'
    },

    [`.modal-open,
    .modal:target,
    .modal-toggle:checked + .modal`]: {
        '@apply pointer-events-auto visible opacity-100': {}
    },

    '.modal-action': {
        '@apply flex': {},
    },

    '.modal-toggle': {
        '@apply fixed h-0 w-0 appearance-none opacity-0': {}
    }
}
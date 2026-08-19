export const nav = [
  {
    group: 'Get Started',
    items: [
      { label: 'Introduction', href: '/' },
      { label: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    group: 'Inputs',
    items: [
      { label: 'Button', href: '/components/button' },
      { label: 'IconButton', href: '/components/icon-button' },
      { label: 'TextField', href: '/components/text-field' },
      { label: 'Select', href: '/components/select' },
      { label: 'Checkbox', href: '/components/checkbox' },
      { label: 'Switch', href: '/components/switch' },
      { label: 'Slider', href: '/components/slider' },
      { label: 'Rating', href: '/components/rating' },
      { label: 'Autocomplete', href: '/components/autocomplete' },
      { label: 'Textarea', href: '/components/textarea' },
      { label: 'ButtonGroup', href: '/components/button-group' },
      { label: 'ToggleButton', href: '/components/toggle-button' },
    ],
  },
  {
    group: 'Data Display',
    items: [
      { label: 'Typography', href: '/components/typography' },
      { label: 'Avatar', href: '/components/avatar' },
      { label: 'Badge', href: '/components/badge' },
      { label: 'Chip', href: '/components/chip' },
      { label: 'Table', href: '/components/table' },
      { label: 'Divider', href: '/components/divider' },
      { label: 'List', href: '/components/list' },
      { label: 'ImageList', href: '/components/image-list' },
    ],
  },
  {
    group: 'Feedback',
    items: [
      { label: 'Alert', href: '/components/alert' },
      { label: 'Toast', href: '/components/toast' },
      { label: 'Dialog', href: '/components/dialog' },
      { label: 'Progress', href: '/components/progress' },
      { label: 'Skeleton', href: '/components/skeleton' },
    ],
  },
  {
    group: 'Layout',
    items: [
      { label: 'Box', href: '/components/box' },
      { label: 'Container', href: '/components/container' },
      { label: 'Grid', href: '/components/grid' },
      { label: 'Stack', href: '/components/stack' },
      { label: 'Masonry', href: '/components/masonry' },
    ],
  },
  {
    group: 'Surfaces',
    items: [
      { label: 'Card', href: '/components/card' },
      { label: 'Accordion', href: '/components/accordion' },
      { label: 'AppBar', href: '/components/app-bar' },
      { label: 'Paper', href: '/components/paper' },
    ],
  },
  {
    group: 'Navigation',
    items: [
      { label: 'Tabs', href: '/components/tabs' },
      { label: 'Breadcrumbs', href: '/components/breadcrumbs' },
      { label: 'Pagination', href: '/components/pagination' },
      { label: 'Menu', href: '/components/menu' },
      { label: 'Stepper', href: '/components/stepper' },
      { label: 'Link', href: '/components/link' },
      { label: 'BottomNavigation', href: '/components/bottom-navigation' },
      { label: 'Menubar', href: '/components/menubar' },
      { label: 'SpeedDial', href: '/components/speed-dial' },
    ],
  },
  {
    group: 'Overlay',
    items: [
      { label: 'Modal', href: '/components/modal' },
      { label: 'Drawer', href: '/components/drawer' },
      { label: 'Popover', href: '/components/popover' },
      { label: 'Tooltip', href: '/components/tooltip' },
      { label: 'Backdrop', href: '/components/backdrop' },
    ],
  },
  {
    group: 'Lux Exclusive',
    items: [
      { label: 'GradientText', href: '/components/gradient-text' },
      { label: 'MagneticButton', href: '/components/magnetic-button' },
      { label: 'ConfettiButton', href: '/components/confetti-button' },
      { label: 'TiltCard', href: '/components/tilt-card' },
      { label: 'Typewriter', href: '/components/typewriter' },
      { label: 'Counter', href: '/components/counter' },
      { label: 'Timeline', href: '/components/timeline' },
      { label: 'ColorPicker', href: '/components/color-picker' },
      { label: 'Marquee', href: '/components/marquee' },
      { label: 'CursorTrail', href: '/components/cursor-trail' },
    ],
  },
  {
    group: 'Advanced',
    items: [
      { label: 'DataGrid', href: '/components/data-grid' },
      { label: 'DatePicker', href: '/components/date-picker' },
      { label: 'TimePicker', href: '/components/time-picker' },
      { label: 'FileUpload', href: '/components/file-upload' },
      { label: 'TreeView', href: '/components/tree-view' },
      { label: 'VirtualList', href: '/components/virtual-list' },
      { label: 'Kanban', href: '/components/kanban' },
      { label: 'Charts', href: '/components/charts' },
      { label: 'CodeEditor', href: '/components/code-editor' },
      { label: 'RichTextEditor', href: '/components/rich-text-editor' },
      { label: 'InfiniteScroll', href: '/components/infinite-scroll' },
    ],
  },
];

export const AccordionRows = [
  { name: 'allowMultiple', type: 'boolean', default: 'false', description: 'Allow multiple items open at once.' },
  { name: 'defaultOpen', type: 'string | string[]', description: 'Initially open item id(s).' },
  { name: 'id', type: 'string', description: '(AccordionItem) Unique identifier.' },
  { name: 'title', type: 'ReactNode', description: '(AccordionItem) Header content.' },
]

export const AlertRows = [
  { name: 'tone', type: 'LuxTone', default: "'info'", description: 'Color tone.' },
  { name: 'title', type: 'ReactNode', description: 'Bold title text.' },
  { name: 'icon', type: 'ReactNode', description: 'Custom icon (defaults based on tone).' },
  { name: 'variant', type: "'solid' | 'soft' | 'outline'", default: "'soft'", description: 'Visual style.' },
  { name: 'onClose', type: '() => void', description: 'Shows a close button when provided.' },
]

export const AppBarRows = [
  { name: 'left', type: 'ReactNode', description: 'Content on the left (logo, title).' },
  { name: 'center', type: 'ReactNode', description: 'Center content (search, nav).' },
  { name: 'right', type: 'ReactNode', description: 'Content on the right (actions, avatar).' },
  { name: 'variant', type: "'solid' | 'glass' | 'transparent'", default: "'glass'", description: 'Background style.' },
  { name: 'sticky', type: 'boolean', default: 'false', description: 'Sticks to the top of the viewport.' },
  { name: 'height', type: 'number', default: '64', description: 'Bar height in px.' },
]

export const AutoCompleteRows = [
  { name: 'options', type: 'AutocompleteOption[]', description: 'Array of { value, label } objects.' },
  { name: 'value', type: 'string', description: 'Controlled input text.' },
  { name: 'onChange', type: '(value: string) => void', description: 'Called with the selected option value.' },
  { name: 'placeholder', type: 'string', default: "'Search…'", description: 'Input placeholder.' },
  { name: 'label', type: 'string', description: 'Field label.' },
  { name: 'noOptionsText', type: 'string', default: "'No options'", description: 'Shown when the filtered list is empty.' },
  { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches to 100% width.' },
]

export const AvatarRows = [
  { name: 'src', type: 'string', description: 'Image URL.' },
  { name: 'initials', type: 'string', description: 'Fallback initials when no image.' },
  { name: 'size', type: 'LuxSize', default: "'md'", description: 'Avatar dimensions.' },
  { name: 'status', type: "'online' | 'offline' | 'away' | 'busy'", description: 'Status indicator dot.' },
  { name: 'tone', type: 'LuxTone', description: 'Background tone (used when no src/color).' },
]

export const BackdropRows = [
  { name: 'open', type: 'boolean', default: 'true', description: 'Whether the backdrop is visible.' },
  { name: 'blur', type: 'number', default: '4', description: 'Backdrop blur amount in px.' },
  { name: 'opacity', type: 'number', default: '0.55', description: 'Background dim opacity (0-1).' },
  { name: 'onClick', type: '() => void', description: 'Click handler — typically closes the overlay.' },
  { name: 'zIndex', type: 'number', default: '1000', description: 'Stack order.' },
]
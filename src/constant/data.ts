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

export const BadgeRows = [
  { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
  { name: 'variant', type: "'default' | 'dot' | 'counter' | 'pill'", default: "'default'", description: 'Badge style.' },
  { name: 'size', type: 'LuxSize', default: "'md'", description: 'Badge size.' },
  { name: 'count', type: 'number', description: 'Number shown when variant is "counter".' },
]

export const BottomNavigationRows = [
  { name: 'items', type: 'BottomNavItem[]', description: 'Array of { label, icon, value, badge? }.' },
  { name: 'value', type: 'string', description: 'Currently active item value.' },
  { name: 'onChange', type: '(value: string) => void', description: 'Change handler.' },
  { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Active item color.' },
]

export const BoxRows = [
  { name: 'as', type: 'ElementType', default: "'div'", description: 'Render as a different element.' },
  { name: 'p / px / py', type: 'number | string', description: 'Padding (number = multiples of 0.25rem).' },
  { name: 'm / mx / my', type: 'number | string', description: 'Margin (number = multiples of 0.25rem).' },
  { name: 'w / h', type: 'number | string', description: 'Width / height.' },
]

export const BreadcrumbsRows = [
  { name: 'items', type: 'BreadcrumbItem[]', description: 'Array of { label, href?, icon?, onClick? }.' },
  { name: 'separator', type: 'ReactNode', default: "'/'", description: 'Separator between items.' },
  { name: 'maxItems', type: 'number', description: 'Collapses middle items with an ellipsis.' },
]

export const ButtonRows = [
  { name: 'variant', type: "'solid' | 'outline' | 'ghost' | 'soft'", default: "'solid'", description: 'Visual style of the button.' },
  { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color tone.' },
  { name: 'size', type: 'LuxSize', default: "'md'", description: 'Size of the button.' },
  { name: 'radius', type: 'LuxRadius', default: "'full'", description: 'Border radius.' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a spinner and disables the button.' },
  { name: 'ripple', type: 'boolean', default: 'true', description: 'Click ripple effect.' },
  { name: 'magnetic', type: 'boolean', default: 'false', description: 'Cursor-following hover effect.' },
  { name: 'leftIcon', type: 'ReactNode', description: 'Icon before the label.' },
  { name: 'rightIcon', type: 'ReactNode', description: 'Icon after the label.' },
  { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Stretches to 100% width.' },
]

export const ButtonGroupRows = [
  { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction.' },
  { name: 'variant', type: 'LuxVariant', description: 'Applies to all child Buttons unless overridden.' },
  { name: 'tone', type: 'LuxTone', description: 'Applies to all child Buttons unless overridden.' },
]

export const CardRows = [
  { name: 'variant', type: "'default' | 'glass' | 'neon' | 'aurora' | 'matte' | 'raised' | 'outline'", default: "'default'", description: 'Visual style of the card.' },
  { name: 'radius', type: 'LuxRadius', default: "'xl'", description: 'Border radius.' },
  { name: 'size', type: 'LuxSize', default: "'md'", description: 'Internal padding density.' },
  { name: 'hoverable', type: 'boolean', default: 'false', description: 'Adds a subtle hover motion effect.' },
  { name: 'glow', type: 'boolean', default: 'false', description: 'Adds a soft glow.' },
  { name: 'elevation', type: "'none' | 'xs' | 'low' | 'mid' | 'high' | 'float'", default: "'low'", description: 'Shadow depth.' },
]

export const ChartRows = [
  { name: 'data', type: 'ChartDataPoint[]', description: 'Array of { label, value, tone? }.' },
  { name: 'tone', type: 'LuxTone', default: "'primary'", description: '(Bar/Line) Single-series color.' },
  { name: 'showValues', type: 'boolean', default: 'true', description: '(BarChart) Show numeric labels.' },
  { name: 'horizontal', type: 'boolean', default: 'false', description: '(BarChart) Horizontal bar orientation.' },
  { name: 'showArea', type: 'boolean', default: 'false', description: '(LineChart) Fill area under the line.' },
  { name: 'showDots', type: 'boolean', default: 'true', description: '(LineChart) Show point markers.' },
  { name: 'innerRadiusRatio', type: 'number', default: '0', description: '(PieChart) 0 = pie, >0 = donut hole ratio.' },
  { name: 'showLegend', type: 'boolean', default: 'true', description: '(PieChart) Show color legend.' },
]

export const CheckboxRows = [
  { name: 'label', type: 'string', description: 'Label text.' },
  { name: 'hint', type: 'string', description: 'Helper text below the label.' },
  { name: 'size', type: 'LuxSize', default: "'md'", description: 'Checkbox dimensions.' },
  { name: 'tone', type: 'LuxTone', default: "'primary'", description: 'Color when checked.' },
  { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Shows a dash instead of a checkmark.' },
]
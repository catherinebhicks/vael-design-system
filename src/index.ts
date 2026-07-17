// Theme
export { theme, darkTheme } from './theme';
export { palette } from './theme';
export type { ColorName, ColorStep } from './theme';

// Foundation tokens (border, focus-ring, mono/code type, z-index, state-layer,
// surfaces, shape scale, reduced-motion). Typed constants + design-tokens.json mirror.
export {
  foundationTokens,
  borderWidths,
  focusRing,
  monoType,
  zIndex,
  reducedMotion,
  stateLayer,
  surfaces,
  shapeScale,
} from '../vael/foundation-tokens';
export type { FoundationTokens } from '../vael/foundation-tokens';

// Components
export * from './components/AgGrid';
// Charts — Advanced tier (Highcharts): flat exports (AreaChart, BarChart, DonutChart,
// GaugeChart, MultiAxisChart, ControlChart, SparklineChart, RadarChart, HighchartsChart).
export * from './components/Charts';
// Charts — Standard tier (MUI X): namespaced to avoid the BarChart name clash above.
// Consume as `StandardCharts.LineChart`, `StandardCharts.RadarChart`, etc.
export * as StandardCharts from './components/StandardCharts';
// Micro-viz tier (zero-dep SVG): inline stat visuals.
export * from './components/Sparkline';
export * from './components/StatBlock';
export * from './components/SegmentMeter';
export * from './components/MeterRow';
export * from './components/WaffleChart';
export * from './components/GaugeStat';
// Dashboard / data-viz layer
export * from './components/StatCard';
export * from './components/ChartCard';
export * from './components/Legend';
export * from './components/TrendBadge';
// Form + completeness
export * from './components/Badge';
export * from './components/BottomNavigation';
export * from './components/Breadcrumbs';
export * from './components/Pagination';
export * from './components/Skeleton';
export * from './components/InputNumber';
export * from './components/Infotext';
export * from './components/PasswordField';
export * from './components/AdvancedSelect';
export * from './components/FileUpload';
export * from './components/Accordion';
export * from './components/DragOverlay';
export * from './components/FlowCanvas';
export * from './components/ImageList';
export * from './components/SpeedDial';
export * from './components/Alert';
export * from './components/AppBar';
export * from './components/Autocomplete';
export * from './components/Avatar';
export * from './components/Button';
export * from './components/Callout';
export * from './components/Card';
export * from './components/Checkbox';
export * from './components/Chip';
export * from './components/CircularProgress';
export * from './components/CopyButton';
export * from './components/DataGrid';
export * from './components/DatePicker';
export * from './components/Descriptions';
export * from './components/Dialog';
export * from './components/Divider';
export * from './components/Drawer';
export * from './components/EmptyState';
export * from './components/HorizontalTimeline';
export * from './components/Layout';
export * from './components/LinearProgress';
export * from './components/Link';
export * from './components/List';
export * from './components/Mark';
export * from './components/Navigation';
export * from './components/NotificationCenter';
export * from './components/Popover';
export * from './components/Radio';
export * from './components/Rating';
export * from './components/SegmentedControl';
export * from './components/StatusBadge';
export * from './components/Slider';
export * from './components/SidePanel';
export * from './components/Snackbar';
export * from './components/SplitButton';
export * from './components/Stepper';
export * from './components/Switch';
export * from './components/Table';
export * from './components/Tag';
export * from './components/Tabs';
export * from './components/TextField';
export * from './components/Timeline';
export * from './components/Toggle';
export * from './components/Tooltip';
export * from './components/TreeView';
export * from './components/UncontrolledMenu';

// Presentation layer (case-study / deck compositions)
export * from './components/SectionHeading';
export * from './components/SlideSection';
export * from './components/PullQuote';
export * from './components/BrowserFrame';
// Operational / dashboard + editor components
export * from './components/InlineEdit';
export * from './components/CodeBlock';
export * from './components/LiveValue';
export * from './components/StaleDataIndicator';
export * from './components/AlarmBadge';
export * from './components/CommandBar';
export * from './components/DensityProvider';
export * from './components/PrintPage';

// Marketing / portfolio compositions
export * from './components/HeroBanner';
export * from './components/CtaBar';
export * from './components/PreviewCard';
export * from './components/IconListItem';
export * from './components/PersonaCard';
export * from './components/Testimonial';
export * from './components/LogoWall';
export * from './components/QRBlock';
export * from './components/TagCloud';
export * from './components/ImageSlot';
export * from './components/Comparison';
export * from './components/ProcessDiagram';
export * from './components/AnnotatedScreen';
export * from './components/Carousel';
export * from './components/SpotlightTour';
export * from './components/Sitemap';

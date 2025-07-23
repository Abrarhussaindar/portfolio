// src/components/Global/colors.ts
/**
 * DevMatrix - Enhanced Color System
 * A comprehensive color palette with semantic naming
 * for consistent application styling
 */

// Define the color object
const colorPalette = {
    // Core Brand Colors
    primary: "#183D3D",
    secondary: "#EEEEEE",
    tertiary: "#040D12",

    // Derived Shades
    primaryDark: "#103030",
    primaryLight: "#2A5F5F",
    primaryGradient: "linear-gradient(135deg, #183D3D 0%, #2A5F5F 100%)",

    secondaryDark: "#DCDCDC",
    secondaryLight: "#F5F5F5", // Define a slightly lighter gray if needed, otherwise use secondary/lightBg

    tertiaryLight: "#1A2B33",

    // Accent & Status Colors
    accent: "#FF7D00",        // Orange accent for important elements and CTAs
    accentLight: "#FF9E40",
    accentGradient: "linear-gradient(135deg, #FF7D00 0%, #FF9E40 100%)", // Added Accent Gradient

    success: "#4CAF50",
    warning: "#FFC107",
    error: "#F44336",

    neutral: "#6c757d",       // Medium gray for less important text
    neutralMedium: "#9B9B9B",   // Added a specific medium gray if needed
    neutralLight: "#E1E4E8",    // Added a specific light gray if needed

    // Backgrounds
    darkBg: "#1A1A1A",
    lightBg: "#FFFFFF",

    // Other Gradients (Ensure colors exist in the main palette)
    successGradient: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)', // Assuming #81C784 is acceptable
    warningGradient: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)', // Assuming #FFD54F is acceptable
    errorGradient: 'linear-gradient(135deg, #F44336 0%, #E57373 100%)',   // Assuming #E57373 is acceptable

    backgroundGradient: 'linear-gradient(180deg, #EEEEEE 0%, #FFFFFF 100%)',
    heroGradient: 'linear-gradient(135deg, #103030 0%, #183D3D 100%)',
} as const; // Use 'as const' for stricter typing

// --- Opacity Helpers ---
// Helper function to convert hex to rgba
export const hexToRgba = (hex: string, alpha: number): string => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Define the final colors object including helpers
export const colors = {
    ...colorPalette,
    // Opacity functions
    primaryOpacity: (opacity: number): string => hexToRgba(colorPalette.primary, opacity),
    secondaryOpacity: (opacity: number): string => hexToRgba(colorPalette.secondary, opacity),
    tertiaryOpacity: (opacity: number): string => hexToRgba(colorPalette.tertiary, opacity),
    accentOpacity: (opacity: number): string => hexToRgba(colorPalette.accent, opacity),
    neutralOpacity: (opacity: number): string => hexToRgba(colorPalette.neutral, opacity),
    lightBgOpacity: (opacity: number): string => hexToRgba(colorPalette.lightBg, opacity),
    successOpacity: (opacity: number): string => hexToRgba(colorPalette.success, opacity),
    darkBgOpacity: (opacity: number): string => hexToRgba(colorPalette.darkBg, opacity),
} as const;

// Optional: Define a type for color keys if needed elsewhere
export type ColorKeys = keyof typeof colors;


// Theme variants (can be kept or removed if not used directly by header)
export const themeVariants = {
    default: {
        background: colors.secondary,
        text: colors.tertiary,
        border: colors.secondaryDark,
    },
    primary: {
        background: colors.primary,
        text: colors.lightBg,
        border: colors.primaryDark,
    },
    accent: {
        background: colors.accent,
        text: colors.lightBg,
        border: colors.tertiary, // Consider contrast
    },
    dark: {
        background: colors.darkBg,
        text: colors.lightBg,
        border: colors.secondary, // Light border on dark
    },
    light: {
        background: colors.lightBg,
        text: colors.tertiary,
        border: colors.secondaryDark,
    },
};

// Generate CSS variables (keep if you use CSS vars elsewhere)
export const generateCSSVariables = (): string => {
    // ... (implementation remains the same)
    let cssVars = ':root {\n';
    Object.entries(colorPalette).forEach(([key, value]) => {
        if (typeof value === 'string' && !key.endsWith('Gradient') && !key.endsWith('Opacity')) {
            cssVars += `  --color-${key}: ${value};\n`;
        }
        // Optionally handle gradients differently if needed
    });
    // Add theme variants if needed
    cssVars += '}';
    return cssVars;
};

export default colors; // Export the enhanced colors object
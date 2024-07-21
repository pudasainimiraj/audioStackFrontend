import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  styles: {
    global: {
      body: {
        fontSize: ['14px', '16px'], // Responsive font size
        padding: ['1rem', '2rem'],  // Responsive padding
        color: 'gray.800',
        bg: 'gray.50',
      },
      h1: {
        fontSize: ['24px', '28px', '32px', '36px'], // Responsive H1 font sizes
      },
      h2: {
        fontSize: ['20px', '24px', '28px'], // Responsive H2 font sizes
      },
      h3: {
        fontSize: ['18px', '22px', '26px'], // Responsive H3 font sizes
      },
      p: {
        margin: '0.5rem 0', // Consistent paragraph spacing
        fontSize: ['14px', '16px'], // Responsive paragraph text
      },
      Button: {
        baseStyle: {
          fontWeight: 'bold',
          borderRadius: 'base', // Rounded buttons
        }
      },
      Text: {
        baseStyle: {
          lineHeight: 'tall', // Improved readability
        }
      },
      Flex: {
        baseStyle: {
          gap: '20', // Consistent spacing in flex layouts
        }
      },
      Spinner: {
        baseStyle: {
          speed: '0.65s', // Custom speed for spinners
        }
      },
      Box: {
        baseStyle: {
          p: '4', // Default padding for Box elements
          borderWidth: '1px', // Default border styling for Box components
          borderColor: 'gray.200',
          rounded: 'md', // Default border radius
        }
      },
    },
  },
});


import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				gothic: ['UnifrakturMaguntia', 'serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				purple: {
					light: '#9b87f5',
					DEFAULT: '#7E69AB',
					dark: '#6E59A5'
				},
				peach: {
					light: '#FDE1D3',
					DEFAULT: '#F5D0BD',
					dark: '#E5B599'
				},
				dark: {
					DEFAULT: '#1A1F2C',
					deeper: '#121520'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'float-in': {
					'0%': { transform: 'translateY(80px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'float-letter': {
					'0%': { transform: 'translateY(60px)', opacity: '0' },
					'70%': { opacity: '1' },
					'100%': { transform: 'translateY(-100px)', opacity: '0' }
				},
				'reveal': {
					'0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
					'100%': { transform: 'scaleY(1)', transformOrigin: 'top' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(-10px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(155, 135, 245, 0.2)' },
					'50%': { boxShadow: '0 0 25px rgba(155, 135, 245, 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-up': 'float-up 0.8s ease-out forwards',
				'float-in': 'float-in 1s ease-out forwards',
				'float-letter': 'float-letter 3s ease-out forwards',
				'reveal': 'reveal 0.8s ease-out forwards',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'slide-up': 'slide-up 0.8s ease-out forwards',
				'slide-right': 'slide-right 0.8s ease-out forwards',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

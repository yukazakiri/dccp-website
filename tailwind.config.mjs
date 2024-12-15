/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ["class", 'class'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			orange: {
    				'50': 'rgb(255, 247, 237)',
    				'100': 'rgb(255, 237, 213)',
    				'200': 'rgb(254, 215, 170)',
    				'300': 'rgb(253, 186, 116)',
    				'400': 'rgb(251, 146, 60)',
    				'500': 'rgb(249, 115, 22)',
    				'600': 'rgb(234, 88, 12)',
    				'700': 'rgb(194, 65, 12)',
    				'800': 'rgb(154, 52, 18)',
    				'900': 'rgb(124, 45, 18)'
    			},
    			teal: {
    				'50': 'rgb(240, 253, 250)',
    				'100': 'rgb(204, 251, 241)',
    				'200': 'rgb(153, 246, 228)',
    				'300': 'rgb(94, 234, 212)',
    				'400': 'rgb(45, 212, 191)',
    				'500': 'rgb(20, 184, 166)',
    				'600': 'rgb(13, 148, 136)',
    				'700': 'rgb(15, 118, 110)',
    				'800': 'rgb(17, 94, 89)',
    				'900': 'rgb(19, 78, 74)'
    			},
    			coral: {
    				'50': 'rgb(255, 241, 240)',
    				'100': 'rgb(255, 228, 224)',
    				'200': 'rgb(255, 197, 188)',
    				'300': 'rgb(255, 155, 140)',
    				'400': 'rgb(255, 117, 99)',
    				'500': 'rgb(255, 77, 51)',
    				'600': 'rgb(255, 38, 0)',
    				'700': 'rgb(204, 30, 0)',
    				'800': 'rgb(153, 23, 0)',
    				'900': 'rgb(102, 16, 0)'
    			},
    			mint: {
    				'50': 'rgb(240, 250, 244)',
    				'100': 'rgb(219, 245, 227)',
    				'200': 'rgb(184, 236, 200)',
    				'300': 'rgb(134, 224, 163)',
    				'400': 'rgb(76, 212, 113)',
    				'500': 'rgb(34, 197, 94)',
    				'600': 'rgb(22, 163, 74)',
    				'700': 'rgb(21, 128, 61)',
    				'800': 'rgb(22, 101, 52)',
    				'900': 'rgb(20, 83, 45)'
    			},
    			lavender: {
    				'50': 'rgb(248, 245, 255)',
    				'100': 'rgb(238, 230, 254)',
    				'200': 'rgb(223, 208, 253)',
    				'300': 'rgb(196, 163, 252)',
    				'400': 'rgb(172, 125, 250)',
    				'500': 'rgb(147, 83, 249)',
    				'600': 'rgb(124, 44, 247)',
    				'700': 'rgb(99, 18, 227)',
    				'800': 'rgb(79, 15, 182)',
    				'900': 'rgb(59, 12, 137)'
    			}
    		},
    		keyframes: {
    			fadeIn: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(-10px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			fadeIn: 'fadeIn 0.2s ease-out',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
  }
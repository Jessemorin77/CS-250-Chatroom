export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [0,2];

export const dictionary = {
		"/(app)": [3,[2]],
		"/(app)/chatrooms": [~4,[2]],
		"/(app)/chatrooms/create.backup": [~7,[2]],
		"/(app)/chatrooms/create": [~6,[2]],
		"/(app)/chatrooms/[slug]": [~5,[2]],
		"/(app)/friends": [~8,[2]],
		"/(auth)/login": [~10],
		"/(auth)/logout": [~11],
		"/(auth)/register": [~12],
		"/(app)/settings": [9,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';
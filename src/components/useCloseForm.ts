import { useEffect } from 'react';

type UseCloseForm = {
	isMenuOpen: boolean;
	onChange: (newValue: boolean) => void;
	ref: React.RefObject<HTMLDivElement>;
};

export const useCloseForm = ({ isMenuOpen, onChange, ref }: UseCloseForm) => {
	useEffect(() => {
		if (!isMenuOpen) return;
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onChange?.(false);
			}
		};
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key == 'Escape') {
				onChange?.(false);
			}
		};

		window.addEventListener('mousedown', handleClick);
		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleEscape);
		};
	}, [onChange, isMenuOpen]);
};

import { useEffect } from 'react';

type UseCloseForm = {
	isOpen: boolean;
	onChange: (newValue: boolean) => void;
	ref: React.RefObject<HTMLDivElement>;
};

export const useCloseForm = ({ isOpen, onChange, ref }: UseCloseForm) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				isOpen;
				onChange?.(false);
			}
		};
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key == 'Escape') {
				isOpen;
				onChange?.(false);
			}
		};

		window.addEventListener('click', handleClick);
		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('click', handleClick);
			window.removeEventListener('keydown', handleEscape);
		};
	}, [onChange, isOpen]);
};

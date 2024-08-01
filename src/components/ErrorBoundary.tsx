import React, { ErrorInfo } from 'react';

export class ErrorBoundary extends React.Component<
	{ children: React.ReactNode },
	{ hasError: boolean }
> {
	constructor(props: { children: React.ReactNode }) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.log('Возникла ошибка!', error, info);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div>
					<p>Произошла ошибка.</p>
				</div>
			);
		}
		return this.props.children;
	}
}

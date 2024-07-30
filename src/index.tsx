import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';
import { ErrorBoundary } from './components/ErrorBoundary';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [selectedOptions, setSelectedOptions] = useState(defaultArticleState);

	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': selectedOptions.fontFamilyOption.value,
					'--font-size': selectedOptions.fontSizeOption.value,
					'--font-color': selectedOptions.fontColor.value,
					'--container-width': selectedOptions.contentWidth.value,
					'--bg-color': selectedOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ErrorBoundary>
				<ArticleParamsForm setSelectedOptions={setSelectedOptions} />
				<Article />
			</ErrorBoundary>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

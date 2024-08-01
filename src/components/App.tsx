import { CSSProperties, useState } from 'react';
import { defaultArticleState } from '../constants/articleProps';
import '../styles/index.scss';
import styles from '../styles/index.module.scss';
import { ErrorBoundary } from './ErrorBoundary';
import { ArticleParamsForm } from './article-params-form';
import { Article } from './article/Article';

export const App = () => {
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

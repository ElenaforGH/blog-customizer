import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { Text } from '../text';
import { Select } from '../select';
import clsx from 'clsx';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useCloseForm } from '../useCloseForm';

type ArticleParamsFormProps = {
	setSelectedOptions: (selectedOptions: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { setSelectedOptions } = props;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const asideRef = useRef<HTMLDivElement>(null);
	const [selectedOptions, updateSelectedOptions] =
		useState(defaultArticleState);
	const changeSelectedOptions = (name: string, value: OptionType) => {
		updateSelectedOptions((selectedOptions) => ({
			...selectedOptions,
			[name]: value,
		}));
	};

	const cleanSelectedOptions = () => {
		setSelectedOptions(defaultArticleState);
	};
	const acceptSelectedOptions = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setSelectedOptions(selectedOptions);
	};
	const showOrHideForm = () => {
		setIsOpen(!isOpen);
	};
	const hideForm = () => {
		setIsOpen(false);
	};

	useCloseForm({ isOpen, onChange: hideForm, ref: asideRef });

	return (
		<>
			<div ref={asideRef}>
				<ArrowButton isOpen={isOpen} onClick={showOrHideForm} />
				<aside
					className={clsx(styles.container, {
						[styles.container_open]: isOpen,
					})}>
					<form className={styles.form} onSubmit={acceptSelectedOptions}>
						<Text size={31} weight={800} uppercase={true}>
							Задайте параметры
						</Text>
						<Select
							title='шрифт'
							selected={selectedOptions.fontFamilyOption}
							options={fontFamilyOptions}
							onChange={(value) =>
								changeSelectedOptions('fontFamilyOption', value)
							}></Select>
						<RadioGroup
							name={'size'}
							options={fontSizeOptions}
							selected={selectedOptions.fontSizeOption}
							title={'размер шрифта'}
							onChange={(value) =>
								changeSelectedOptions('fontSizeOption', value)
							}></RadioGroup>
						<Select
							title='цвет шрифта'
							selected={selectedOptions.fontColor}
							options={fontColors}
							onChange={(value) =>
								changeSelectedOptions('fontColor', value)
							}></Select>
						<Separator />
						<Select
							title='цвет фона'
							selected={selectedOptions.backgroundColor}
							options={backgroundColors}
							onChange={(value) =>
								changeSelectedOptions('backgroundColor', value)
							}></Select>
						<Select
							title='ширина контента'
							selected={selectedOptions.contentWidth}
							options={contentWidthArr}
							onChange={(value) =>
								changeSelectedOptions('contentWidth', value)
							}></Select>
						<div className={styles.bottomContainer}>
							<Button
								title='Сбросить'
								type='reset'
								onClick={cleanSelectedOptions}
							/>
							<Button title='Применить' type='submit' />
						</div>
					</form>
				</aside>
			</div>
		</>
	);
};

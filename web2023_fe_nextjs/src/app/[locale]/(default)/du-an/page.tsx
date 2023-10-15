import { LocaleCode } from '@/src/commons/types';
import SwipperSlider from '@/src/components/base/SwipperSlider/SwipperSlider';
import ListView from '@/src/components/features/listView/ListView';
import Main from '@/src/layouts/main/Main';
import { notFound } from 'next/navigation';
import { fetchBanner } from '../../service';
import { fetchProjects } from './service';
import Head from 'next/head';
import { FormatSeoTitle } from '@/src/utils/helpers';

type Props = {
	params: {
		locale: string;
	};
};

export async function generateMetadata({ params }: Props) {
	const { locale } = params;

	return {
		title: locale == 'vi' ? 'Dự án' : 'Projects',
	};
}

export default async function ProjectPage({ params }: Props) {
	const { locale } = params;
	const [projects, banner] = await Promise.all([
		fetchProjects(locale as LocaleCode),
		fetchBanner(locale, '/du-an'),
	]);

	if (!projects || !projects.length) {
		notFound();
	}

	return (
		<main>
			<Head>
				<title>test title</title>
			</Head>
			{banner && banner?.attributes?.show ? (
				<div className="overlay relative">
					<SwipperSlider
						breakpoints={{
							640: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
						}}
						data={[{ ...banner?.attributes?.image?.data?.attributes, isFullUrl: false }]}
						imgWrapperClass="h-[250px] w-auto md:h-[400px]"
					/>
					{/* <div className="content absolute inset-0 text-red-600">do van hai</div> */}
				</div>
			) : null}
			<Main>
				<ListView data={projects} />
			</Main>
		</main>
	);
}

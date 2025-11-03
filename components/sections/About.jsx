import { Highlighter } from '@/components/ui/highlighter';
import { TextAnimate } from '@/components/ui/text-animate';

export function About() {
	return (
		<section className="relative w-full min-h-screen py-24 sm:py-32 flex items-center justify-center overflow-hidden">
			<div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-10">
				<div className="mx-auto w-full text-center mb-16 md:mb-20">
					<h1 className="mt-4 text-5xl font-bold tracking-tight text-red-600 sm:text-6xl">
						<TextAnimate
							as="span"
							by="word"
							animation="blurInUp"
							duration={0.8}
						>
							About
						</TextAnimate>
					</h1>
				</div>

				<div className="mx-auto max-w-4xl grid grid-cols-1 gap-14 text-gray-300">
					<div className="text-left">
						<h2 className="text-3xl font-bold tracking-tight text-red-500 mb-4">
							<TextAnimate
								as="span"
								by="word"
								animation="slideUp"
								duration={0.5}
							>
								About TED
							</TextAnimate>
						</h2>
						<TextAnimate
							as="p"
							by="text"
							animation="fadeIn"
							duration={0.8}
							delay={0.2}
							className="text-base leading-relaxed break-words"
						>
							{'TED is a nonprofit devoted to '}
							<Highlighter
								action="underline"
								color="#ff2b06"
								strokeWidth={2}
								isView={true}
							>
								spreading ideas
							</Highlighter>
							{
								', usually in the form of short, powerful talks. TED stands for '
							}
							<Highlighter color="#ffd1dc" isView={true} textColor="#1f2937">
								technology, entertainment, and design
							</Highlighter>
							{
								'. Its aim is to inform and educate global audiences in an accessible way. Through TED, thinkers, creators, designers, artists, and experts showcase their talents and "'
							}
							<Highlighter
								action="box"
								color="#ff2b06" 
								iterations={1}
								isView={true}
							>
								ideas worth spreading
							</Highlighter>
							{
								'". Novel and valuable knowledge is exhibited by masterminds and viewed by over 3 billion enthusiasts annually. TED makes an impact by generating and sharing knowledge that matters.'
							}
						</TextAnimate>
					</div>

					<div className="text-left">
						<h2 className="text-3xl font-bold tracking-tight text-red-500 mb-4">
							<TextAnimate
								as="span"
								by="word"
								animation="slideUp"
								duration={0.5}
								delay={0.4}
							>
								About TEDx
							</TextAnimate>
						</h2>
						<TextAnimate
							as="p"
							by="text"
							animation="fadeIn"
							duration={0.8}
							delay={0.6}
							className="text-base leading-relaxed break-words"
						>
							{'TEDx is a '}
							<Highlighter isView={true} textColor="#1f2937">grassroots initiative</Highlighter>
							{' in the spirit of TED\'s mission to research and discover "'}
							<Highlighter
								action="box" 
								color="#ff2b06"
								iterations={1}
								isView={true}
							>
								ideas worth spreading
							</Highlighter>
							{'". It brings TED to local communities through '}
							<Highlighter
								action="underline" 
								color="#ff2b06"
								strokeWidth={2}
								isView={true}
							>
								independently organized events
							</Highlighter>
							{
								'. TEDx makes ideas accessible to students, inspiring learning minds to go beyond textbooks and classrooms, expanding into the future with more open perspectives.'
							}
						</TextAnimate>
					</div>

					<div className="text-left">
						<h2 className="text-3xl font-bold tracking-tight text-red-500 mb-4">
							<TextAnimate
								as="span"
								by="word"
								animation="slideUp"
								duration={0.5}
								delay={0.8}
							>
								TEDx Farook College
							</TextAnimate>
						</h2>
						<TextAnimate
							as="p"
							by="text"
							animation="fadeIn"
							duration={0.8}
							delay={1.0}
							className="text-base leading-relaxed break-words"
						>
							{
								'TEDx Farook College is an independently organized TED event serving as a '
							}
							<Highlighter textColor="#1f2937" isView={true}>
								hub of ideas and knowledge
							</Highlighter>
							{' for the '}
							<Highlighter textColor="#1f2937" isView={true}>
								thinkers of Malabar
							</Highlighter>
							{
								'. Hosted by the Arts and Science college in Malabar, it offers a platform for students across Kerala to share, learn, and aspire. With a futuristic approach to knowledge and progress, TEDxFarookCollege is guided by the idea of '
							}
							<Highlighter
								action="underline"
								color="#ff2b06" 
								strokeWidth={2}
								isView={true}
							>
								advancing academic and personal growth
							</Highlighter>
							{'. It represents both a '}
							<Highlighter
								textColor="#1f2937"
								isView={true}
								color="#ffd1dc"
								iterations={1}
							>
								solace and an inspiration
							</Highlighter>
							{
								' for young minds, while setting the stage for future events and innovation.'
							}
						</TextAnimate>
					</div>
				</div>
			</div>
		</section>
	);
}

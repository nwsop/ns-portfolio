import React from 'react'
import Image from 'next/image'

import ysu from "../public/img/ysu.jpeg";
import drund from "../public/img/drund.jpg"


const Experience = () => {
    return (
        <div>
		<div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section class="w-full">
				<h2 class="secondary-title text-8xl font-bold">Experience</h2>
				<p class="section-paragraph text-xl">These are my most recent positions.</p>

				<div class="space-y-12 my-16">
					<div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
						

						<div class="mb-6 lg:mb-0">
						<Image
							src={drund}
							alt="Landscape picture"
							width={250}
							height={250}
						/>
						</div>

						<div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
							<h3 class="text-white text-5xl font-semibold">Drund</h3>

							<div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
								<h3 class="text-white text-2xl font-semibold underline">QA Automation Engineer</h3>
							</div>

							<div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
								<div class="badge">Python3</div>
								<div class="badge">Selenium</div>
								<div class="badge">Manual Testing</div>
								<div class="badge">Docker</div>
								<div class="badge">Git</div>
								<div class="badge">Jira</div>
								<div class="badge">Mac OS</div>
							</div>

							<p className='text-2xl'>Responsibilities:</p>
							<ul className='decoration-transparent'>
								<li>&gt; Write new Selenium tests to improve the reach of the Selenium suite</li>
								<li>&gt; Fix Errors and Failures within the Selenium Infrastructure</li>
								<li>&gt; Work with Team Leads on builds needing tested</li>
								<li>&gt; Locally test Front End and iOS branches for acceptance</li>
								<li>&gt; Stability Test both iOS and Android Applications and report issues found</li>
								<li>&gt; Upgraded the Selenium Suite from Python 2 to Python 3</li>

							</ul>
						</div>

					</div>
					
					<div class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
						

						<div class="mb-6 lg:mb-0">
						<Image
							src={ysu}
							alt="Landscape picture"
							width={250}
							height={250}
						/>
						</div>

						<div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
							<h3 class="text-white text-5xl font-semibold">Youngstown State University</h3>

							<div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
								<h3 class="text-white text-2xl font-semibold underline">Student Developer</h3>
							</div>

							<div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
								<div class="badge">HTML</div>
								<div class="badge">CSS</div>
								<div class="badge">Drupal 7/8</div>
								<div class="badge">Javascript</div>
								<div class="badge">Flexbox</div>
							</div>

							<p className='text-2xl'>Responsibilities:</p>
							<ul className='decoration-transparent'>
								<li>&gt; Update Web page content for departments using Drupal CMS</li>
								<li>&gt; Assist with migrating and formatting pages in Drupal</li>
								<li>&gt; Format photographs and implement on Drupal Sites</li>
								<li>&gt; Create Drupal Web forms, as needed</li>
								<li>&gt; Provide support for campus web editors with sites in Drupal </li>
								<li>&gt; Work closely with Web Developers on projects </li>

							</ul>
						</div>

					</div>
				</div>

			</section>
		</div>
        </div>
    )
}

export default Experience
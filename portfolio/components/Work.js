import React from 'react'

const Work = () => {
    return (
        <div>
            <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section className="w-full">
				<h2 className="secondary-title text-8xl font-bold">Projects</h2>
				<p className="section-paragraph"></p>

				<div className="space-y-12 my-16">
					<div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
						

						<div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                            <h3 className="text-white text-3xl font-semibold">League of Legends Mastery Application</h3>
							<div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
								<div className="badge">REST</div>
								<div className="badge">Python3</div>
								<div className="badge">Django</div>
								<div className="badge">JSON Parsing</div>
								<div className="badge">Bootstrap 5</div>
							</div>

							<p className="text-secondary text-xl">This application allows users to input their in game name, which gets converted into an encrypted ID through an API request, then gets passed through another API request to return data based on the characters played by the inputted account.</p>
						
                            <a href="https://github.com/nwsop/lolmastery-django-app" target="_blank"><button className='mt-10 px-6 text-lg py-4 bg-theme font-bold hover:bg-orange-500 rounded-3xl w-full'>Check It Out</button></a>   
						
                        </div>
					</div>
				</div>

                <div className="space-y-12 my-16">
					<div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
						

						<div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                            <h3 className="text-white text-3xl font-semibold">Genius.com Lyric Scraper</h3>
							<div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
								<div className="badge">Python3</div>
								<div className="badge">Regex</div>
								<div className="badge">Beautiful Soup (BS4)</div>
								<div className="badge">Requests</div>
							</div>

							<p className="text-secondary text-xl">This application scrapes lyrics from song pages on genius.com and prints the count of each word occurrence throughout the song. It also filters out any text that doesn't belong in the lyrics (such as the text for Chorus, Verse, etc.)</p>
						
                            <a href="https://github.com/nwsop/lyrics_count" target="_blank"><button className='mt-10 px-6 text-lg w-full py-4 bg-theme font-bold hover:bg-orange-500 rounded-3xl'>Check It Out</button></a>   
						
                        </div>
					</div>
				</div>

			</section>
		</div>
        </div>
    )
}

export default Work

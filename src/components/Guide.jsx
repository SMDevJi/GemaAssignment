import React from 'react'

function Guide({ selectedFm, scrollContainerRef }) {

    const labels = {
        'speechace': [9, 8, 7, 6, 5, 4, 2.5],
        'cefr': ['C2', 'C1', 'B2', 'B1', 'A2', 'A1', 'A0'],
        'ielts': [9, 8, 7, 6, 5, 4, 2.5],
        'pte': [90, 84, 66, 46, 29, 20, 12],
        'toefl': [30, 27, 23, 19, 15, 11, 5],
        'toeic': [200, 180, 160, 120, 90, 50, 30]
    }

    const scrollToTop = () => {
        scrollContainerRef.current.scrollTop = 0;
    };

    return (
        <div className=''>
            <div
                onClick={scrollToTop}
                className="cursor-pointer fixed bottom-6 right-6 text-5xl text-green-900 font-extrabold rounded-full border w-15 h-15 flex justify-center items-center bg-green-300">
                ↑
            </div>


            <h1 id='intro' className='mt-2 text-xl text-green-400 font-bold'>Introduction:</h1>
            <h1 className='text-lg text-green-300'>This guide provides details on how various scores are mapped to descriptions.</h1>

            <h1 className='mt-2 text-green-400 font-bold text-xl'>Overall Score Bands:</h1>

            <div className='mt-2 w-[90%] h-0.5 bg-green-300'></div>

            <div className="detail flex text-lg text-green-300 mb-2">
                <div className="left p-2 text-4xl">
                    <h1>{labels[selectedFm][0]}</h1>
                </div>
                <div className="right p-2">
                    <h1>
                        Demonstrates excellent fluency and coherence with rare to no pauses.

                        Has excellent vocabulary and demonstrates preciseness and sophistication in using words.

                        Uses perfect colloquial grammar while speaking.

                        Has excellent pronunciation and sounds similar to a native speaker.

                        Exemplary task achievement with insight and clarity in addressing the task.
                    </h1>
                </div>
            </div>

            <div className='w-[90%] h-0.5 bg-green-300'></div>



            <div className="detail flex text-lg text-green-300 mb-2">
                <div className="left p-2 text-4xl">
                    <h1>{labels[selectedFm][1]}</h1>
                </div>
                <div className="right p-2">
                    <h1>
                        Demonstrates excellent fluency and coherence with occasional pauses.

                        Uses a wide range of vocabulary and idioms with rare mistakes.

                        Uses perfect colloquial grammar while speaking.

                        Has very good pronunciation with very mild accent.

                        Superior task achievement with some amount of creativity in response.
                    </h1>
                </div>
            </div>

            <div className='w-[90%] h-0.5 bg-green-300'></div>





            <div className="detail flex text-lg text-green-300 mb-2">
                <div className="left p-2 text-4xl">
                    <h1>{labels[selectedFm][2]}</h1>
                </div>
                <div className="right p-2">
                    <h1>

                        Demonstrates generally good fluency and coherence while speaking but may take occasional pauses.

                        Is proficient in using sophisticated vocabulary and idiomatic structures.

                        Proficient in expressing complex thoughts using a range of grammar structures.

                        Has reasonably good pronunciation with some accent.

                        Substantial task achievement that addresses most key requirements.
                    </h1>
                </div>
            </div>

            <div className='w-[90%] h-0.5 bg-green-300'></div>





            <div className="detail flex text-lg text-green-300 mb-2">
                <div className="left p-2 text-4xl">
                    <h1>{labels[selectedFm][3]}</h1>
                </div>
                <div className="right p-2">
                    <h1>
                        Demonstrates reasonable fluency and coherence. Sometimes may hesitate while speaking due to inability to come up with appropriate vocabulary or grammar.

                        Has a reasonably high vocabulary and frequently uses uncommon idiomatic structures.

                        Generally uses good grammar while speaking but may make occasional mistakes.

                        Can generally be understood while speaking but can mispronounce frequently.

                        Good task achievement which addresses most key elements.
                    </h1>
                </div>
            </div>

            <div className='w-[90%] h-0.5 bg-green-300'></div>





            <div className="detail flex text-lg text-green-300 mb-2">
                <div className="left p-2 text-4xl">
                    <h1>{labels[selectedFm][4]}</h1>
                </div>
                <div className="right p-2">
                    <h1>
                        Demonstrates below average fluency and coherence. May need remedial training in speaking fluently and language construction.

                        Has limited vocabulary and and may have difficulty expressing complex thoughts.

                        Good at speaking simple sentences but regularly makes grammatical mistakes.

                        Has below average pronunciation accuracy and may not be easy to understand.

                        Moderate task achievement but with significant errors.
                    </h1>
                </div>
            </div>

            <div className='w-[90%] h-0.5 bg-green-300'></div>





            <div className="detail flex text-lg text-green-300 mb-2">
                <div className="left p-2 text-4xl">
                    <h1>{labels[selectedFm][5]}</h1>
                </div>
                <div className="right p-2">
                    <h1>
                        Does not have adequate fluency and coherence and may need remedial training in speaking fluently.

                        Has inadequate vocabulary and may need remedial coaching.

                        Has below average knowledge of grammar usage in speaking. Needs language coaching to improve.

                        Does not have adequate pronunciation accuracy and may require remedial training in speaking.

                        No evidence of task completion or understanding.
                    </h1>
                </div>
            </div>

            <div className='w-[90%] h-0.5 bg-green-300 mb-2'></div>



            <div className="detail flex items-start text-lg text-green-300">
                <div className="left  text-2xl py-2">

                    <h1>{labels[selectedFm][6]}</h1>
                    <h1 className='text-sm'>and below</h1>
                </div>
                <div className="right p-2">
                    <h1>
                        Speech is incoherent or non-existent.

                        Uses a few isolated words.

                        No rateable language unless memorized.

                        Pronunciation is not intelligible.

                        Limited or no attempt at task achievement.
                    </h1>
                </div>
            </div>

            <div className='w-[90%] h-0.5 bg-green-300 my-2'></div>

        </div>
    )
}

export default Guide
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import reportData from './reportData.json'

function App() {
  const [selectedFm, setSelectedFm] = useState('speechace')


  const percentMap = {
    A0: 0,
    A1: 20,
    A2: 40,
    B1: 60,
    B2: 80,
    C1: 90,
    C2: 100
  };

  const getPercent = (value) => {
    if (selectedFm=='cefr') return percentMap[value];
    return (value / reportData.frameworks[selectedFm].maxScore) * 100;
  };


  return (
    <div className='parent min-h-screen  w-screen  bg-neutral-900 text-green-300 font-semibold flex justify-center p-6'>
      <div className="all max-w-6xl w-full h-full  p-2 my-6 flex flex-col items-center">
        <h1 className='text-2xl md:text-3xl'>Student Speaking Assessment Report</h1>
        <div className=' md:p-3 flex flex-col md:flex-row w-full md:w-2/3 justify-between my-6 text-lg '>
          <p>Student: <span className='font-normal'>{reportData.student.name}</span></p>
          <p>Date: <span className='font-normal'>{reportData.student.date}</span></p>
        </div>

        <div className="summary w-full rounded-sm text-lg bg-neutral-800">
          <h1 className='p-3 bg-neutral-700 rounded-t-sm'>Summary of Scores</h1>
          <div className="sub-sum p-3 ">
            <div className="overall flex flex-col md:flex-row">
              <div className="left bg-neutral-800 p-3 mt-2  min-w-50 md:min-w-75 lg:min-w-100  md:pl-8">
                <h1>Framework: <span className='font-normal ml-2'> {reportData.frameworks[selectedFm].label}</span></h1>
                <h1>Overall Score :</h1>
                <h1 className='text-5xl'>
                  <span className='text-6xl'>
                    {reportData.frameworks[selectedFm].overall}
                  </span>
                  {selectedFm == 'cefr' ?
                    ''
                    :
                    <span>
                      /{reportData.frameworks[selectedFm].maxScore}
                    </span>
                  }

                </h1>

                <div className="guide">
                  <Dialog>
                    <DialogTrigger>
                      <div className='bg-green-300 hover:bg-green-400 text-green-800 hover:text-green-900 p-2 rounded-sm cursor-pointer mt-3'>View Scoring Guide</div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>

              </div>
              <div className="right p-3 w-full">
                <div className="pro mb-2">
                  <h1><span className='font-normal'>Pronunciation: </span> {reportData.frameworks[selectedFm].skills.pronunciation}</h1>
                  <Progress value={getPercent(reportData.frameworks[selectedFm].skills.pronunciation)} className='[&>div]:bg-green-300 mt-1 bg-neutral-700' />
                </div>
                <div className="flu mb-2">
                  <h1><span className='font-normal'>Fluency: </span> {reportData.frameworks[selectedFm].skills.fluency}</h1>
                  <Progress value={getPercent(reportData.frameworks[selectedFm].skills.fluency)} className='[&>div]:bg-green-300 mt-1 bg-neutral-700' />
                </div>
                <div className="voc mb-2">
                  <h1><span className='font-normal'>Vocabulary: </span> {reportData.frameworks[selectedFm].skills.vocabulary}</h1>
                  <Progress value={getPercent(reportData.frameworks[selectedFm].skills.vocabulary)} className='[&>div]:bg-green-300 mt-1 bg-neutral-700' />
                </div>
                <div className="gra mb-2">
                  <h1><span className='font-normal'>Grammar: </span> {reportData.frameworks[selectedFm].skills.grammar}</h1>
                  <Progress value={getPercent(reportData.frameworks[selectedFm].skills.grammar)} className='[&>div]:bg-green-300 mt-1 bg-neutral-700' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feedback mt-5 w-full rounded-sm text-lg bg-neutral-800">
          <h1 className='p-3 bg-neutral-700 rounded-t-sm'>Descriptive Feedback</h1>

          <div className="detailed p-3">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className='p-1 '>
                <AccordionTrigger className='text-lg [&>svg]:text-green-300  [&>svg]:h-6 [&>svg]:w-6 cursor-pointer'>Overall ({reportData.frameworks[selectedFm].overall})</AccordionTrigger>
                <AccordionContent>

                  <h1 className='text-lg text-green-200'>
                    Has reasonably good pronunciation with some accent. Demonstrates generally good fluency and coherence while speaking but may take occasional pauses. Is proficient in using sophisticated vocabulary and idiomatic structures. Proficient in expressing complex thoughts using a range of grammar structures.
                  </h1>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className='p-1 '>
                <AccordionTrigger className='text-lg [&>svg]:text-green-300  [&>svg]:h-6 [&>svg]:w-6 cursor-pointer'>Pronunciation ({reportData.frameworks[selectedFm].skills.pronunciation})</AccordionTrigger>
                <AccordionContent>
                  <h1 className='text-lg text-green-200'>
                    Uses a wide range of pronunciation features. Sustains flexible use of features, with only occasional lapses. Is easy to understand throughout; First language accent has minimal impact on intelligibility.
                  </h1>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className='p-1 '>
                <AccordionTrigger className='text-lg [&>svg]:text-green-300  [&>svg]:h-6 [&>svg]:w-6 cursor-pointer'>Fluency ({reportData.frameworks[selectedFm].skills.fluency})</AccordionTrigger>
                <AccordionContent>
                  <h1 className='text-lg text-green-200'>
                    Speaks fluently with only rare repetition or self-correction. Any hesitation in speech is content-related rather than from lack of vocabulary or proper grammar. Speaks coherently with appropriate cohesion between sentences. Develops topics fully and appropriately.
                  </h1>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className='p-1 '>
                <AccordionTrigger className='text-lg [&>svg]:text-green-300  [&>svg]:h-6 [&>svg]:w-6 cursor-pointer'>Vocabulary ({reportData.frameworks[selectedFm].skills.vocabulary})</AccordionTrigger>
                <AccordionContent>
                  <h1 className='text-lg text-green-200'>
                    Has a wide enough vocabulary to discuss topics at length and make meaning clear in spite of inappropriacies. Generally paraphrases successfully.
                  </h1>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className='p-1 '>
                <AccordionTrigger className='text-lg [&>svg]:text-green-300  [&>svg]:h-6 [&>svg]:w-6 cursor-pointer'>Grammar ({reportData.frameworks[selectedFm].skills.grammar})</AccordionTrigger>
                <AccordionContent>
                  <h1 className='text-lg text-green-200'>
                    Uses a mix of simple and complex structures, but with limited flexibility. May make frequent mistakes with complex structures though these rarely cause comprehension problems.
                  </h1>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CourseSyallabus({coursesInfo}) {
    return (
        <div>
            {
                coursesInfo?.data[0]?.syllabus.map((syllabus) => {
                    return (
                        <div >
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={syllabus?.week}
                                    id={syllabus?.week}
                                >
                                    <p className="text-xl font-semibold xsm:text-base" >Week:{syllabus?.week}</p>
                                </AccordionSummary>
                                <AccordionDetails className="flex" >
                                    <p className="font-bold underline xsm:text-base" >
                                        Topic:&nbsp;
                                    </p>
                                    <p className="font-semibold xsm:text-base" >
                                        {syllabus?.topic}
                                    </p>
                                </AccordionDetails>
                                <AccordionDetails className="flex" >
                                    <p className="font-bold underline xsm:text-base">
                                        Content:&nbsp;
                                    </p>
                                    <p className="font-semibold xsm:text-base">
                                        {syllabus?.content}
                                    </p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                })
            }
        </div>
    );
}
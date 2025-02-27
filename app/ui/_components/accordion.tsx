'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {
  AccordionIcon1,
  AccordionIcon2,
  AccordionIcon3,
  AccordionIcon4,
  AccordionIcon5,
} from '@/app/ui/_components/AccordionIcon';

import dataAccordion from '@/app/ui/_data/accordion-data.json';

export default function AccordionHome() {
  return (
    <div className="">
      <Accordion selectionMode="multiple">
        {dataAccordion.map((item, index) => {
          let IconComponent;
          switch (item.img) {
            case '<AccordionIcon1 />':
              IconComponent = AccordionIcon1;
              break;
            case '<AccordionIcon2 />':
              IconComponent = AccordionIcon2;
              break;
            case '<AccordionIcon3 />':
              IconComponent = AccordionIcon3;
              break;
            case '<AccordionIcon4 />':
              IconComponent = AccordionIcon4;
              break;
            case '<AccordionIcon5 />':
              IconComponent = AccordionIcon5;
              break;
            default:
              IconComponent = null;
          }

          return (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={
                <div className="flex items-center gap-3 ">
                  {IconComponent && <IconComponent />}
                  {item.title}
                </div>
              }
              indicator={({ isOpen }) =>
                isOpen ? (
                  <ChevronUpIcon className="w-5 md:w-6" />
                ) : (
                  <ChevronDownIcon className="w-5 md:w-6" />
                )
              }
            >
              {item.desc}
            </AccordionItem>
          );
        })}
      </Accordion>
      <Link
        href="/"
        className="flex h-16 items-center justify-center rounded-xl border-x border-y border-solid border-gray-700 bg-gray-200 bg-gray-200 uppercase dark:border-gray-300 dark:bg-gray-700"
      >
        <span>All features</span>
      </Link>
    </div>
  );
}

'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { AccordionData, AccordionItemMobileMenu } from '@/app/lib/definitions';
import dataAccordion from '@/app/ui/_data/accordionMobileMenu.json';

const data: AccordionData = dataAccordion;

export default function AccordionHome() {
  return (
    <Accordion selectionMode="multiple">
      {Object.keys(data).map((category, index) => (
        <AccordionItem
          key={index}
          aria-label={category}
          title={
            <div className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300">
              {category}
            </div>
          }
          indicator={<ChevronLeftIcon className="w-5 md:w-6" />}
        >
          {data[category].map((item: any, subIndex: any) => (
            <Link
              key={subIndex}
              href={item.link}
              className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:border-b hover:border-blue-800 hover:font-bold hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:focus:border-blue-300 dark:focus:text-blue-300"
            >
              {item.title}
            </Link>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

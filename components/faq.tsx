'use client'

import React from 'react';
import {Accordion, AccordionItem} from "@/components/ui/accordion";


const FAQ = () => {
  const faqs = [
    {
      question: 'What is the price of the VIP membership?',
      answer: 'The VIP membership is priced at $5000 per month. This includes access to the VIP lounge, VIP events, and VIP drinks.'
    },
    {
      question: 'What is the duration of the VIP membership?',
      answer: 'The VIP membership is valid for 12 months. After that, you will need to renew your membership to continue enjoying the benefits.'
    },
    {
      question: 'What is the process for renewing my membership?',
      answer: 'To renew your membership, you will need to contact our VIP concierge. They will be able to provide you with the necessary information and answer any questions you may have.'
    },
    {
      question: 'What is the process for canceling my membership?',
      answer: 'To cancel your membership, you will need to contact our VIP concierge. They will be able to provide you with the necessary information and answer any questions you may have.'
    },
    {
      question: 'What is the process for upgrading my membership?',
      answer: 'To upgrade your membership, you will need to contact our VIP concierge. They will be able to provide you with the necessary information and answer any questions you may have.'
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 text-center shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="p-6 rounded-lg shadow-md ">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} title={faq.question} className="border-b py-4 text-left text-lg font-medium text-white">
            <p className="text-white leading-relaxed">{faq.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
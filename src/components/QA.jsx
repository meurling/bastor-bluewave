import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QA = () => {
  return (
    <section id="qa" className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is trade credit insurance?</AccordionTrigger>
            <AccordionContent>
              Trade credit insurance protects businesses against non-payment of commercial debt. It covers your accounts receivable, ensuring you get paid even if your customer defaults on payment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can trade credit insurance benefit my business?</AccordionTrigger>
            <AccordionContent>
              It can help you grow your business safely, improve your cash flow, enhance your creditworthiness, and provide peace of mind when dealing with new or existing customers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is trade credit insurance expensive?</AccordionTrigger>
            <AccordionContent>
              The cost varies depending on your business size, sector, and risk profile. However, the benefits often outweigh the costs by protecting your cash flow and enabling business growth.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default QA;
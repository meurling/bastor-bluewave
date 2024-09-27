import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QA = () => {
  const qaItems = [
    {
      question: "What is trade credit insurance?",
      answer: "Trade credit insurance protects businesses against non-payment of commercial debt. It covers your accounts receivable, ensuring you get paid even if your customer defaults on payment due to insolvency or other reasons."
    },
    {
      question: "How can trade credit insurance benefit my business?",
      answer: "Trade credit insurance can help you grow your business safely, improve cash flow, enhance creditworthiness, provide peace of mind when dealing with new or existing customers, and facilitate access to better financing terms from lenders."
    },
    {
      question: "What types of businesses need trade credit insurance?",
      answer: "Any business that offers credit terms to customers can benefit from trade credit insurance. This includes manufacturers, wholesalers, service providers, and exporters across various industries."
    },
    {
      question: "How much does trade credit insurance cost?",
      answer: "The cost of trade credit insurance varies depending on your business size, sector, customer base, and risk profile. Typically, premiums range from 0.1% to 0.4% of insured turnover, but can offer significant value in risk mitigation and business growth."
    },
    {
      question: "What risks does trade credit insurance cover?",
      answer: "Trade credit insurance typically covers commercial risks such as customer insolvency, protracted default (slow payment), and political risks like currency inconvertibility, contract frustration, or export license cancellation for international trade."
    },
    {
      question: "How does the claims process work for trade credit insurance?",
      answer: "If a customer fails to pay, you file a claim with your insurer. After a waiting period (usually 60-90 days), the insurer will pay out a percentage of the outstanding amount (typically 90%). Bastor assists throughout this process to ensure smooth claim settlement."
    },
    {
      question: "Can I insure all of my customers or just some of them?",
      answer: "You can choose to insure your entire turnover (whole turnover policy) or select specific customers or invoices (single risk policy). Bastor can help you determine the best approach based on your business needs and risk profile."
    },
    {
      question: "How does trade credit insurance differ from factoring?",
      answer: "While both offer protection against non-payment, trade credit insurance doesn't involve selling your receivables. It allows you to maintain customer relationships, offers more comprehensive coverage, and often comes at a lower cost compared to factoring."
    },
    {
      question: "Why should I choose Bastor as my trade credit insurance broker?",
      answer: "Bastor offers expert guidance in selecting the right policy, assists with risk assessment, helps manage claims, and provides ongoing support. Our deep industry knowledge and strong insurer relationships ensure you get the best coverage at competitive rates."
    }
  ];

  return (
    <section id="qa" className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {qaItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default QA;
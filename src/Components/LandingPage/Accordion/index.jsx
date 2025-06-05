import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";


const FAQSection = () => {
  return (
    <section className="bg-[#D5D5E0] py-20 px-6 md:px-20 border-l-10 border-[#1C1F58]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1C1F58] mb-12">Frequently Asked Questions
      </h2>

      <div className="w-full max-w-4xl bg-[#1C1F58] mx-auto border px-4 md:px-12 py-6 rounded-[20px] hover:shadow-xl hover:shadow-[#1C1F58]">
        <Accordion type="single" collapsible className="space-y-2">

          <AccordionItem value="item-1" className="p-4 rounded-lg bg-[#D5D5E0]">
            <AccordionTrigger className="flex justify-between items-center w-full text-left text-xl md:text-2xl font-medium text-[#1C1F58]  group">
              <span>What is Spend-Sense and how does it work?</span>
              <ChevronDown className="h-5 w-5 text-[#1C1F58] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm md:text-base text-black">Spend-Sense is a local budgeting platform that helps you create personalized budgets, track spending, and gain insights to reach your financial goals all in one place.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="p-4 rounded-lg bg-[#D5D5E0]">
            <AccordionTrigger className="flex justify-between items-center w-full text-left text-xl md:text-2xl font-medium text-[#1C1F58]  group">
              <span>Is Spend-Sense free to use?</span>
              <ChevronDown className="h-5 w-5 text-[#1C1F58] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm md:text-base text-black">Yes! Spend-Sense offers a free version with powerful budgeting tools. Premium features will be available soon for those who want advanced analytics and support.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="p-4 rounded-lg bg-[#D5D5E0]">
            <AccordionTrigger className="flex justify-between items-center w-full text-left text-xl md:text-2xl font-medium text-[#1C1F58]  group">
              <span>Can I track both spending and savings?</span>
              <ChevronDown className="h-5 w-5 text-[#1C1F58] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm md:text-base text-black">Absolutely! Our platform allows you to monitor how much you spend and save every month, with clear visual reports to guide your decisions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="p-4 rounded-lg bg-[#D5D5E0]">
            <AccordionTrigger className="flex justify-between items-center w-full text-left text-xl md:text-2xl font-medium text-[#1C1F58]  group">
              <span>Is my financial data secure?</span>
              <ChevronDown className="h-5 w-5 text-[#1C1F58] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm md:text-base text-black">Yes. We use industry-standard encryption and secure cloud infrastructure to keep your data safe and private.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="p-4 rounded-lg bg-[#D5D5E0]">
            <AccordionTrigger className="flex justify-between items-center w-full text-left text-xl md:text-2xl font-medium text-[#1C1F58]  group">
              <span>How do I get started?</span>
              <ChevronDown className="h-5 w-5 text-[#1C1F58] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-sm md:text-base text-black">Just sign up, set your budget, and start tracking. You’ll be guided step-by-step, even if you’re new to budgeting!
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

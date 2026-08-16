import { Accordion, AccordionItem } from 'lux-ui';
import PreviewBlock from '@/components/atoms/PreviewBlock';
import PropsTable from '@/components/atoms/PropsTable';
import CompPageLayout from '@/components/atoms/CompPageLayout';
import SectionLabel from '@/components/atoms/SectionLabel';
import { AccordionRows } from '@/constant/data';

const accordionData = [
  { id: 'a', question: 'What is lux-ui?', answer: 'A React component library powered by luxcss.' },
  { id: 'b', question: 'Is it free?', answer: 'Yes, MIT licensed.' }
]

export default function AccordionPage() {
  return (
    <CompPageLayout name="Accordion" description="Expandable sections — single or multi-open.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Accordion allowMultiple defaultOpen="a">\n  <AccordionItem id="a" title="What is lux-ui?">A React component library powered by luxcss.</AccordionItem>\n  <AccordionItem id="b" title="Is it free?">Yes, MIT licensed.</AccordionItem>\n   <AccordionItem id="b" title="Is it free?">Yes, MIT licensed.</AccordionItem>\n</Accordion>`}>
          <div style={{ width: '100%' }}>
            <Accordion allowMultiple defaultOpen="a">
              {
                accordionData.map((data) => <AccordionItem id={data.id} title={data.question}>{data.answer}</AccordionItem>)
              }
            </Accordion>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={AccordionRows} />
    </CompPageLayout>
  );
}

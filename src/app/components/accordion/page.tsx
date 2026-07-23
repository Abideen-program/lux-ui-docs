import { Accordion, AccordionItem } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';
import CompPageLayout from '@/components/CompPageLayout';
import SectionLabel from '@/components/SectionLabel';

export default function Page() {
  return (
    <CompPageLayout name="Accordion" description="Expandable sections — single or multi-open.">
      <div className="comp-section">
        <SectionLabel>Basic</SectionLabel>
        <PreviewBlock code={`<Accordion allowMultiple defaultOpen="a">\n  <AccordionItem id="a" title="What is lux-ui?">A React component library powered by luxcss.</AccordionItem>\n  <AccordionItem id="b" title="Is it free?">Yes, MIT licensed.</AccordionItem>\n   <AccordionItem id="b" title="Is it free?">Yes, MIT licensed.</AccordionItem>\n</Accordion>`}>
          <div style={{ width: '100%' }}>
            <Accordion allowMultiple defaultOpen="a">
              <AccordionItem id="a" title="What is lux-ui?">A React component library powered by luxcss.</AccordionItem>
              <AccordionItem id="b" title="Is it free?">Yes, MIT licensed.</AccordionItem>
              <AccordionItem id="c" title="Is lux-ui ready to use?">No, it is not yet ready.</AccordionItem>
            </Accordion>
          </div>
        </PreviewBlock>
      </div>
      <PropsTable rows={[
        { name: 'allowMultiple', type: 'boolean', default: 'false', description: 'Allow multiple items open at once.' },
        { name: 'defaultOpen', type: 'string | string[]', description: 'Initially open item id(s).' },
        { name: 'id', type: 'string', description: '(AccordionItem) Unique identifier.' },
        { name: 'title', type: 'ReactNode', description: '(AccordionItem) Header content.' },
      ]} />
    </CompPageLayout>
  );
}

import { Accordion, AccordionItem } from 'lux-ui';
import PreviewBlock from '@/components/PreviewBlock';
import PropsTable from '@/components/PropsTable';

export default function AccordionPage() {
  return (
    <section className="content-section">
      <h1 className="section-heading">Accordion</h1>
      <p className="section-sub">Expandable sections — single or multi-open.</p>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Basic</h3>
      <PreviewBlock code={`<Accordion allowMultiple defaultOpen="a">
  <AccordionItem id="a" title="What is lux-ui?">
    A React component library powered by luxcss.
  </AccordionItem>
  <AccordionItem id="b" title="Is it free?">
    Yes, MIT licensed.
  </AccordionItem>
</Accordion>`}>
        <div style={{ width: '100%' }}>
          <Accordion allowMultiple defaultOpen="a">
            <AccordionItem id="a" title="What is lux-ui?">
              A React component library powered by luxcss.
            </AccordionItem>
            <AccordionItem id="b" title="Is it free?">
              Yes, MIT licensed.
            </AccordionItem>
          </Accordion>
        </div>
      </PreviewBlock>

      <h3 style={{ fontSize: '1.05rem', marginTop: '2rem' }}>Props</h3>
      <PropsTable rows={[
        { name: 'allowMultiple', type: 'boolean', default: 'false', description: 'Allow multiple items open at once.' },
        { name: 'defaultOpen', type: 'string | string[]', description: 'Initially open item id(s).' },
        { name: 'id', type: 'string', description: '(AccordionItem) Unique identifier.' },
        { name: 'title', type: 'ReactNode', description: '(AccordionItem) Header content.' },
      ]} />
    </section>
  );
}

import '@fontsource-variable/manrope';
import { createRoot } from 'react-dom/client';
import { RiGithubFill } from '@remixicon/react';
import { SocialIcons } from './SocialIcons';
import { DesignMenu } from './DesignMenu';
import { DropdownMenu } from './vendor/arc/dropdown-menu/dropdown-menu';
import PixelCard from './components/originkit/ui/pixelcard';
import { ModelWheel, type WheelModel } from './vendor/affectui/illustrations/model-wheel';
import { sitePaths } from './site-paths';
import './styles/arc-foundation.css';
import './styles/design-landing.css';

const providers: WheelModel[] = [
  { name: 'Daytona', src: '/assets/daytona-mark.png' },
  { name: 'OnKernel', src: '/assets/kernel-mark.svg' },
  { name: 'Blaxel', src: '/assets/blaxel-mark.png' },
  { name: 'E2B', src: '/assets/e2b-mark.jpg' },
  { name: 'Google Cloud', src: '/assets/google-cloud-mark.svg' },
  { name: 'Namespace', src: '/assets/namespace-mark.png' },
  { name: 'Superserve', src: '/assets/superserve-mark.png' },
];

// The default Selenium workflow in platform-services/backend/src/workflows/default-workflow.ts.
const seleniumSteps = [
  { icon: '↗', title: 'Open a website', detail: 'https://www.selenium.dev/selenium/web/web-form.html' },
  { icon: '◷', title: 'Wait', detail: '15 seconds' },
  { icon: 'T', title: 'Enter text', detail: 'Hello from Virela! → The Text input field' },
  { icon: '↵', title: 'Press a key', detail: 'Ctrl+a + Right' },
  { icon: '↕', title: 'Scroll', detail: 'down · 300 pixels' },
  { icon: '⌖', title: 'Click', detail: 'The Default checkbox. Do not submit the form.' },
  { icon: '✦', title: 'Ask AI to act', detail: 'Confirm the Text input field contains exactly Hello from Virela! and the Default checkbox is selected. Do not submit the form or change anything.' },
];

function ComputerUseLanding() {
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);
  return <>
    <div className="computer-pixel-background" aria-hidden="true"><PixelCard alwaysActive backgroundColor="#080808" borderWidth={0} radius={0} gap={14} pixelSize={2} style={{ width: '100%', height: '100%' }}/></div>
    <header className="design-header computer-header"><nav aria-label="Main navigation">
      <a className="design-logo" href={sitePaths.home} aria-label="Openly home"><img src="/assets/o-ring-white-transparent.svg" alt=""/></a>
      <div className="design-links">
        <DropdownMenu openOnHover current label="Agents" align="center" triggerClassName="design-agents-trigger computer-agents-current" menuClassName="design-agents-menu" items={[
          { label: 'Computer-use', current: true, onSelect: () => { window.location.href = sitePaths.computerUse; } },
          { label: 'Research', disabled: true },
        ]}/>
        <DesignMenu triggerClassName="computer-design-trigger" menuClassName="design-main-menu"/>
        <button type="button" disabled>Energy</button>
      </div>
      <SocialIcons className="design-socials"/>
    </nav></header>
    <main className="computer-main"><section className="design-hero computer-hero" aria-labelledby="computer-use-title">
      <div className="design-hero-copy">
      <h1 id="computer-use-title">Computer-use for all.</h1>
      <p>Build workflows that help agents carry out tasks on a computer.<br/>Open source and available for anyone to use.</p>
      <div className="computer-actions">
        <a className="computer-workspace-link" href="https://github.com/openlybuilt/cua" target="_blank" rel="noopener noreferrer"><RiGithubFill size={19} aria-hidden="true"/>GitHub repository <span className="design-sr">(opens in a new tab)</span></a>
        <a className="computer-workspace-link" href={local ? 'http://127.0.0.1:3000/' : 'https://platform.cua.openlybuilt.com'}>No-code web app <span aria-hidden="true">↗</span></a>
      </div>
    </div></section>
      <section className="computer-section" aria-labelledby="computer-providers-title">
        <div className="computer-section-inner">
          <div className="computer-section-copy"><h2 id="computer-providers-title">Choose where your agent runs.</h2><p>Currently supports Daytona and OnKernel. The other providers shown are not yet integrated.</p></div>
          <div className="computer-provider-wheel" data-theme="dark"><ModelWheel scrollable models={providers} label="Providers: Daytona, OnKernel, Blaxel, E2B, Google Cloud, Namespace, and Superserve. Only Daytona and OnKernel are currently integrated."/></div>
        </div>
      </section>
      <section className="computer-section" aria-labelledby="computer-schedule-title">
        <div className="computer-section-inner computer-section-reverse">
          <div className="computer-section-copy"><h2 id="computer-schedule-title">Run on your schedule.</h2><p>Start workflows when you need them, or connect an external scheduler to trigger runs at regular intervals.</p></div>
          <div className="computer-schedule-visual" aria-hidden="true"><div className="computer-schedule-time">09:00 <span>Every day</span></div><div className="computer-schedule-line"/><div className="computer-schedule-task"><span className="computer-schedule-dot"/>Run workflow</div></div>
        </div>
      </section>
      <section className="computer-section" aria-labelledby="computer-nocode-title">
        <div className="computer-section-inner">
          <div className="computer-section-copy"><h2 id="computer-nocode-title">Build without the setup.</h2><p>Prefer not to run the infrastructure yourself? Build and manage workflows visually with the no-code web app.</p><a className="computer-workspace-link" href={local ? 'http://127.0.0.1:3000/' : 'https://platform.cua.openlybuilt.com'}>Explore the web app <span aria-hidden="true">↗</span></a></div>
          <div className="computer-workflow-example" aria-label="Browser workflow demo">
            <span className="computer-builder-end">Start</span>
            <ol className="computer-workflow-steps">{seleniumSteps.map(step => <li key={step.title}><span className="computer-builder-line" aria-hidden="true"/><div className="computer-builder-node"><i aria-hidden="true">{step.icon}</i><span><b>{step.title}</b><small>{step.detail}</small></span></div></li>)}</ol>
            <span className="computer-builder-line" aria-hidden="true"/><span className="computer-builder-end">End</span>
          </div>
        </div>
      </section>
    </main>
  </>;
}

createRoot(document.getElementById('computer-use-root')!).render(<ComputerUseLanding/>);

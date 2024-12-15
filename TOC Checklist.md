## Checklist for the TOC testing

### General Rendering
The TOC is visible and correctly aligned on the left side of the page.  
The page header is displayed correctly at the top of the page.  
The TOC and page header do not overlap or obstruct each other.  
When scrolling, the page header remains in its expected position (e.g., sticky or static) without affecting the TOC's visibility.  
The TOC layout adapts correctly to different screen resolutions and device types (desktop, tablet, mobile).  
Multilingual headings (e.g., Cyrillic, Chinese) render properly in the TOC.  
The TOC supports RTL languages (e.g., Arabic, Hebrew) with proper alignment.  

### Navigation Functionality  
Clicking a TOC link redirects the page to the corresponding page.  
The current section is highlighted in the TOC.  
Collapsible sections expand and collapse correctly when toggled.  
Clicking a collapsed section expands it to reveal its subsections.  
The TOC retains its collapsed/expanded state when the page is refreshed or revisited.   

### Edge Cases  
Long headings are displayed correctly (e.g., truncated or wrapped) without breaking the layout.  
Skipped heading levels (e.g., `h1` followed by `h3`) do not break the TOC’s functionality.  
Empty or missing headings in the content do not cause errors in the TOC.  
Dynamically loaded content updates the TOC correctly.  

### Accessibility  
The TOC supports keyboard navigation (tab and enter keys) for traversing and activating links.  
Interactive elements (e.g., collapsible sections) are accessible via screen readers.  
ARIA roles and labels are correctly implemented for navigation and interaction.  

### Browser and Device Compatibility  
The TOC works correctly in the latest versions of:  
Chrome  
Firefox  
Safari  
Edge  
The TOC functions correctly on mobile browsers (e.g., Chrome Mobile, Safari on iOS).  
The TOC renders properly on common devices (e.g., iPhone, Android phones, tablets).  

### Performance  
The TOC loads within an acceptable time (<1 second on average).  
Navigation and scrolling interactions are smooth and responsive.  

### Error Handling  
The TOC displays a fallback message if no headings are found.  
The TOC handles JavaScript errors without crashing the page.  
The TOC works correctly even under poor network conditions or incomplete page loads.